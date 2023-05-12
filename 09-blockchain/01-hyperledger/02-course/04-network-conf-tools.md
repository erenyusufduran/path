# Network Configuration Tools

The peer and the orderer both have a gRPC server over embedded within the binaries. Both of these components expose gRPC services, which are invoked by the client using messages encoded as protocol buffers.

Server, the peer also interact with he orderer by invoking the orderer gRPC services using messages encoded as protocol buffers.

One thing to note here is that the protocol buffer is in binary format that is there is not a human readable format.

> `peer channel update -f Txn-File` - This command can be used by the administrator for submitting configuration of the transactions. Transaction is encoded as a file and this file is in the protocol buffer format. On execution of this command, the transaction get submitted to the orderer, it gets validated and then the configuration is delived to all the peers in the network.

## Network Configuration Workflow

One of an administrators sets up the config, the transaction as protocol buffer, one or more of the administrators then sign the file containing the config transaction update information as protocol buffer. Then, it is submitted to the peer by way of the peer binary channel update command. Then the protocol buffer is transferred to the orderer as a transaction and then, delived to all the peers in the network.

There is a challenge in this part, since the protocol buffers are in binary format, they can't be managed easily by the administrator. They need to be converted between human readeble format and protocol buffer format. That's where **configtxlator tool** comes up.

Config translator tool can be used for converting protocol buffer formats to JSON.

> Configuration updates are made by first fetching the current configuration, then editing.

1. Fetch the latest configuration and _update_ it.
   - First the administrator will invoke the peer channel fetch command to get the configuration from the network. This configuration will be a protocol buffer, then will be converted by way of the configtxlator to JSON format.
   - Then administrator will edit this JSON file.
2. Submit the _update transaction_ to the orderer.
   - To update the configuration administrator will need to convert the configuration and JSON to protocol buffer format. That will be done by configtxlator.
   - Then one or more administrators will sign it.
   - Administrator submit the protocol buffer for configuration update to the orderer.

## Configtxlator Tool

Tool is available in 2 mods.

1. **Command Line Interface**: All the commands are executed on the terminal prompt.
2. **REST Server**: Configtxlator is launched as a REST server and the commands are executed by using the curl utility.

- Same binary used to launching CLI & REST Server.
- Commands exposed as REST endpoints.
- `configtxlator command --flags`
- commmands:
  - `proto_decode`: proto buffer to JSON
  - `proto_encode`: JSON to proto buffer
  - `compute_update`: Compute **DELTA** between 2 proto buffer files.
    - `--original`: Original config proto buffer fetched from network.
    - `--updated`: Updated config proto buffer.
    - `--channel_id`: Channel ID
- flags:
  - `--type`: Type of proto buffer structure to encode/decode
    - common.Block - Block format
    - common.Config - Configuration transaction
    - common.Envelope - Transaction enclosed in message envelope
    - common.ConfigUpdate - Update config transaction message format
    - Common.Policy - Policy message format
  - `--input`: Specification the file that is used as an input.
  - `--output`: same as input.
