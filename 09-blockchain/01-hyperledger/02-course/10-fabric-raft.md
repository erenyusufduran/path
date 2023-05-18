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
