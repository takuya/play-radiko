#!/usr/bin/env python3
# coding:utf-8



from radiko import Radiko
import argparse
import datetime
import subprocess



def main():

  ## TODO:サブコマンドを使いたい
  parser = argparse.ArgumentParser(description='radiko の再生と録音を行いますよ')

  parser.add_argument('channel_name', help='チャンネル' )
  parser.add_argument('-d', '--duration',default='1800' , help='再生（録音）時間', type=int)
  parser.add_argument('-o', '--output'  , help='保存先')
  parser.add_argument('-p', '--play-live',action='store_const',const=True, default=False, help='保存しながら再生する')
  
  
  args = parser.parse_args()
  channel  = vars(args)['channel_name'].upper()
  duration = vars(args)['duration']
  #
  radiko = Radiko()
  # if vars(args)['output'] :
  radiko.play_radiko(channel,duration)
  # else:
  #   radiko.play_radiko(channel,duration)



if __name__ == '__main__':
    main()


