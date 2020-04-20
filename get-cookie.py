#!/usr/bin/env python


## Cookie 取得サンプル
import urllib.error
import urllib.parse
import urllib.request
import re

url = 'http://radiko.jp/ap/member/webapi/member/login/check'
# url = 'https://t.co'
data = urllib.parse.urlencode('').encode("utf-8")
req = urllib.request.Request(url, method='GET')

res_headers = None
a = None
try:
  res = urllib.request.urlopen(req)
  res_headers = res.info()
#except  urllib.error.HTTPError as e :
except urllib.error.HTTPError as err :
  res_headers=err.headers
  a = err


## like 'radiko_session=7ca3472c9b6617fe978a47cc1bcc76cc8c791ecc; path=/; expires=Tue, 20-Apr-2021 14:15:44 GMT'
set_cookie = res_headers['Set-Cookie']

cookie = re.match(r'radiko_session=(?<a_exp>[0-9a-f]+);',set_cookie)

print(cookie)

