# Hyperledger

Hyperledger project is an open-source collaborative effort created to advance cross-industry blockchain technologies by Linux Foundation.

A distributed ledger technology framework for building business blockchain applications.

1. Permissioned Network

   - Member identities are known.
   - Participants have role-based access.

2. Confidential Transactions

- Not all transactions should be visible to all.
- Members can transact privately.

3. No cryptocurrency

- No incentivization needed.
- No Crypto tokens needed for transactions.

4. Programmable

- Smart contracts
- Business Logic Implementation

## Hyperledger Architecture Components

- All Blockchain technologies have the concept of nodes.

  - Nodes connect to other nodes to from the BC network.
  - _Member_ = Legally seperate entities.

  ```
  Node
  - Orderers
  - Peers
     - Leader peer
     - Anchor peer
  - Client
  ```

  - Responsible for consistent ledger state across the network
  - Consensus mechanism
  - Ensures order of transactions

- ### SOLO
- Single node
- ### RAFT
- A consensus algorithm built into the Orderer binary
- Recommended for Production

---

- There are two part of the ledgers. Txn log & State.
- Log is immutable.

## Binaries & Configuration

---

1. ### Dependencies

- **Docker** is used by Fabric in three ways.
  1.  Chain Code - Launched in isolated containers.
  2.  Components available as Images
  3.  Container orchestration
- **LevelDB** built into the binaries.

2. ### Components, Tools
   Fabric components may be categorized under three headings.
   1. Core Components
      - Peer
        1. Launched as a process = node in network
           - May be tagged as _Anchor_ | _Leader_
        2. Used as a tool to manage network/channels _config_
      - Orderer
        1. Built in messaging - **SOLO**
        2. Connects to **kafka**
   2. Tools / Utilities
      - configtxgen
        - Management of network/channel configuration.
      - configxlator
        - Translates between protobuf - json
      - cryptogen
        - Generates crypto material for testing
   3. Fabric Certification Authority
      - fabric-ca-server
        - CA Server implementation
      - fabric-ca-client
        - Tool for managing identities on CA server

---

## Infrastructure Setup

1. Container based setup
   - Use the HLF components docker images.
   - Containers may be hosted in _shared_ | _dedicated_ VM(s).
   - Setup uses docker
2. Native setup
   - Binaries installed directly on VM
   - Orchestration tools & scripts may be used.

---

<a href="https://www.vagrantup.com/intro/getting-started/">Vagrant Getting Started</a>

- vagrant up - Starts the VM
- vagrant ssh - Log into the VM
- vagrant halt - Gracefully shuts down the VM
- vagrant destroy - Deletes the VM

---

## Fabric 2.x Updates

- **MAJOR** enhancements to Chaincode Lifecycle

  - The only way of managing the chain, called lifecycle is still available. But at this point, would be to use the Fabric 2.0 check code lifecycle management.
  - ```
    New peer command for chaincode lifecycle - peer lifecycle chaincode --flash
    ```

- Introduction of implicit collections
  - If you are exchanging private information with an organization, you don't have to explicitly create a private data collection definition for that.
- State Database caching for CouchDB
  - You will find that the query performance has improved, because now caching is in use.
- Docker image optimization
