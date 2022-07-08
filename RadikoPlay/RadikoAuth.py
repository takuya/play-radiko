import base64
import logging
import re
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET



class RadikoAuth:
  auth_key = "bcd151073c03b352e1ef2fd66c32209da9ca0afa"  ## 現状は固定
  auth_token = None
  partial_key = None
  __area = None

  def access_auth(self):
    self.auth_token= self.__auth_by_html5_api()
    return self.auth_token

  def __auth_by_html5_api(self):
    ##
    self.__access_auth1()
    self.__access_auth2()
    return self.auth_token

  def __access_auth1(self):
    url = "https://radiko.jp/v2/api/auth1"
    headers = {}
    data = b''
    auth_response = {}
    headers = {
      "User-Agent": "RadikoAuthHTML5 ",
      "Accept": "*/*",
      "X-Radiko-App": "pc_html5",
      "X-Radiko-App-Version": "0.0.1",
      "X-Radiko-User": "dummy_user",
      "X-Radiko-Device": "pc",
    }
    data = urllib.parse.urlencode('').encode("utf-8")
    req = urllib.request.Request(url, None, headers)
    res = urllib.request.urlopen(req)
    auth_response["body"] = res.read()
    auth_response["headers"] = res.info()

    ret = self.__parse_token_and_partial(auth_response)
    [self.auth_token, self.partial_key] = ret

    return [self.auth_token, self.partial_key]

  def __access_auth2(self):
    [auth_token, partialkey] = [self.auth_token, self.partial_key]

    url = "https://radiko.jp/v2/api/auth2"
    headers = {
      "X-Radiko-AuthToken": auth_token,
      "X-Radiko-Partialkey": partialkey,
      "X-Radiko-User": "dummy_user",
      "X-Radiko-Device": 'pc'  # 'pc' 固定
    }

    data = urllib.parse.urlencode('').encode("utf-8")
    req = urllib.request.Request(url, None, headers)
    res = urllib.request.urlopen(req)

    txt = res.read()
    area = txt.decode('utf-8')
    logging.info(f"area: {area}")
    self.__area = area
    return self.__area

  def __parse_token_and_partial(self, auth_response):
    authtoken = auth_response["headers"]["x-radiko-authtoken"]
    offset = auth_response["headers"]["x-radiko-keyoffset"]
    length = auth_response["headers"]["x-radiko-keylength"]

    offset = int(offset)
    length = int(length)
    partialkey = self.auth_key[offset:offset + length]

    partialkey = base64.b64encode(partialkey.encode('utf-8'))
    logging.info(f"authtoken: {authtoken}")
    logging.info(f"offset: {offset}")
    logging.info(f"length: {length}")
    logging.info(f"partialkey: {partialkey}")

    return [authtoken, partialkey]

  def playlist(self, channel, start=None, end_t=None):
    if self.is_channel_available(channel) == False:
      logging.info(self.get_channels())
      exit(1)
    ##
    if start is None:
      live_url = radiko_live_url(channel)
    else:
      live_url = radiko_timefree_url(channel, start, end_t)

    m3u8 = self.auth_m3u8_url(live_url, self.auth_token)
    return m3u8

  def auth_m3u8_url(self, url, auth_token):
    headers = {
      "X-Radiko-AuthToken": auth_token,
    }

    data = urllib.parse.urlencode('').encode("utf-8")
    req = urllib.request.Request(url, None, headers)
    res = urllib.request.urlopen(req)

    body = res.read().decode('utf-8')
    lines = re.findall('^https?://.+m3u8$', body, flags=(re.MULTILINE))

    return lines[0]

  def is_channel_available(self, channel):
    channels = self.get_channels()

    if not channel in channels:
      print("\n".join(["--------------------------",
                       " your choice : %s " % channel,
                       "--------------------------",
                       str.join(',', channels),
                       "--------------------------",
                       "station %s is not available.   " % channel
                       ]))
      exit(1)

  def get_channels(self):
    areaid = self.area_id()
    logging.info("--------------------------")
    logging.info("areaid :%s" % areaid)
    logging.info("--------------------------")
    logging.info("list of channels  ")
    ctx = urllib.request.urlopen(f'http://radiko.jp/v3/program/now/{areaid}.xml?_={int(time.time())}')
    xml_string = ctx.read()
    root = ET.fromstring(xml_string)
    channels = [e.attrib['id'] for e in root.findall(".//station[@id]")]
    logging.info(channels)
    return channels

  def area_id(self):
    return self.__area.strip().split(",")[0]



if __name__ == '__main__':
  from radiko_url import *
  channel = "ABC"
  auth = RadikoAuth()
  auth_token = auth.access_auth()
  auth.is_channel_available(channel)
  live_url = radiko_live_url(channel)
  # print(live_url ,"\n")
  print(auth_token)
  chunk_url = auth.auth_m3u8_url(live_url, auth_token)
  # print(chunk_url)

else:
  from RadikoPlay.radiko_url import *

