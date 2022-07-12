#!/usr/bin/env python3
# coding:utf-8
# vim: expandtab nowrap ts=2 sw=2 sts=2




def main():
  import argparse
  import datetime
  from RadikoPlay.PlayRadiko import PlayRadikoCmdBuilder
  parser = argparse.ArgumentParser(description=u'radiko の再生と録音を行いますよ')

  parser.add_argument('channel_name', help='チャンネル')
  parser.add_argument('-d', '--duration', default='1800', help='再生時間 n sec', type=int)
  parser.add_argument('-f', '--from',
                      default=datetime.datetime.strftime(datetime.datetime.now() - datetime.timedelta(hours=3),
                                                         '%Y%m%d%H%M%S'),
                      help='開始時間:2017-09-18 11:11:00 / date コマンドで解釈できる形式', type=str)

  parser.add_argument('-o', '--output', help='保存先', nargs='?', default=None, const='')
  parser.add_argument('--play-and-save', help='再生と保存', action='store_true')

  args = parser.parse_args()
  channel = vars(args)['channel_name'].upper()
  duration = vars(args)['duration']
  # if duration < 60:
  #   duration = 60

  start = vars(args)['from']
  radiko = PlayRadikoCmdBuilder()
  radiko.use_player='ffplay'

  if vars(args)['play_and_save']==False and vars(args)['output'] != None:
    print('only save ')
    f_out = vars(args)['output']

    cmds = radiko.save(channel, start=start,
                duration=duration,
                output=f_out
                )
    radiko.exec_cmd(cmds,duration=duration)


    exit()
  else:
    if vars(args)['play_and_save'] is True:
      print('play and save timefree')
      output = vars(args)['output']
      cmds = radiko.play_and_save(channel, start=start, duration=duration,output=output)
      exit(0)
    else:
      print('just play timefree ')
      cmds = radiko.play(channel, start=start,duration=duration)
      exit(0)

  #


if __name__ == '__main__':
  import sys,os
  sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
  main()
