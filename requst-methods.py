
import urllib.error
import urllib.parse
import urllib.request


url = 'https://tf-rpaa.smartstream.ne.jp/tf/playlist.m3u8?station_id=MBS&start_at=20200420123000&ft=20200420123000&end_at=20200420153000&to=20200420153000&seek=20200420123000&l=15&lsid=c38126fd113e2c5f8f127da0e33a2b52&type=b'
# headers = {
#   "X-Radiko-AuthToken": auth_token,
# }
# _url = url + f"&_={cnt}"
# print(_url)
data = urllib.parse.urlencode('').encode("utf-8")
req = urllib.request.Request(url, method='OPIONS')
res = urllib.request.urlopen(req)
body = res.read().decode('utf-8')



print(body)