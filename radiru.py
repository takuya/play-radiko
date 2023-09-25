## for debugging
import pprint
import shlex
import subprocess
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET

pp = pprint.PrettyPrinter(indent=4)
pprint = pp.pprint


class Radiru:
  channels_url = 'http://www.nhk.or.jp/radio/config/config_web.xml'

  def __init__(self):
    self.list_root = self.get_xml_of_urls()
    self.area_list = [e.text for e in self.list_root.findall('.//area')]
    self.channels = ['r1hls', 'r2hls', 'fmlhs']

  def get_xml_of_urls(self):
    ctx = urllib.request.urlopen(self.channels_url)
    xml_string = ctx.read()
    root = ET.fromstring(xml_string)
    return root

  def is_area_available(self, area):
    if not area in self.area_list:
      print("--------------------------")
      print(" your choice : %s " % self.area_list)
      print("--------------------------")
      print(str.join('\n', self.area_list))
      print("--------------------------")
      print("area %s is not available.   " % area)
      exit(1)
    return True

  def is_channel_available(self, c):
    if not c in self.channels:
      print("--------------------------")
      print(" your choice : %s " % c)
      print("--------------------------")
      print(str.join('\n', self.channels))
      print("--------------------------")
      print(" channel %s is not available.   " % c)
      exit(1)
    return True

  def get_stream_url(self, area, channel):

    root = self.list_root
    data = [d for d in root.findall('.//data') if d.find('area').text == area][0]
    url = data.find(channel).text
    return url

  def play(self, area, channel, duration=1800):

    self.is_area_available(area)
    self.is_channel_available(channel)
    url = self.get_stream_url(area, channel)

    ffmpeg_cmd = f'ffmpeg -loglevel panic  -i {url} -acodec copy -f mpegts - '
    player_cmd = f'mplayer -quiet -cache 256 -'  # mplayer が https付きでビルドされるなら・・・
    p1 = subprocess.Popen(shlex.split(ffmpeg_cmd.strip()), stdout=subprocess.PIPE)
    p2 = subprocess.Popen(shlex.split(player_cmd.strip()), stdin=p1.stdout)
    p1.wait()


def main():
  radiru = Radiru()
  radiru.play('osaka', 'r1hls')


if __name__ == '__main__':
  main()
