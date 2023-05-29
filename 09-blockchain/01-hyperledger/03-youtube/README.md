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

## Folder Structure

- ### api-2.0
  - There are multiple js files.
  - These will used when we write api.
- ### artifacts
  - Most important folder in the fabric network.
  - There are subfolders.
    - channel
      - `configtx.yaml`, `crypto-config.yaml`
      - There are genesis.block, channel.tx, org1MSP anchor, org2MSP anchor / We don't have them yet.
      - `/config` folder
        - `configtx.yaml, core.yaml, orderer.yaml`
          - core.yaml file one of the important file. **network settings**
      - `crypto-config` folder will be created aswell.
    - src
    - docker-compose.yaml
    - base.yaml
    - network-config.yaml - require for writing api on node
    - org1.yaml

## Network Details

- We'll have two organizations
- There will be two peers in each organization.
- One CA (Certification Authority) for each organization.
- We'll use orderer as a RAFT. There will be 5 orderer.
- State database will be **Couch DB**

> We are not using seperate CLI container for invoking transactions.

**Network Structure**
![](./assets/network_structure.png)

## Organization Structure

In `channel/crypto-config/peerOrganizations`, there are subfolder for each organization. In this folder there are:

- ca - certification authority
- msp
  - admincerts,
  - cacerts,
  - keystore, - where the private key
  - signcerts
  - tlscacerts
- peers - we'll have two peers in each organization
- tlsca
- users - by default there will be admin user
  - Admin have two subfolder msp and tls
    - tls will have ca.crt, client.crt, client.key, there are used for transport layer security communication.

---

> You can see important files in this link.
> <a href="https://github.com/erenyusufduran/colins-path/blob/main/09-blockchain/01-hyperledger/03-youtube/files.md">

- crypto-config.yaml, configtx.yaml, create-artifacts.sh, docker-compose.yaml, createChannel.sh</a>

---

## Anchor & Leader Peer

There are two types of the peer.

- **Leader Peer**:
  - It pulls the data from ordering service, later on disseminate that data to all the peer within the same organization.
  - Election is a mechanism which will maintain the connection between the ordering service and get the block and distribute that block to all the peers within the same organizations.
  - Election types:
    1. **Static**, means administrator manually configure a peer in an organization. Defining in `core.yaml`
    2. **Dynamic**, means peer execute a leader election and select one of the leader in organization. / Under gossip, there is useLeaderElection: true
- **Anchor Peer**
  - Use by gossip to make sure peers in the different organization know each other.
  - Main purpose is _peer discovery_.

## Chaincode Lifecycle

1. **Package**
2. **Install**
3. **Query**
4. **Approve**
   - Each organization need to approve that chaincode lifecycle endorsement policy. Signature policy. Once the chaincode approved, we can commit the chaincode.
5. **Check Commit Readiness**
6. **Commit**
7. **Query Committed**
8. **Invoke Init**
   - That means chaincode instantitated.
9. **Invoke**
10. **Query**

### `deployChaincode.sh`

0.  run `presetup`
1.  `packageChaincode`
2.  `installChaincode`
    - docker cantainers should be running.
    - install chaincode for each peer.
3.  `queryInstalled`
4.  - `approveForMyOrg1`
      - `checkCommitReadyness`
        - it will saye Org1MSP: true, Org2MSP: false. So we should approve for Org2
    - `approveForMyOrg2`
      - `checkCommitReadyness`
        - it will saye Org1MSP: true, Org2MSP: true.
5.  `commitChaincodeDefinition`
6.  `queryCommitted`
    - Committed chaincode definition for chaincode 'fabcar' on channel 'mychannel':
      - Version: 1, Sequence: 1, Endorsement Plugin: escc, Validation Plugin: vscc, Approvals: [Org1MSP: true, Org2MSP: true]
7.  `chaincodeInvokeInit`
    - **I am getting error it's here and then, this error comes through.**
    - initialize the chaincode
8.  `chaincodeInvoke`
    - Then we can look at <a href="http://localhost:5984/_utils">CouchDB</a>
9.  `chaincodeQuery`

## Network with 3 Raft Orderer

In `crypto-config.yaml` add OrdererOrgs to orderer, orderer2, orderer3
