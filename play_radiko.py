#!/usr/bin/env python3
# coding:utf-8


import pprint
pp = pprint.PrettyPrinter(indent=4)
pprint = pp.pprint
import os
import datetime
import sys
import urllib
import urllib.request
import urllib.error
import urllib.parse
#import urllib2
import subprocess
import base64
import argparse
import ssl
import shlex
import IPython
import time
import re
import logging


class Radiko:

  ## 一時ファイルのファイル名
  date = datetime.datetime.strftime(datetime.datetime.now(), '%Y-%m-%d-%H_%M')
  keyfile = "/tmp/authkey.%s.png" % date
  playerurl = "http://radiko.jp/apps/js/flash/myplayer-release.swf "
  playerfile = "/tmp/player.%s.swf" % date

  ## コマンドの位置をチェック
  ## TODO:mplayer と ffmpeg 両方使うのは無駄が多いので何方かにする
  ## raspi だと omxplayer で行ける
  swfextract = subprocess.check_output("which swfextract", shell=True).strip().decode('utf8')
  rtmpdump = subprocess.check_output("which rtmpdump", shell=True).strip().decode('utf8')
  mplayer = subprocess.check_output("which mplayer", shell=True).strip().decode('utf8')
  ffmpeg = subprocess.check_output("which ffmpeg", shell=True).strip().decode('utf8')

  ## Radikoの認証キーを保持する変数
  authtoken = None
  partialkey = None
  auth_response = None
  area_id = None
  
  ## 実行環境 raspi なら omxplayer にする
  is_raspbian = False

  def __init__(self):
    self.is_raspbian = self.check_env_is_raspbian()


  def check_env_is_raspbian(self):
    ret = subprocess.check_output("uname -a", shell=True).strip().decode('utf8')
    return re.search( 'raspi', ret )
  
  def auth_key(self):
    ## 変数をローカルに
    playerfile = self.playerfile
    playerurl = self.playerurl
    keyfile = self.keyfile

    ## キーを取得
    self.get_player( playerurl, playerfile )
    self.get_keydata( playerfile, keyfile )
    hds  = self.access_auth1_fms()
    key  = self.get_partial_key( hds )

    ## キーをに署名をもらう。
    ret = self.access_auth2_fms( key[0] , key[1] )

    ## レスポンスから、エリア判定が出来る
    self.area_id = self.get_area_id(ret)

    ## 変数に保存
    self.auth_response = hds
    self.partialkey    = key[0]
    self.authtoken     = key[1]
    
    ## ファイルは消す
    os.remove(playerfile)
    os.remove(keyfile)
    
    ## 一番使うものを返す。
    return self.authtoken



  #
  # get player
  #
  def get_player(self, playerurl, playerfile):
    if os.path.exists( playerfile ) == False:
      try:
        body = urllib.request.urlopen( playerurl).read()
        f = open(self.playerfile, "wb")
        f.write(body)
        f.close()
      except urllib.error.URLError as  e:
        print(e)
        exit()

  #
  # get keydata (need swftool)
  #
  def get_keydata(self, playerfile, keyfile):
    if os.path.exists(keyfile) == False:
      cmd = f"{self.swfextract}  -b 12 {playerfile} -o {keyfile}"
      logging.info(cmd)
      subprocess.call(shlex.split(cmd))
      if os.path.exists( keyfile ) == False:
        print("failed get keydata")
        print("this command failed. ")
        print("%s" % cmd)
        exit(1)

  #
  # access auth1_fms
  #
  def access_auth1_fms(self):
    ## for debug
    # pid = os.getpid()
    # if os.path.exists("auth1_fms_%s" % self.pid):
    #   os.remove("auth1_fms_%s" % self.pid)

    auth_response = {}
    url = "https://radiko.jp/v2/api/auth1_fms"
    headers = {
      'pragma': 'no-cache',
      "X-Radiko-App": "pc_ts",
      "X-Radiko-App-Version": "4.0.0",
      "X-Radiko-User": " test-stream",
      "X-Radiko-Device": "pc"
    }
    values = {"\r\n": ""}
    data = urllib.parse.urlencode(values).encode('utf-8')
    # try:
    req = urllib.request.Request(url, data, headers)
    res = urllib.request.urlopen(req)
    auth_response["body"] = res.read()
    auth_response["headers"] = res.info()
    # for debug
    # f = open( "auth1_fms_%s"%pid , "w" )
    # f.write(body)
    return auth_response
    # except:
    #   print("failed auth1 process")
    #   exit()

  #
  # get partial key
  #
  def get_partial_key(self, auth_response):

    authtoken = auth_response["headers"]["x-radiko-authtoken"]
    offset    = auth_response["headers"]["x-radiko-keyoffset"]
    length    = auth_response["headers"]["x-radiko-keylength"]

    offset = int(offset)
    length = int(length)

    f = open(self.keyfile, 'rb+')
    f.seek(offset)
    data = f.read(length)
    partialkey = base64.b64encode(data)
    logging.info(f"authtoken: {authtoken}")
    logging.info(f"offset: {offset}")
    logging.info(f"length: {length}")
    logging.info(f"partialkey: {partialkey}")
    # print("authtoken: %s \noffset: %s length: %s \npartialkey: %s" % (authtoken, offset, length, partialkey))
    # partialkey=`dd if=$keyfile bs=1 skip=${offset} count=${length} 2> /dev/null | base64`

    return [partialkey,authtoken]

  #
  # access auth2_fms
  #
  def access_auth2_fms(self,partialkey, authtoken ):
    auth_success_response = {}
    url = "https://radiko.jp/v2/api/auth2_fms"
    headers = {
      "pragma": "no-cache",
      "X-Radiko-App": "pc_ts",
      "X-Radiko-App-Version": "4.0.0",
      "X-Radiko-User": "test-stream",
      "X-Radiko-Device": "pc",
      "X-Radiko-AuthToken": authtoken,
      "X-Radiko-PartialKey": partialkey,
    }
    ##
    try:
      req = urllib.request.Request(url, "\r\n".encode('utf-8'), headers)
      res = urllib.request.urlopen(req)
      # print res.read()
      auth_success_response["body"] = res.read()
      auth_success_response["headers"] = res.info()
    except urllib.error.URLError as  e:
      print(e)
      exit()
    ##
    logging.info("--------------------------")
    logging.info("authentication success")
    return auth_success_response

  #
  # get area
  #
  def get_area_id(self,auth_success_response):
    area = auth_success_response["body"].decode('utf-8').strip().split(",")
    areaid = area[0]
    return areaid
    
  #
  # get channels
  #
  def get_channels(self):
    areaid = self.area_id
    logging.info( "--------------------------")
    logging.info( "areaid :%s" % areaid)
    logging.info( "channel program list url http://radiko.jp/v2/api/program/today?area_id=%s" % areaid)
    logging.info( "--------------------------" )
    logging.info( "list of channels  ")
    channels =  subprocess.check_output( "curl -s  http://radiko.jp/v2/api/program/today?area_id=%s " % areaid+
                                         "| xmllint --format --xpath //station/@id - "+
                                         " | ruby -ne 'puts $_.split ' " ,
                                         shell=True).decode('utf-8')
    logging.info(channels)
    return channels
  #
  # select channel is in area
  #
  def is_channel_available(self,channel):
    channels = self.get_channels()

    if not channel in channels :
      print( "--------------------------")
      print( " your choice : %s " % channel)
      print( "--------------------------")
      print("station %s is not available.   " % channel)
      print( "--------------------------")
      print(channels)
      exit(1)

  #
  # get stream-url
  #
  def get_stream_url(self, channel ):
    if os.path.exists( "%s.xml" % channel ) :
      os.remove("%s.xml" % channel)

    try :
      channel_url = "http://radiko.jp/v2/station/stream/%s.xml" % channel
      logging.info(channel_url)
      body = urllib.request.urlopen( channel_url ).read()
      f = open("%s.xml" % channel, "wb")
      f.write( body )
      f.close()
    except :
      print("error in to get %s.xml " % channel )
      raise


    cmd = "xmllint %s.xml --xpath /url/item[1]/text() " % channel
    stream_url = subprocess.check_output(cmd.strip().split(" ")).decode('utf-8')
    os.remove("%s.xml" % channel)
    logging.info( stream_url )
    return stream_url

  #
  # stream_url の構造をバラす
  #
  def stream_url_to_parts(self,stream_url):
    ## TODO: re で書き換える
    cmd = "echo '%s' | perl -pe 's!^(.*)://(.*?)/(.*)/(.*?)$/!$1://$2 $3 $4!'" % stream_url
    logging.info(cmd)
    ret = subprocess.check_output(cmd, shell=True).decode('utf-8')
    url_parts = ret.split(" ")
    logging.info( url_parts )
    return url_parts

  #
  # build rtmpdump command
  #
  def build_rtmpdump(self, url_parts,authtoken,duration):

    rtmpdump = self.rtmpdump
    playerurl  = self.playerurl
    
    verbose = '' #  or '-v '
    quiet = '−−quiet' # or ''

    cmd = f"{self.rtmpdump} {quiet} {verbose} -r {url_parts[0]} --app {url_parts[1]} --playpath {url_parts[2]} \
            -W {playerurl} -C S:'' -C S:'' -C S:'' -C S:{authtoken} --live --stop {duration} "
    logging.info(cmd)
    return cmd
    
  
  #
  # radiko のストリーミング放送を再生する
  #
  def play_radiko(self,channel,duration):
  
    authtoken = self.auth_key()

    if self.is_channel_available(channel) == False :
      logging.info( self.get_channels() )
      exit()
    
    stream_url = self.get_stream_url(channel)
    url_parts = self.stream_url_to_parts(stream_url)

    mplayer  = self.mplayer
 
    stream_cmd = self.build_rtmpdump(url_parts,authtoken,duration)
    logging.info(stream_cmd)
    logging.info(" " * 10)
    logging.info("\n")

    player_cmd = f'{mplayer} -cache {1024*1} - ' # キャッシュ量 kb ＝バッファリングサイズ
    if self.is_raspbian:
      player_cmd = 'omxplayer --timeout 60s -o local --no-keys pipe:0'
 
 
    p1 = subprocess.Popen(stream_cmd.strip().split(" "), stdout=subprocess.PIPE)
    p2 = subprocess.Popen(shlex.split(player_cmd), stdin=p1.stdout)
    p1.stdout.close()
    output = p2.communicate()[0]

  #
  # radiko のストリーミングを再生しながら保存する。
  #
  def play_and_save_radiko(self,channel,duration):

    pass

  #
  # radiko のストリーミング放送をファイルに保存する。
  #
  def save_radiko(self,channel,duration):

    pass

  #
  # radiko のタイムシフト（タイムフリー）を再生する
  #
  def play_radiko_timefree(self,channel,start,end):
    #TODO 日付と時間の処理
    #TODO 番組表取得処理
    authtoken = self.auth_key()
    mplayer  = self.mplayer
    ffmpeg   = self.ffmpeg

    ffmpeg_cmd = f"{ffmpeg} -y \
     -headers 'X-Radiko-AuthToken: {authtoken}'\
     -i 'https://radiko.jp/v2/api/ts/playlist.m3u8?station_id={channel}&ft={start}&to={end}'\
     -loglevel panic -acodec copy -f mpegts - "

    logging.info(ffmpeg_cmd)
    logging.info(" " * 10)
    logging.info("\n")



    player_cmd = f'{mplayer} -cache {1024*1} - ' # キャッシュ量 kb ＝バッファリングサイズ
    if self.is_raspbian:
      player_cmd = 'omxplayer --timeout 60s --no-keys -o local pipe:0'

    p1 = subprocess.Popen(shlex.split(ffmpeg_cmd.strip()), stdout=subprocess.PIPE)
    p2 = subprocess.Popen(shlex.split(player_cmd.strip()), stdin=p1.stdout)
    # p1.stdout.close()
    # output = p2.communicate()[0]
    p2.wait()



def main():

  ## TODO:サブコマンドを使いたい
  parser = argparse.ArgumentParser(description=u'radiko の再生と録音を行いますよ')

  parser.add_argument('channel_name', help=u'チャンネル' )
  parser.add_argument('-d', '--duration',default='1800' , help=u'再生（録音）時間', type=int)
  parser.add_argument('-o', '--output'  , help=u'保存先')
  parser.add_argument('-p', '--play-live',action='store_const',const=True, default=False, help=u'保存しながら再生する')
  # parser.add_argument('-t', '--play-timefree',action='store_const',const=True, default=False, help=u'タイムシフトを保存しながら再生する')

  args = parser.parse_args()
  channel  = vars(args)['channel_name'].upper()
  DURATION = vars(args)['duration']
  #
  radiko = Radiko()
  radiko.play_radiko(channel,DURATION)



if __name__ == '__main__':
    main()


