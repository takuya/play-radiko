# Radiko play from command 

```
./play_radko.py abc 3600
```

### requirements

- Python 3.6 newer -- for f'' string
- swfextract(1) --- required　for auth, included in swftools
- mplayer(1)  --- for play audio 
- rtmpdump(1) --- for radiko simule streaming 
- ffmpeg(1)  ---  for radiko time free 
- GNU date(1) --  for radiko time free 
- omxplayer(1)  ---  used in raspbian

### date(1) command 

To parse "from date", We use GNU date(1), so that be sure GNU date is in your PATH.


#### for mac OS X

```
brew install rtmpdump ffmpeg mplayer swftools coreutils
```

#### for debian 
```
sudo apt install rtmpdump ffmpeg mplayer swftools
```

#### for Raspberry Pi ( raspbian )
```
sudo apt install rtmpdump ffmpeg swftools
```

###### for raspbian users

This radiko.py force to use Audio Jack. 
if you want to use HDMI for playing  , Change Source like this 

```
omxplayer -o local # audio jack <- radiko.py 
omxplayer -o hdmi  # hdmi 
omxplauer -o auto  # raspi default
```



### Examples

usage examples.

#### Example 01:
Play radiko abc 1008 from osaka  for 1 hour 
```
./play_radko.py abc 3600
```
#### Example 02:
Play radiko TimeFree abc 1008 from 2017-09-18 12:00 to 3600
```
./play_radko.py abc  -d 3600 -f '2017-09-18 12:00'
```

#### Example 03 :
Play Radiko TimeFree  ABC 1008 today 15:00 ピタッと 
```
./play_radko.py abc  -f 15:00 -d 10800
```

#### Example 04 : 
Play Radiko via ssh ( to correct area )
If  Radiko failed to detect area , play from ssh is useful way.
```
ssh mine 'LANG=ja_JP.UTF-8 python.3.6 play_radiko.py abc --no-play-live --output -'  | mplayer - -cache 128
```






