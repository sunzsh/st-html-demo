#!/bin/bash
nohup live-server --port=43928 --no-browser > /dev/null 2>&1 & 
sleep 1
rm -rf ./index.html
wget http://localhost:43928/
node build_index.js
kill -9 "$!"
# echo $!