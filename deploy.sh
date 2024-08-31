#!/bin/bash
REPO_DIR="/root/asu-soda-newsite"
PORT=3000  
BUILD_DIR="dist" 


usr/local/bin/serve -s "$BUILD_DIR" -l "$PORT" &