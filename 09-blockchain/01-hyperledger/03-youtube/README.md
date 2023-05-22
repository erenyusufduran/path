# Create Basic Hyperledger Network

setxkbmap tr

## Installation

- sudo apt-get install curl
- sudo apt-get install golang
- export GOPATH=$HOME/go
- export PATH=$PATH:$GOPATH/bin

- sudo apt-get install nodejs
- sudo apt-get install npm
- sudo apt-get install python

### Install and Upgrade docker and docker-compose

- curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
- sudo add-apt-repositoy "deb [arch=amd64] https://download.docker.com/linux/ubuntu
- $(lsb_release -cs) stable"
- $ sudo apt-get update
- $ apt-cache policy docker-ce
- sudo apt-get install -y docker-ce
- sudo apt-get install docker-compose
- sudo apt-get upgrade

- `in test-folder`
  - curl -sSL https://bit.ly/2ysb0FE | bash -s -- <fabric_version> <fabric-ca_version> <thirdparty_version>
    - 2.0.1
    - 1.4.6
    - 0.4.18

---

## Purpose of Binaries

in fabric-sample folder there is a `bin` folder. so we can add this folder to the path and we can reach them.

add the `export PATH=$PATH/home/vagrant/own-samples/hyp-youtube/testfolder/fabric-samples/bin` to `~/.bashrc`

- Configtxgen - Creating network artifacts _(`genesis.block` / `channel.tx`)_
- Configtxlator - Utility for generating channel configuration (updating channel tx)
- Cryptogen - Utility for generating key material (certificates)
- Discovery - Command line client for service discovery
- Idemixgen - Utility for generating key material to be used with identity mixer MSP
- Fabric-ca-client - Client for creating registernig and enrolling user
