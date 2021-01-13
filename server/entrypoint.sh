#!/bin/sh

rm -rf /home/node/app/node_modules/*
cp -r /tmp/cache/node_modules/* /home/node/app/node_modules

pm2-dev process.yml