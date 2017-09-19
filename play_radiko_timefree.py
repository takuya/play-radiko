#!/usr/bin/env python3
# coding:utf-8
from radiko import Radiko
import argparse
import datetime
import subprocess


def main():
  

  parser = argparse.ArgumentParser(description=u'radiko の再生と録音を行いますよ')
  
  parser.add_argument('channel_name', help='チャンネル' )
  parser.add_argument('-d', '--duration',default='1800' , help='再生時間 n sec', type=int)
  parser.add_argument('-f', '--from',
                      default=datetime.datetime.strftime(datetime.datetime.now()-datetime.timedelta(hours=3), '%Y%m%d%H%M'),
                      help='開始時間:2017-09-18 11:11 / date コマンドで解釈できる形式', type=str)
  
  
  args = parser.parse_args()
  channel  = vars(args)['channel_name'].upper()
  duration = vars(args)['duration']
  if duration < 60 :
    duration = 60
    
  start= vars(args)['from']
  start = subprocess.check_output("date --date '%s' +'%%Y%%m%%d%%H%%M'" % start , shell=True).strip().decode('utf8')
  end  =  datetime.datetime.strptime(start, '%Y%m%d%H%M') + datetime.timedelta(seconds=duration)
  end  = datetime.datetime.strftime(end, '%Y%m%d%H%M')
  
  
  
  
  #
  radiko = Radiko()
  radiko.play_radiko_timefree(channel,start,end)




if __name__ == '__main__':
  main()



