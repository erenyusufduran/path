# Fabric RAFT Setup

RAFT is a consensus algorithm according to a consensus protocol, which can be used in any scenario that involves a distributed set of servers agreeing on state or values across the network.

<a href="http://thesecretlivesofdata.com/raft">RAFT</a> inherently provides for tolerance. That means one or more of these distributed servers go down, network will still continue to operate.

### Finiste State Machines (FSM)

State machine is a system that manages some data or some state. State managed by the state machine maybe changed by way of actions. At any point the state machine may be queried for its **current state**. Current state is represented by some data. Then there is a **log**, this may be thought of as a _list of commands_. The data or the current state is also refeerred to as the world state, which may be recreated by replaying the log entries or commands in the state machine.

RAFT node may be thought as a FSM. Raft cluster consist of three or more RAFT nodes. Consensus of the cluster is managed by way of communication between the RAFT nodes in the cluster.

- Nodes elect a **Leader**
- Other nodes are **Followers**
- **Leader** receives the _commands | transactions_
- **Leader** replicates log entries to **Followers**.

### Heartbeats

- Leader sends periodic _Heartbeats_ to the followers.
- Follower marks Leader as _dead_ if Hearbeat not received.
  - Follower becomes a _Candidate_ and asks for _votes_.
  - Candidate who gets most votes become the Leader.

### Quorum

Means that, Minimum number of nodes needed to agree on transaction.

Consider this five node cluster. Three out of five nodes must aree on the log entry or transaction to be logged in the FSM.

### Client View of RAFT Cluster

- Followers are aware of which node is the Leader. RAFT clients can submit the transaction to any node in the cluster and that node write the transaction to the Leader node. As a result, the RAFT client views the RAFT cluster as a single state machine.

### Leader Election

When the RAFT cluster is launched, all of the nodes send the proposal as a candidate to become the leader. And the node that gets the most votes become the leader. As long as the leader, sending out the heartbeat, it stays as leader.

## RAFT Type Ordering Service

- **SOLO** - Single node, OKEY for development, Single point of failure
- **kafka** - Cluster management is challenging, Cluster needs to be managed by multiple organizations. Deprecated 2.0

**RAFT** built into the orderer. Recommended for live. Raft node manages the current state and in case of fabric network, it manages the state of the fabric network.

Log Entries in the log has the fabric transaction that act on the data manage in the fabric network. Requires 3 or more instances.

Graph nodes within the orderer instances communicate with other instances in the network by way of TLS enabled gRPC protocol.

> Each channel in the fabric network, there is RAFT cluster which operates independently of the graph cluster for other channels.

### Transactions Routing

Lets say 3 organizations A, B, C. Lets say an administrator in the organization, it wants to execute some chaincode. In that case, the sub of the transaction to a local orderer which will inform the peer client who the leader is. Then peer client will then submit transaction to the leader orderer instance.

### Setup

RAFT setup requires configuration to be carried out at the network and organization level.

- At the network level, orderer type and consensus need to be defined in the configtx.yaml. It embedded in the genesis block for the channel.
- At the organization level, org admins have to make updates to the core.yaml and orderer.yaml.
  - orderer.yaml - Org Admins responsible for TLS setup
  - core.yaml - Org Admins responsible for Cluster setup

## Setup the Orderer TLS

Peer nodes will need to be configured so that they can connect to the orderer enabled for TLS.

> Update to the TLS setup for orderer requires a local change.

1. Setup the TLS parameters

   - General:
     - TLS:
     - Enabled: true to enable TLS
     - PrivateKey: TLS private key
     - Certifcate: TLS server certificate
     - RootCAs: List of Root CA's
   - peer:
     - tls:
       - enabled
       - key
       - cert
       - clientRootCAs: - files:

   Crypto for TLS `docker/config/docker-compose-base.yaml`

   - Launch `docker/init.stup.sh tls`
   - `docker/launch.sh`

2. Initialize and launch the setup
3. Test the setup with TLS enabled
   - To test the script `./test-all.sh tls`
     - executes `docker/bins/cc-test.sh`

## YAML Configuration for RAFT Setup

**`configtx.yaml`**

- `Orderer`:
  - OrdererType: set to etcdraft
  - EtcdRaft: Needed for OrdererType=etcdraft
    - Consenters: List of orderers | consentors
      - Host: Host for the consenter
      - Port: Port number for the consenter
      - ClientTLSCert: Client TLS Certificate
      - ServerTLSCert:
    - Options: Default RAFt parameters for all channels
      - TickInterval:
      - HeartbeatTick:
      - ElectionTick

## Setup the RAFT Orderer Cluster

We will launch three orderer instances. These are going to be consenters in the RAFT network. All of these three will be enabled for TLS. Peer nodes will be setup with TLS enabled and all of the commands that will be executed from the test script will use the appropriate TLS flags in the peer lifecycle chaincode commands.

1. Setup the RAFT network.

   In `configtx file in docker/raft` there is a Consenters subsection. Setup for fivie orderer instances.

   - `./init-setup.sh raft` - Uses the raft/configtx.yaml to generate genesis.
   - `launch.sh raft` - Launches the TLS enabled peer and orderer instances.

2. Initialize and Launch the Setup
3. Checkout Orderer Logs
   - `orderer-logs.sh`

## Expand the RAFT Cluster and Validate Fault Tolerance

1. Update the following file for Orderers
   - `docker-compose-raft.yaml` to `docker-compose-raft-45.yaml`
2. Launch the Orderers
   - `./raft/launch-45.sh`
3. Validate for Fault Tolerance
   - You will first identify the leader and then stop the leader.

Look at `raft/README.md`

- docker ps | grep orderer
