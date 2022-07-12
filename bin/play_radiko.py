#!/usr/bin/env python3
# coding:utf-8
# vim: expandtab nowrap ts=2 sw=2 sts=2



# import RadikoPlay.PlayRadiko

def main():
  import argparse
  import logging
  import RadikoPlay.PlayRadiko

  parser = argparse.ArgumentParser(description='radiko の再生と録音を行いますよ')

  parser.add_argument('channel_name', help='チャンネル')
  parser.add_argument('-d', '--duration', default='1800', help='再生（録音）時間', type=int)
  parser.add_argument('-o', '--output', help='保存先', nargs='?', default=None, const='')
  parser.add_argument('--save-only',action='store_const', default=False, const=True, help='保存だけ')
  parser.add_argument('--play-and-save',action='store_const', default=False, const=True, help='再生しない')

  args = parser.parse_args()
  channel = vars(args)['channel_name'].upper()
  duration = vars(args)['duration']
  #
  logging.basicConfig(level=logging.DEBUG)
  radiko = RadikoPlay.PlayRadiko.PlayRadikoCmdBuilder()
  logging.basicConfig(level=logging.INFO)

  ##
  if vars(args)['play_and_save'] is True:
    print('play live and save ')
    out = vars(args)['output']
    cmds = radiko.play_and_save(channel, duration=duration, output=out)
    radiko.exec_cmd(cmds)
    exit()
  if vars(args)['play_and_save'] is False:
    if vars(args)['output'] is not None or vars(args)['save_only'] is True:
      print('only save ')
      f_out = vars(args)['output']
      cmds = radiko.save(channel, duration=duration, output=f_out)
      exit()
    else:
      print('play live')
      radiko.play(channel,duration=duration)
      exit()

if __name__ == '__main__':
  import sys,os
  sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
  main()
