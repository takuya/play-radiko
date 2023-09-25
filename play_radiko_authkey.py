#!/usr/bin/env python3
import argparse

from radiko import Radiko


def main():
  parser = argparse.ArgumentParser(description='radiko用のキーを取得して出力する')

  radiko = Radiko()
  authtoken = radiko.auth_key()
  #
  print(f'radiko_token: {authtoken}')


if __name__ == '__main__':
  main()
