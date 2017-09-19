# Radiko play from command 

```
./play_radko.py abc 3600
```

### requirements

- Python 3.6 newer -- for f'' string
- swfextract(1) --- required　for auth, included in swftools
- xmllint(1)  --- required for auth 
- mplayer(1)  --- for play audio 
- rtmpdump(1) --- for radiko simule streaming 
- ffmpeg(1)  ---  for radiko time free 
- GNU date(1) --  for radiko time free 
- omxplayer(1)  ---  used in raspbian

#### for mac OS X

```
brew install rtmpdump ffmpeg mplayer swftools coreutils
```

#### for debian 
```
sudo apt install rtmpdump ffmpeg mplayer swftools libxml2-utils
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
./play_radko.py abc -f  -d 3600 -f '2017-09-18 12:00'
```

To parse "from date", We use GNU date(1), so that be sure GNU date in your PATH.





