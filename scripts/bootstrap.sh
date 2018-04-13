
#!/usr/bin/env bash

if [ -e "/etc/vagrant-provisioned" ]; then
    echo "Vagrant provisioning already completed. Skipping..."
    exit 0
fi

echo "Starting Vagrant provisioning process..."

BOX_NAME='datavent'
# Change the hostname so we can easily identify what environment we're on:
echo "$BOX_NAME" > /etc/hostname
# Prevent hostname resolution issues
echo "127.0.0.1 $BOX_NAME" >> /etc/hosts
# Use new hostname immediately (skip restart)
hostname $BOX_NAME

apt-get update
apt-get upgrade -y

# apt-get install -y make g++ libcairo2-dev libav-tools
apt-get install -y apt-utils build-essential git curl wget vim nfs-common portmap htop ca-certificates

# Installs the Node Version Manager (https://github.com/creationix/nvm)

# Install Node
git clone https://github.com/creationix/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`
echo "source ~/.nvm/nvm.sh" >> ~/.profile
source ~/.profile

export NODE_VERSION='6.11.5'
nvm install $NODE_VERSION
nvm alias default $NODE_VERSION

# Update npm
npm install -g npm

# Install global packages
npm install -g eslint
npm install -g mocha
npm install -g @google-cloud/functions-emulator
npm install -g firebase-tools

