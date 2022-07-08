# Radiko play from command 

```
./play_radiko.py abc -d 3600
```

### requirements

Radiko from HLS (m3u8)

- Python 3.6 newer -- for f'' string
- GNU date(1) --  for date time formate parsing
- player  
  - mplayer(1)  --- for play audio 
  - ffplay(1)  ---  for play audio
- recording
  - ffmpeg(1)  --- for recording 


### date(1) command 

To parse "from date", We use GNU date(1), so that be sure GNU date is in your PATH.

### latest ffmpeg or mplayer

Lastest ffmpeg or Latest mplayer is needed, for supporting HTTP-HEADERS.

radiko old m3u8 can play like this.
```
ffplay -headers 'X-Radiko-AuthToken: xxxx'
ffmpeg -headers 'X-Radiko-AuthToken: xxxx'
mplayer -http-header-fields 'X-Radiko-AuthToken: xxxx'
```

#### installing
for mac OS X
```
brew install ffmpeg
brew install mplayer
```

for debian 
```
sudo apt install ffmpeg mplayer
```


###### for raspbian(jessy) users

This radiko.py force to use Audio Jack. 
if you want to use HDMI for playing  , Change Source like this 

```
omxplayer -o local # audio jack <- radiko.py 
omxplayer -o hdmi  # hdmi 
omxplauer -o auto  # raspi default
```

Latest 64bit raspberry pi OS stop suppurting `omxplayer`, old raspbian can use omxplayer. 

### Examples

usage examples.

#### Example 01:
Play radiko abc 1008 from osaka  for 1 hour 
```
./play_radiko.py abc -d 3600
```
#### Example 02:
Play radiko TimeFree abc 1008 from 2017-09-18 12:00 to 3600
```
./play_radiko.py abc  -d 3600 -f '2017-09-18 12:00'
```

#### Example 03 :
Play Radiko TimeFree  ABC 1008 today 15:00 ピタッと 
```
./play_radiko.py abc  -f 15:00 -d 10800
```

#### Example 04 : 
Play Radiko via SSH ( to fake area detection)
If  Radiko failed to detect area , play from ssh is useful way.
```
ssh mine 'LANG=ja_JP.UTF-8 python.3.6 play_radiko.py abc --no-play-live --output -'  | mplayer - -cache 128
```

A few VPS can fake to become KANSAI. Many VPS can be TOKYO.

#### Example 05 : 
Usage sample Save stream as sample command im ./bin.
```
python bin/rec_radiko_timefree.py -c ABC -d 10800 -f '2021-09-30 12:00' 
```

When specify day of week,  use date ( GNU date ) is casual way.
```
python bin/rec_radiko_timefree.py -c ABC -d 10800 -f  "$( date  --date 'last thursday'  +'%Y-%m-%d 12:00')
```




