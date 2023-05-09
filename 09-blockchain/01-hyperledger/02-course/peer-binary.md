# Peer Binary

Peer binary is used for two purposes.

1. First one is launched as a peer process. It becomes a node in the hyperledger fabric blockchain network.
2. Second one is used as a utility for managing the **peer configuration** and the **network configuration**.

Peer depends on the availability of the configuration file in YAML.

- At runtime config may be overridden by **environment variables** at runtime.
- Path of the config specified in `FABRIC_CFG_PATH`

On launch the peer reads the location of `core.yaml` file then reads in all the configuration available in core.yaml, overrides any configuration for which the env variables have been set, reads the MSP and then connects to the orderer and writes data to the storage location.

---

Like the orderer, peer binary also has an embidded gRPC server and it exposes gRPC services. These gRPC services are used by clients, applications, utilities as decays and the peer binary itself.

Like the orderer, peer also leverages cryptographic service provider. In other words, functions for the cryptography are not built in the peer binary. They are provided by the CSP module.

- `peer command subcommand --flags`
  - help - Get help on commands
  - version - Version of the peer binary
  - node - Used for managing the peer
  - channel - carry out channel operations
  - chaincode - Chaincode operations (Fabric 1.x CC lifecycle)
  - Fabric 2.x has introduced a major change in how the lifecycle of a chain managed, and for that it has introduce a new command effort.
    - lifecycle - Manage the chaincode lifecycle
      - chaincode - Available for managing CC
- `peer lifecycle chaincode --flags`

## Peer Test Setup

The peer setup will use the channel transaction file and the crypto config folder under the `orderer/simple-two-org`

Peer setup `peer/simple-two-org/core.yaml`

This storage location will be specified by way of the core document file on the environment variable, and that's where the peer write the ledger and other data elements.

In orderer dependency core.YAML will MSP setup to use peer crypto.

```
./clean.sh - Deletes the content of the storage folder

./clean.sh all
  - Deletes the storage folder
  - Deletes the generated artifacts
  - Copies from setup/config/simple-two-org/core.yaml

.env.sh - Set up the environment variables

./show-env.sh - Shows the current environment variables setup for peers
```

- Peer commands are executed under an **identity context**.

  - `./set.identity.admin.sh` - Sets up the _admin_ identity.
  - `./set.identity.user1.sh` - Sets up the _user1_ identity.

- Orderer MUST be up for peer to function
  - `./start-node.sh` - Launches the peer node.
  - `./stop-node.sh` - Kills the peer node.

## Command: Peer node

`peer node start --help`

- `start` - Starts the peer
  - To stop in terminal, kill the peer process ^C
  - To stop back groundprocess, use Linux `killall | kill`
- `reset` - Removes the block from:
  - ALL Channels
  - EXCEPT the genesis block
  - On start receives the blocks for all channels
- `rollback` - Removes the blocks from:
  - SPECIFIC Channel
  - From latest to specific block
  - On start receives the blocks
- `pause` - Puts the peer in dormant | offline state
  - SPECIFIC Channel
  - No new blocks received
- `resume` - Starts the paused peer
  - SPECIFIC Channel
- `rebuild-dbs` - Resets the database(s)
- `upgrade-dbs` - Updates the databse(s) with new formats
  - ALL Channels [StateDB | HistoryDB]
