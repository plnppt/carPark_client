#!/bin/sh

rm -rf $FRONTHOME/../app/web/build
mkdir -p $FRONTHOME/../app/web/build
cp -a $FRONTHOME/build/. $FRONTHOME/../app/web/build
tail -f /dev/null