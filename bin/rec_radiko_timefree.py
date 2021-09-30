#!/usr/bin/env python

import os


import subprocess
import shlex
import shutil
from pathlib import Path
import locale


import argparse
import datetime
import xml.etree.ElementTree as ET
import pathlib




class RecRadikoTimeFree:
  channel = ''
  start = ''
  duration=''
  day=''
  info =''


  def rec_radiko(self, path):


    locale.setlocale(locale.LC_TIME, 'ja_JP.UTF-8')
    d = self.day.strftime("%Y-%m-%d")
    cmd ='python3 %s %s -f "%s %s" -d %s -o'
    cmd = cmd % (path,self.channel,d,self.start,self.duration)
    # print(shlex.split(cmd))
    subprocess.call(shlex.split(cmd));

  def  fix_stream(self):

    d = self.day.strftime("%Y-%m-%d")
    dir = Path.cwd()
    src_name = list(dir.glob("%s_%s-%s*" % ( self.channel, d, self.start) ) )[0]

    dst_name = str(src_name).replace('aac','m4a')
    cmd = f'ffmpeg -y -i "{src_name}" -vn -acodec copy  {dst_name}'
    subprocess.call(shlex.split(cmd), stderr=subprocess.PIPE )
    os.remove(src_name)
    self.add_mp4tag(dst_name)
    self.add_youbi_to_filename(dst_name)

  def add_mp4tag ( self,f_name ) : 
    d = self.day.strftime("%Y-%m-%d")

    title = os.path.basename( f_name ) 
    title = os.path.splitext(title)[0]

    locale.setlocale(locale.LC_TIME, 'ja_JP.UTF-8')
    title = os.path.basename(str(f_name).replace(self.day.strftime("%Y-%m-%d"), self.day.strftime("%Y-%m-%d_%a")))
    title = os.path.splitext(title)[0]


    cmd=f'mp4tags -s "{title}"  -picture {self.channel}.png  -album "{self.channel}" -artist "Radiko#{self.channel}" -comment "{d}_{self.start}" "{f_name}"'
    print(cmd)
    subprocess.call(shlex.split(cmd));

    self.addtag_prog_info( f_name )

  def addtag_prog_info( self, f_name ):
    global channel, start , duration,day

    date = self.day.strftime("%Y%m%d")
    info = self.prog_info()
    if info is None :
        return

    cmd=f'mp4tags  -comment \'{info["xml"]}\'  "{f_name}"'
    subprocess.call(shlex.split(cmd));

    url = info['img']
    cmd=f'curl -s --output /tmp/radiko.png -L "{url}"'
    print(cmd)
    subprocess.call(shlex.split(cmd));
    img_path =self.save_programme_logo()

    cmd=f'mp4tags  -picture "{img_path}" "{f_name}"'
    print(cmd)
    subprocess.call(shlex.split(cmd));
    os.remove('/tmp/radiko.png')

    cmd=f'mp4tags -s \'{info["title"]}_{date}\'  -artist \'{info["pfm"]}\' "{f_name}" '
    print(cmd)
    subprocess.call(shlex.split(cmd));

    cmd=f'mp4tags  --albumartist \'Radiko#{self.channel}\' "{f_name}" '
    print(cmd)
    subprocess.call(shlex.split(cmd));


  def add_youbi_to_filename( self, f_name ):

    title  = os.path.basename( f_name ) 
    title = os.path.splitext(title)[0]

    locale.setlocale(locale.LC_TIME, 'ja_JP.UTF-8')
    f_name_with_youbi = str(f_name).replace(self.day.strftime("%Y-%m-%d"), self.day.strftime("%Y-%m-%d_%a"))
    ## 
    print( f"move to {f_name_with_youbi}")
    shutil.move(f_name, f_name_with_youbi)

  def parse_command_args(self):

    parser = argparse.ArgumentParser(
          description="Radikoを保存."
          )
    parser.add_argument( '-c', '--channel',  type=str, action='store', help='放送局' , default='ABC')
    parser.add_argument( '-d', '--duration', type=int, action='store', help='録音時間n sec', default=3600)
    parser.add_argument( '-f', '--from',     type=str, action='store', help='録音日時:2017-09-18 11:11:00 / date コマンドで解釈できる形式',
            default=datetime.datetime.strftime(datetime.datetime.now() ,'%Y-%m-%d %H:%M:%S'),
                  )
    args = parser.parse_args()
    args = vars(args)

    _from    = args['from']
    duration = args['duration']
    channel  = args['channel']


    _from = subprocess.check_output("date --date '%s' +'%%Y-%%m-%%d %%H:%%M:%%S'" % _from, shell=True).strip().decode('utf8')
    _from = datetime.datetime.strptime( _from, '%Y-%m-%d %H:%M:%S') 

    day      = _from
    start    = _from.strftime('%H:%M')
    channel  = str.upper(channel)
    duration = duration  if duration > 60 else 300

    args =  ( channel, day, start, duration ) 
    self.channel = channel
    self.day = day
    self.duration = duration
    self.start = start

    return args 

  def save_programme_logo(self):
    img_url = self.info['img']
    img_name = f"/tmp/radiko-{self.info['title']}.jpg"
    subprocess.check_output(f'curl -sL "{img_url}" > out  ', shell=True).strip().decode('utf8')
    subprocess.check_output(f'convert out {img_name}', shell=True).strip().decode('utf8')
    subprocess.check_output(f'rm out', shell=True).strip().decode('utf8')
    return img_name;



  def save_channel_logo(self, size='large'):

    url = f'http://radiko.jp/station/logo/{self.channel}/logo_{size}.png'
    subprocess.check_output(f'curl -sL "{url}" > {self.channel}.png ', shell=True).strip().decode('utf8')

  def parse_prog_info(slef,xml_string):

    root = ET.fromstring(xml_string)
    # root = ET.fromstring(xml_string)
    title = root.find('.//title').text
    pfm   = root.find('.//pfm').text
    img   = root.find('.//img').text
    info  = root.find('.//info').text

    return { "title": title, 'pfm': pfm, 'img': img, 'info': info, 'xml':xml_string }


  def prog_info(self):

    date = self.day.strftime("%Y%m%d")
    ft= self.day.strftime("%Y%m%d%H%M")

    cmd = f"curl -s http://radiko.jp/v3/program/date/{date}/JP28.xml  | xmllint --xpath  \"//*[@id='{self.channel}']//prog[contains(@ft, '{ft}')]\" - "
    # print(cmd)
    try :
      ret = subprocess.check_output(cmd, shell=True).strip().decode('utf8')
      info  = self.parse_prog_info(ret)
    except: 
        info = None
    #print(ret) 
    self.info=info
    return self.info


if __name__ == "__main__":

  ### 日付など
  locale.setlocale(locale.LC_TIME, 'ja_JP.UTF-8')


  rec_script_path = os.path.realpath( os.path.dirname(__file__)+'/../play_radiko_timefree.py' )
  recorder =  RecRadikoTimeFree()
  args = recorder.parse_command_args();

  working_dir = os.path.realpath(f"./{recorder.channel}")
  if  not os.path.exists(working_dir):
    os.mkdir( working_dir )
  os.chdir(working_dir)

  recorder.save_channel_logo()
  info = recorder.prog_info()
  recorder.save_programme_logo()
  recorder.rec_radiko(rec_script_path)
  recorder.fix_stream()

  





