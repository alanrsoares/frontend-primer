#!/bin/bash

# usage:
# new-domain [domain name]

DOMAIN=$1;
DOMAIN_PATH="./src/domain/$DOMAIN";
cp -r ./templates/domain/ $DOMAIN_PATH;
ls $DOMAIN_PATH;
