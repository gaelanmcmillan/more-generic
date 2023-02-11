#! /bin/sh

# source: https://superuser.com/questions/556029/how-do-i-convert-a-video-to-gif-using-ffmpeg-with-reasonable-quality

ffmpeg -i $1.mov \
    -vf "fps=24,scale=$2:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
    -loop 0 $1.gif
