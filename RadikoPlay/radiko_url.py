import subprocess


def radiko_live_url(channel):
  url = f'http://f-radiko.smartstream.ne.jp/{channel}/_definst_/simul-stream.stream/playlist.m3u8'
  return url


def radiko_timefree_url(channel, start, end_t):
  # sample "https://radiko.jp/v2/api/ts/playlist.m3u8?station_id=ABC&l=15&ft=20200419210000&to=20200419211500"
  url = f'https://radiko.jp/v2/api/ts/playlist.m3u8?station_id={channel}&l=15&ft={start}&to={end_t}'
  return url


def get_channel_logo_url(self, channel='ABC', size='large'):
    # ロゴのサイズ large/medium/small
    # URL の例
    #  大 http://radiko.jp/station/logo/ABC/logo_large.png
    #  中 http://radiko.jp/station/logo/ABC/logo_meduim.png
    #  小 http://radiko.jp/station/logo/ABC/logo_small.png
    size = size.lower()
    channel = channel.upper()
    return f'http://radiko.jp/station/logo/{channel}/logo_{size}.png'

def daetime_format_timefree(date_str):
  cmd = f" date -d '{date_str}' +'%Y%m%d%H%M%S' "
  ret = subprocess.getoutput(cmd)
  return ret



# https://radiko.jp/v2/api/ts/playlist.m3u8?station_id=ABC&l=15&ft=20200419210000&to=20200419211500
# https://radiko.jp/v2/api/ts/playlist.m3u8?station_id=ABC&l=15&ft=20220706150000&to=20220706151000