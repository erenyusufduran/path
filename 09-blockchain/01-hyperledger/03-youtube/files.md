## `artifacts/channel/crypto-config.yaml`

For creating the network, we require identities. We have two options for creating the identities. First one **CA**, second one **cryptogen tool**. Here we are using cryptogen.

There are OrdererOrgs, PeerOrgs and their spesifications.

- In PeerOrgs there are Template for creating certificate.
  - Template/Count: 2, because we are creating 2 peer for one organization.
  - Users/Count: 1, because we will have 1 Admin and 1 user.
- `cryptogen generate --config=./crypto-config.yaml --output=./crypto-config/` in `./create-artifacts.sh`
  - Then crypto-config folder is created.

## `configtx.yaml`

We can generate **Genesis Block and Transaction Channel** with this file.

- Organizations:
  - OrdererOrg
    - Name
    - ID
    - MSP
    - Policies
  - Org1
    - AnchorPeers:
  - Org2
- Capabilities:
  - Channel capabilities
  - Orderer capabilities
  - Application capabilities
- Application:
  - Organizations
  - Policies
- Orderer
  - Consensus
    - Consenters
- Channel
  - Policies
- Profiles
  - BasicChannel
  - OrdererGenesis

in `./create-atrifacts.sh`, we are using configtxgen for genesis block and basic channel. Then we are creating anchor peers with same file.

## `docker-compose.yaml`

services:

- ca-org1 / For organization
  - image: hyperledger/fabric-ca
  - environments
  - ports
  - volumes
  - networks
- orderer.example.com
  - image: hyperledger/fabric-orderer:2.1
  - environments
  - command: orderer
  - ports
  - networks
  - volumes
- couchdb0
  - image: hyperledger/fabric-couchdb
  - environment
  - ports
  - networks
- peer0.org1.example.com
  - extends:
    - file: base.yaml
    - service: peer-base
  - environment
  - ports
  - volumes
  - networks

Up this network, `docker-compose up -d`
