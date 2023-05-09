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

## Commands

### Peer Node

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

### Peer Channel

- The configtxgen tool is used for the create channel transaction file.
- Admin of one other organization will use the peer binary to create the channel on the network.
- Peer binary will require create channel transaction file.
- Peer binary then will create the channel on the network.

`peer channel operation --flags`

- `create` - Create the channel on the network
  - Executed by administrators to create a new channel.
    - _Requires_ the file for channelTx `-f | --file`
    - _Requires_ the channelId `-C | --channelID`
    - _Optional_ timeout `-t | --timeout (default 5 sec)`
  - Actual command executed on the **Orderer**.
    - The way it works is that the peer uses the information from the core.yaml and uses the create channel transaction file and invokes a gRPC service on the orderer to create the channel.
    - Once the channel has been created successfully, a file gets written to the peer's file system and the name of the file is channelID, which you specify as part of the command execution.
    - The orderer can be specified in the command using the `-o | --orderer`
  - The block file that is written by the order is actually the zero to block for the channel or the Genesis Block
  - Any peer intending to join the channel must have access to the Genesis block. The creator of the channel receives the Genesis block as a result of execution of to create command. Other organizations can receive the copy of Genesis Block by using the fetch operation.
- `join` - Peer joins the specified channel
  - Executed by administrators of the organizations
  - Peer binary initializes the _Ledger_ | _State Database_ for the channel.
    - _Requires_ the Genesis Block for the channel `-b | --blockchain`
- `list` - Lists the channels that peer has joined
  - Peer can join multiple channels and for each channel there is a seperate ledger and state database.
  - List a channel that the peer has joined.
  ```
  peer channel create -o localhost:7050
                      -c acmechannel
                      -f $CONFIG_DIRECTORY/acme-channel.tx
  peer node start -o localhost:7050
  . env.sh
  peer channel join -o localhost:7050 -b ./acmechannel.block
  peer channel list
  ```
- `fetch` - Performs a operation on _orderer_ to fetch a block
  - Fetches the specified block from the **orderer**. `-c channelID -o localhost:7050 [output_file_name]`
    - `newest` - Fetches the latest block
    - `oldest` - Fetches the oldest block
    - `Block number` - Fetches by block number
      - `Block number = 0` - Fetches the Genesis Block
    - `config` - Gets the latest config block. Also provides block number.
  - _fetch_ **config** is commonly used for making config changes.
- `getinfo` - Gets information on the specified channel
  - Current height
  - Block hashes
- `signconfigtx` - For signing the config transaction file
  - Administrators will then submit this transaction to the network and to submit the transaction to the network.
  - Enables admin to sign config transaction using **admin**'s identity.
  - The way it works is that the admin executes this command using the peer binary by providing the updated configuration file as input.
  - The peer binary reads the crypto material for the administrator from the configured MSP and then signs the update config file in place, meaning a new file is not generated.
  - Peer binary makes 2 changes in updated config file.
    1. Admin certificate is added to config file
    2. Payload signed by admin's key
    - Verify by checking the size, file size will increase.
  - `-f transactionFile`
- `update` - Updates the existing channel config

  - Enables admin to submit config transaction to _Orderer_.
  - It submits the transaction to the orderer, orderer validates the transaction and then sends out the conflict transaction to all the peers in the network.
  - `-f transactionFile -c channelID -o localhost:7050`

  ```
    in orderer/simple-two-org
    configtxgen -outputAnchorPeersUpdate  Org1Anchors.tx
                -profile AcmeChannel
                -channelID acmechannel
                -asOrg Org1

    cp Org1Anchors.tx ../../peer/simple-two-org
    so go on peer/simple-two-org

    peer channel signconfigtx -f Org1Anchors.tx
    peer channel getinfo -c acmechannel
    peer channel update -f Org1Anchors.tx -c acmechannel -o localhost:7050
  ```
