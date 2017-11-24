#!/usr/bin/env python3
# -*- coding: utf-8 -*-


import urllib.request, urllib.error, urllib.parse
import os,sys,time,datetime,argparse,re
import subprocess
import base64
import shlex
import logging
import xml.etree.ElementTree as ET

logging.basicConfig(level=logging.INFO)

#from IPython import embed


class RadikoHLS:
  
  auth_key = "bcd151073c03b352e1ef2fd66c32209da9ca0afa" ## 現状は固定
  auth_token = ''
  partialkey = ''
  
  ## コマンドのパスを覚えておく
  ffmpeg = None
  mplayer = None
  ## 環境
  is_raspbian = False
  
  def __init__(self):
    self.check_env_is_raspbian()
    self.check_path()

  def check_path(self):
    if self.is_raspbian == False:
      self.ffmpeg = self.get_path('ffmpeg')
      self.mplayer = self.get_path('mplayer')
    else:
      self.player = self.get_path('omxplayer')

  def get_path(self, cmd_name):
    # コマンドのパスや存在チェックや環境チェック
    if subprocess.getstatusoutput(f'type {cmd_name}')[0] == 0 :
      return subprocess.check_output(f"which {cmd_name}", shell=True).strip().decode('utf8')
    else:
      print(f'{cmd_name} not found , install {cmd_name} ')
      exit()

  def check_env_is_raspbian(self):
    ret = subprocess.check_output("uname -a", shell=True).strip().decode('utf8')
    if re.search( 'raspi', ret ) :
      return True
    else:
      return False
  def access_auth(self):
    return self.auth_by_html5_api()
  
  def auth_by_html5_api(self):
    ##
    response  = self.access_auth1()
    ret = self.access_partial_key( response )
    self.auth_token = ret[0]
    self.partialkey = ret[1]
    area = self.access_auth2( self.auth_token, self.partialkey )
    self.area = area

    return self.auth_token
  
  def access_auth1(self):
    url = "https://radiko.jp/v2/api/auth1"
    headers = {}
    data = b''
    auth_response = {}
    headers = {
      "User-Agent": "RadikoAuthHTML5 ",
      "Accept": "*/*",
      "X-Radiko-App":"pc_html5" ,
      "X-Radiko-App-Version":"0.0.1" ,
      "X-Radiko-User":"dummy_user" ,
      "X-Radiko-Device":"pc" ,
      }
    data = urllib.parse.urlencode('').encode("utf-8")
    req  = urllib.request.Request( url, None, headers  )
    res  = urllib.request.urlopen(req)
    auth_response["body"] = res.read()
    auth_response["headers"] = res.info()
    return auth_response

  def access_partial_key( self, auth_response ):
    
    authtoken = auth_response["headers"]["x-radiko-authtoken"]
    offset    = auth_response["headers"]["x-radiko-keyoffset"]
    length    = auth_response["headers"]["x-radiko-keylength"]
    
    offset = int(offset)
    length = int(length)
    partialkey= self.auth_key[offset:offset+length]
    
    partialkey = base64.b64encode(partialkey.encode('utf-8'))
    logging.info(f"authtoken: {authtoken}")
    logging.info(f"offset: {offset}")
    logging.info(f"length: {length}")
    logging.info(f"partialkey: {partialkey}")
    
    return [authtoken,partialkey]

  def access_auth2( self, auth_token, partialkey ) :
    
    url = "https://radiko.jp/v2/api/auth2"
    headers =  {
      "X-Radiko-AuthToken": auth_token,
      "X-Radiko-Partialkey": partialkey,
      "X-Radiko-User": "dummy_user",
      "X-Radiko-Device": 'pc' # 'pc' 固定
      }
    
    data = urllib.parse.urlencode('').encode("utf-8")
    req  = urllib.request.Request( url, None, headers  )
    res  = urllib.request.urlopen(req)
    
    txt = res.read()
    area = txt.decode('utf-8')
    logging.info(f"area: {area}")
    return area


  def chunk_m3u8_url( self, url, auth_token ):
    
    headers =  {
      "X-Radiko-AuthToken": auth_token,
      }
    
    data = urllib.parse.urlencode('').encode("utf-8")
    req  = urllib.request.Request( url, None, headers  )
    res  = urllib.request.urlopen(req)
    
    body = res.read().decode('utf-8')
    lines = re.findall( '^https?://.+m3u8$' , body, flags=(re.MULTILINE) )
    
    return lines[0]


  def radiko_live_url(self, channel ):
    url = f'http://f-radiko.smartstream.ne.jp/{channel}/_definst_/simul-stream.stream/playlist.m3u8'
    return url
  
  def radiko_timefree_url(self, channel, start, end_t ):
    url = f'https://radiko.jp/v2/api/ts/playlist.m3u8?station_id={channel}&l=15&ft={start}&to={end_t}'
    return url
  
  def get_channels(self):
    areaid = self.area_id()
    logging.info( "--------------------------")
    logging.info( "areaid :%s" % areaid)
    logging.info( "--------------------------" )
    logging.info( "list of channels  ")
    ctx = urllib.request.urlopen(f'http://radiko.jp/v3/program/now/{areaid}.xml?_={int(time.time())}')
    xml_string = ctx.read()
    root = ET.fromstring(xml_string)
    channels = [ e.attrib['id'] for e in root.findall(".//station[@id]") ]
    logging.info(channels)
    return channels
  #
  # get area
  #
  def area_id(self):
    areaid = self.area.strip().split(",")[0]
    return areaid
  #
  # select channel is in area
  #
  def is_channel_available(self,channel):
    channels = self.get_channels()
  
    if not channel in channels :
      print( "--------------------------")
      print( " your choice : %s " % channel)
      print( "--------------------------")
      print( str.join('\n',channels) )
      print( "--------------------------")
      print("station %s is not available.   " % channel)
      exit(1)
  #
  # get default output file name
  #
  def get_default_output_filename(self,channel,start,duration=None,end=None):
    
    from_time = start
  
    if ( end ) :
      to___time = end
    if (duration):
      to___time = start + datetime.timedelta(seconds=duration).total_seconds()
    
    from_time = datetime.datetime.strftime(datetime.datetime.utcfromtimestamp( from_time ), '%Y-%m-%d-%H:%M')
    __to_time = datetime.datetime.strftime(datetime.datetime.utcfromtimestamp( to___time ), '_%H:%M')
    output = f'{channel}_{from_time}{__to_time}.aac'
    return output

  def play_cmd(self,input,options=''):
    if self.is_raspbian:
      player_cmd = f"omxplayer --hw --timeout 60s -o local {options} '{input}'"
    else:
      player_cmd = f"{self.mplayer}  -cache 32 {options} '{input}'"
      
    return player_cmd
  
  def save_cmd(self, input , out_filename, duration=None, input_options='',output_options=''):
    if duration :
      input_options += f" -t '{duration}'"
    ##
    cmd = f'{self.ffmpeg} -loglevel panic {input_options} -i "{input}"  {output_options} "{out_filename}"  '
    # cmd = f'{self.ffmpeg} {input_options} -i "{input}"  {output_options} "{out_filename}"  '
    return cmd
    

  ########################################################
  ## コマンドからのインターフェース
  ########################################################

  ## radiko の live stream を保存する
  def save_livestream(self,channel, duration=3600,output=None):
    auth_token = self.access_auth()
  
    if self.is_channel_available(channel) == False :
      logging.info( self.get_channels() )
      exit()
  
    if output == None :
      output = self.get_default_output_filename(channel,time.time(), duration )
  
    live_url  = self.radiko_live_url(channel)
    chunk_url = self.chunk_m3u8_url(live_url,auth_token)
  
    cmd = self.save_cmd( chunk_url, output, duration )
  
    p1 = subprocess.Popen(shlex.split(cmd))
    output = p1.communicate()

    pass

  ## radiko サイマルストリームを再生する
  def play_radiko_livestream(self, channel, duration=3600):
    # token
    auth_token = self.access_auth()
    ## buffer
    buffer_time=11
  
    if self.is_channel_available(channel) == False :
      logging.info( self.get_channels() )
      exit()
  
    live_url  = self.radiko_live_url(channel)
    chunk_url = self.chunk_m3u8_url(live_url,auth_token)

    
    if re.match( 'http:', chunk_url ):
      player_cmd = self.play_cmd(chunk_url)
      logging.info(player_cmd)
      p1 = subprocess.Popen(shlex.split(player_cmd))
      if duration :
        time.sleep( duration + buffer_time )
        p1.terminate()
      else:
        p1.communicate()

    elif re.match( 'https:', chunk_url ):
      stream_cmd = self.save_cmd(chunk_url, '-', duration, output_options='-f mpegts')
      player_cmd = self.play_cmd('-')
      logging.info(f'cmd : {stream_cmd}')
      logging.info(f'cmd : {player_cmd}')
      p1 = subprocess.Popen(shlex.split(stream_cmd.strip()), stdout=subprocess.PIPE)
      p2 = subprocess.Popen(shlex.split(player_cmd.strip()), stdin=p1.stdout)
      output = p2.communicate()
      output = p1.communicate()
    exit()

  ## radiko の timefree を保存する
  def save_timefreestream(self,channel, duration=3600,output=None):
    pass

  ## radiko のタイムフリーを再生する
  def play_timefree(self,channel,start,end):

    auth_token = self.access_auth()
    ## format start and end
    if type(start) == int or  type(start) == float:
      start = datetime.datetime.fromtimestamp(start)
    if type(start) == datetime.datetime :
      start = datetime.datetime.strftime(start, '%Y%m%d%H%M')
    if type(end) == int or  type(end) == float:
      endt = datetime.datetime.fromtimestamp(end)
    if type(end) == datetime.datetime :
      end = datetime.datetime.strftime(start, '%Y%m%d%H%M')
  
    if self.is_channel_available(channel) == False :
      logging.info( self.get_channels() )
      exit()

    live_url  = self.radiko_timefree_url(channel, start, end,)
    chunk_url = self.chunk_m3u8_url(live_url,auth_token)

    if re.match( 'https', chunk_url ):
      stream_cmd = self.save_cmd( chunk_url, '-', output_options='-f mpegts -vn ' )
      player_cmd = self.play_cmd( '-', '-cache 512' )
  
      logging.info(f'cmd :{stream_cmd}')
      logging.info(f'cmd :{player_cmd}')
  
      p1 = subprocess.Popen(shlex.split(stream_cmd.strip()), stdout=subprocess.PIPE)
      p2 = subprocess.Popen(shlex.split(player_cmd.strip()), stdin=p1.stdout)
      output = p2.communicate()
      output = p1.communicate()
    else:
      player_cmd = self.play_cmd( chunk_url, '-cache 512' )
      logging.info(f'cmd :{player_cmd}')
      p1 = subprocess.Popen(shlex.split(player_cmd.strip()))
      output = p1.communicate()
      
    pass

    

# radiko = RadikoHLS()
# radiko.play_timefree('TBS','201711231600', '201711231601')
# radiko.play_radiko_livestream('TBS', 7200)

