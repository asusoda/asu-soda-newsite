#!/bin/bash

# Define variables
REPO_DIR="/root/asu-soda-newsite"
DIST_DIR="$REPO_DIR/dist"
BRANCH="main"  # Change this to the branch you want to pull

echo "Starting deployment..."

# Navigate to the repository directory
cd $REPO_DIR || exit

# Pull the latest changes from the repository
echo "Pulling the latest changes from the repository..."
git fetch origin $BRANCH
git reset --hard origin/$BRANCH

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building the project..."
npm run build

# Restart the React website service
echo "Restarting the React website service..."
sudo systemctl daemon-reload
sudo systemctl restart react-website.service

# Check the status of the service
echo "Checking the status of the React website service..."
sudo systemctl status react-website.service --no-pager

echo "Deployment complete. Website should be hosted on http://localhost:3000"
