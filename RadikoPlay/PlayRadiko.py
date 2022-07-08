#!/usr/bin/env python3
# -*- coding: utf-8 -*-


import datetime
import logging
import re
import shlex
import sys
import tempfile

from RadikoPlay.RadikoAuth import RadikoAuth
from RadikoPlay.radiko_url import *


class PlayRadikoCmdBuilder:
  ## コマンドのパスを覚えておく
  ffmpeg = None
  mplayer = None
  token = None
  tee = None
  use_player = 'ffplay'
  output = None

  def __init__(self):
    self.check_path()
    self.auth()

  def auth(self):
    auth = RadikoAuth()
    token = auth.access_auth()
    self.token = token

  def check_path(self):
    self.ffmpeg = self.get_path('ffmpeg')
    self.mplayer = self.get_path('mplayer')
    self.ffplay = self.get_path('ffplay')
    self.tee = self.get_path('tee')

  def get_path(self, cmd_name):
    # コマンドのパスや存在チェックや環境チェック
    if subprocess.getstatusoutput(f'type {cmd_name}')[0] == 0:
      return subprocess.check_output(f"which {cmd_name}", shell=True).strip().decode('utf8')
    else:
      print(f'{cmd_name} not found , install {cmd_name} ')
      return None

  def __output_filename(self, channel, start=None, duration=1800):
    from_t = self.__str_to_datetime(start) if start else datetime.datetime.now()
    end__t = self.__calc_end_datetime(from_t, duration)

    from_t = datetime.datetime.strftime(from_t, '%Y-%m-%d-%H:%M')
    end__t = datetime.datetime.strftime(end__t, '_%H:%M')
    output = f'{channel}_{from_t}{end__t}.aac'

    return output

  def exec_cmd(self, cmds, duration=1800):
    p_list = []

    if len(cmds) > 1:
      for idx, cmd in enumerate(cmds):
        logging.info(cmd)
        if idx == 0:
          p = subprocess.Popen(shlex.split(cmd.strip()), stdout=subprocess.PIPE)
        elif idx == (len(cmd) - 1):
          p = subprocess.Popen(shlex.split(cmd.strip()), stdin=p_list[(idx - 1)].stdout)
        else:
          p = subprocess.Popen(shlex.split(cmd.strip()), stdin=p_list[idx - 1].stdout, stdout=subprocess.PIPE)

        ##
        p_list.append(p)
    else:
      p = subprocess.Popen(shlex.split(cmds[0].strip()))
      p_list.append(p)

    for idx, p in enumerate(reversed(p_list)):
      try:
        p.wait(duration)
      except subprocess.TimeoutExpired:
        print("we got a timeout. exiting")
        p.terminate()

    sys.exit(0)

  def play_and_save(self, channel, output=None, start=None, duration=1800, no_exec_cmd=False):
    cmds = self.__play_and_save(channel, output=output, start=start, duration=duration)
    if no_exec_cmd is False:
      self.exec_cmd(cmds, duration=duration)
      self.output = output if output is not None else self.__output_filename(channel, start, duration)
      self.fix_stream(output)
    return cmds

  def __play_and_save(self, channel, output=None, start=None, duration=1800):
    output = output if output is not None else self.__output_filename(channel, start, duration)
    #
    cmds = []
    cmd1 = self.__save_cmd(
      channel,
      output='-',
      start=start,
      duration=duration,
      input_options=f'-t {duration}',
      output_options='-f mpegts -acodec copy')
    cmd2 = f"{self.tee} {output}"
    cmd3 = self.__play_cmd('-')
    #

    cmds.append(cmd1)
    cmds.append(cmd2)
    cmds.append(cmd3)

    return cmds

  def play(self, channel, start=None, duration=None, no_exec_cmd=False):

    url = self.__radiko_m3u8_url(channel, start, duration)
    cmd = self.__play_cmd(url)
    cmd = [cmd]
    if no_exec_cmd is False:
      self.exec_cmd(cmd, duration=duration)
    return cmd

  def save(self, channel, output=None, start=None, duration=1800,no_exec_cmd=False):
    cmd = self.__save_cmd(channel, output, start, duration)
    cmd = [cmd]
    if no_exec_cmd is False:
      self.exec_cmd(cmd, duration=duration)
    return cmd

  def __ffmpeg_cmd(self, input, output=None, input_options='', output_options=''):
    input_options = f" -headers 'X-Radiko-AuthToken: {self.token}' " + input_options
    # cmd = f'{self.ffmpeg} {input_options} -i "{input}"  {output_options} "{output}"  '
    cmd = f'{self.ffmpeg} -loglevel panic {input_options} -i "{input}"  {output_options} "{output}"  '
    return cmd

  def __save_cmd(self, channel, output=None, start=None, duration=1800, input_options='', output_options=''):
    url = self.__radiko_m3u8_url(channel, start, duration)
    output = output if output is not None else self.__output_filename(channel, start, duration)
    cmd = self.__ffmpeg_cmd(
      url, output=output,
      input_options=input_options,
      output_options=output_options
    )
    return cmd

  def __radiko_m3u8_url(self, channel, start=None, duration=None):
    url = None
    if start and duration:
      [start, end] = self.__calc_start_end(start, duration)
      url = radiko_timefree_url(channel, self.__format_timefree(start), self.__format_timefree(end))
    else:
      url = radiko_live_url(channel)
    return url

  def __calc_start_end(self, start, duration):
    start = self.__str_to_datetime(start)
    end = self.__calc_end_datetime(start, duration)
    return [start, end]

  def __str_to_datetime(self, str_date):
    format = '%Y-%m-%d %H:%M:%S'
    cmd = f" date -d '{str_date}' +'{format}' "
    ret = subprocess.getoutput(cmd)
    d = datetime.datetime.strptime(ret, format)
    return d

  def __calc_end_datetime(self, start, duration):
    from datetime import datetime, timedelta
    end = start.timestamp() + timedelta(seconds=duration).total_seconds()
    end = datetime.fromtimestamp(end)
    return end

  def __play_by_ffplay(self, input, options=""):
    if re.match('^http.+radiko.+m3u8.*', input):
      options = f" -headers 'X-Radiko-AuthToken: {self.token}'" + options
    options = " -nodisp -vn -sn -loglevel error " + options
    player_cmd = f"{self.ffplay} {options} '{input}'"
    return player_cmd

  def __play_by_mplayer(self, input, options=""):
    if re.match('^http.+radiko.+m3u8.*', input):
      options = options + f"-http-header-fields 'X-Radiko-AuthToken: {self.token}'"
    player_cmd = f"{self.mplayer} {options} '{input}'"
    return player_cmd

  def __play_cmd(self, input, options=''):
    # mplayer は https をサポートしてないことがある。
    if (self.use_player == 'mplayer' and self.mplayer):
      return self.__play_by_mplayer(input, options)
    if (self.use_player == 'ffplay' and self.ffplay):
      return self.__play_by_ffplay(input, options)

  def __format_timefree(self, datetime_represent):
    ## format timefree
    ret = datetime_represent
    if type(datetime_represent) == str:
      ret = daetime_format_timefree(datetime_represent)
    if type(datetime_represent) == int or type(datetime_represent) == float:
      ret = datetime.datetime.fromtimestamp(datetime_represent)
    if type(datetime_represent) == datetime.datetime:
      ret = datetime.datetime.strftime(datetime_represent, '%Y%m%d%H%M%S')
    return ret

  def save_cmd(self, input, out_filename, duration=None, input_options='', output_options=''):
    if duration:
      input_options += f" -t '{duration}'"
    ##
    cmd = f'{self.ffmpeg} -loglevel panic {input_options} -i "{input}"  {output_options} "{out_filename}"  '
    # cmd = f'{self.ffmpeg} {input_options} -i "{input}"  {output_options} "{out_filename}"  '
    return cmd

  def __fix_stream_cmd(self, f_name):
    cmds = []
    tmp = tempfile.gettempdir() + "/out.m4a"
    cmd = f'{self.ffmpeg} -loglevel panic -i "{f_name}" -vn -acodec copy  {tmp}'
    cmds.append(cmd)
    cmd = f"mv '{tmp}' '{f_name}'"
    cmds.append(cmd)
    return cmds

  def fix_stream(self, f_name):
    """TS のストリームを補正して通常のm4a にする。"""
    cmds = self.__fix_stream_cmd(f_name)
    logging.info(cmds)
    for cmd in cmds:
      p1 = subprocess.Popen(cmd, shell=True)
      p1.communicate()
