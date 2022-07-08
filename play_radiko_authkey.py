#!/usr/bin/env python3
import argparse


from RadikoPlay.RadikoAuth import RadikoAuth


def main():
  parser = argparse.ArgumentParser(description='radiko用のキーを取得して出力する')

  auth = RadikoAuth()
  auth.access_auth()
  token = auth.auth_token
  #
  print(f'radiko_token: {token}')


if __name__ == '__main__':
  main()
