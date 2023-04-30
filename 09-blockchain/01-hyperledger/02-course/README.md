# Hyperledger

Hyperledger project is an open-source collaborative effort created to advance cross-industry blockchain technologies by Linux Foundation.

A distributed ledger technology framework for building business blockchain applications.

1. **Permissioned Network**

   - Member identities are known.
   - Participants have role-based access.

2. **Confidential Transactions**

- Not all transactions should be visible to all.
- Members can transact privately.

3. **No cryptocurrency**

- No incentivization needed.
- No Crypto tokens needed for transactions.

4. **Programmable**

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

    ***

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

```
- vagrant up - Starts the VM
- vagrant ssh - Log into the VM
- vagrant halt - Gracefully shuts down the VM
- vagrant destroy - Deletes the VM
```

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

### **Fabric 2.0 Chaincode Lifecycle Enhancements**

**External Chaincode Build & Launch**

You can put together build process in an independent component and then configure peer to use that independent compenent to build a chain code from the launch perspective.

**Chaincode in Containers are Optional**

The chaincode can be launched as a surface in any kind of container. For example:

- You can host your chaincode as a process.
- You can host your chain code in a cabinet as part.

So it really doesn't matter how you are hosting your chain code. As long as the interface is exposed by the chain, code can be configured in the bill.

Bottom line is that you can use any technology to build a chain. Because the build process and the hosting process are the launching process is externalised.

- In fabric 1.x always launched the chaincode in docker container, but in fabric 2.x chaincode doesn't need to be launched in docker.
- The default mechanism available in fabric 2.x launches the chain caught in docker containers.
- Code does not have to match across organizations.

**No need to share Chaincode `code`**

- Lets say there are four members on a channel A, B and C have decided to share the chaincode code. In that case, developer from of these organizations can implement the chaincall and then put it in some kind of a shared repository in these three members can then pick up the code from the shared repository and deployed in their peers.

- INPUT/OUTPUT **MUST** match tfor the transactions.
- Read-Write sets **MUST** match for successful endorsement.

**Decentralized Chaincode Governence**

- Members have the ability to vote!
  - How many members should agree?
  - Some member's votes may have higher weightage.

---

- New system chaincode for managing Chaincode _lifecycle_
- Chaincode tracked with _name_ & _sequence_ number. _Sequence_ number incremented when CC updates.
- Admins MUST approve spesific packages for installation.
- Out of sync peers won't work.

## Cryptogen Binary - Command Line Tool

```
  cryptogen command --flags <args>
```

- Identity managed by way of certificates.
- Identity management is not centralized.
- Members manage identities within their organizations.
- Utility for generating the crypto material.
  - Used for test environment setups.
  - Requires the information in YAML format.

```
cryptogen generate --config=./crypto-config.yaml
```

Orderer needs access to the MSP & TLS

- cryptogen/simle-two-org/crypto-config/ordererOrganization/orders/msp & tls

**Addition of components to existing setup**

- Full crypto regeneration = Resetting the component setup
- Extend existing crypto setup using the **extend** command
- `cryptogen extend --config=<conf-file>`
- `--input=<input-folder>`
- It's for;
  - Addition of a member
  - Addition of a orderer
  - Addition of a peer(s) to an organization
  - Addition of user(s)

```
  Example: Add a peer for organization

  We have the old one organization
  in which there's a peer by the name
  Dev Peer. We are going to create new
  Dev peer.

  Then we will run the cryptogen command
  on the extension configuration. It will
  generate the crypto material for dev
  peer to under the crypto config.

  Key point to note here is that this
  extension file is not the same as the
  original crypto config file we used.
  So it will not affect the existing
  crypto material.

  crypto-config.addpeer.yaml
```

### Summary

- Cryptogen tool generates the crypto material that is typically used for: **Testing**
- The default output folder name for the cryptogen tool is **crypto-config**
- To specify the output folder for generating crypto material you would use the flag **--output**
- **PeerOrgs** of cryptogen tool is used for defining the anchors.
- By default cryptogen tool generates a special user the **Admin** that can manage the peers _within the organization_.
- The MSP/TLS folders for the Peer/Orderer
  - May be placed in shared folder or copied to seperate folders/hosts to be used by Peers/Orderers

### Exercise - Setup crypto-config.yaml for 2 Peer Orgs

- Setup a new crypto-config
- Orderer
  - Org
    - Orderer
- Peer
  - Orgs
    - Org1 (acme.com)
    - Org2 (budget.com)
- Start by using crypto-config.yaml
- Delete the existing crypto-config folder

## Configtxgen Tool

**Utility for managing configuration artifacts**

- **Genesis Block**: This is the first block in the Blockchain
- **Channel Tx**: Create channel transaction
- **Anchor Peer Tx**: Anchor Peer Update Transaction

**Generated in the form of a _binary file_**

- Does not have any dependency on runtime.
- TX may be signed by multiple admins using the **peer**.

In yaml file has six section. `configtx/simple-two-org/configtx.14.yaml`

- **Organizations**: List the Member Organizations
  - Orgs defined as **anchors (&)** to avoid repetition.
  - Each organization has a name. There is ID and MSPDir.
- **Orderer**: Configuration for the Orderer
  - Order section is also defined as an anchor element so that you can refer to it.
  - OrdererType: solo | kafka | etcdraft
    - Single item for type = solo
  - Batch Timeout: Which basically decides the block time for the network.
  - Batch Size:
    - MaxMessageCount: Indicate is the maximum number of messages.
    - MaxBytes: The administrator or the dev of the configuration can specify the preferred max byte's maximum size, but the block can accommodate the size specified by absolute max bytes. Let's say the order has received six transactions. If it reach out the Max Bytes, it sends to block.
- **Application**: Application Configuration
  - There is a list of organizations that participate in the application type transactions.
- **Channel**: Channel related parameters
  - Defines the default set of parameters for the channel. It sets the default policies.
- **Capabilities**: Binary version management
- **Profiles**: Setup multiple configs in a file.
