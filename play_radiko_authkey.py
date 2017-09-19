from radiko import Radiko
import argparse
import datetime
import subprocess


def main():
  
  
  parser = argparse.ArgumentParser(description=u'radiko用のキーを取得して出力する')
  
  radiko = Radiko()
  authtoken = radiko.auth_key()
  #
  print(f'radiko_token: {authtoken}')



if __name__ == '__main__':
  main()



