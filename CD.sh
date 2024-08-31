#!/bin/bash

# Define variables
REPO_DIR="/root/asu-soda-newsite"
DIST_DIR="$REPO_DIR/dist"
BRANCH="main"  # Change this to the branch you want to pull

echo "Starting deployment..."

# Navigate to the repository directory
cd $REPO_DIR || { echo "Failed to navigate to $REPO_DIR"; exit 1; }

# Pull the latest changes from the repository
echo "Pulling the latest changes from the repository..."
git fetch origin $BRANCH || { echo "Failed to fetch branch $BRANCH"; exit 1; }
git reset --hard origin/$BRANCH || { echo "Failed to reset to origin/$BRANCH"; exit 1; }

# Install dependencies
echo "Installing dependencies..."
npm install || { echo "Failed to install dependencies"; exit 1; }

# Build the project
echo "Building the project..."
npm run build || { echo "Failed to build the project"; exit 1; }

# Restart the React website service
echo "Restarting the React website service..."
sudo systemctl daemon-reload || { echo "Failed to reload systemd"; exit 1; }
sudo systemctl restart react-website.service || { echo "Failed to restart react-website.service"; exit 1; }
sudo systemctl enable react-website.service || { echo "Failed to enable react-website.service"; exit 1; }

# Check the status of the service
echo "Checking the status of the React website service..."
sudo systemctl status react-website.service --no-pager || { echo "React website service is not running"; exit 1; }

echo "Deployment complete. Website should be hosted on http://localhost:3000"
