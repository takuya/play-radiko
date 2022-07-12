#!/usr/bin/env python3




def main():
  from RadikoPlay.RadikoAuth import RadikoAuth
  import argparse
  parser = argparse.ArgumentParser(description='radiko用のキーを取得して出力する')

  auth = RadikoAuth()
  auth.access_auth()
  token = auth.auth_token
  #
  print(f'radiko_token={token}')


if __name__ == '__main__':
  import sys,os
  sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
  main()
