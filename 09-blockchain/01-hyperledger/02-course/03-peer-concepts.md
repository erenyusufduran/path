# Peer Configuration

Core.YAML has multiple section. Per section has the properties that control general behavior of the peer. For example, MSP configuration, networking and storage path where the peer is controlled by way of the properties under the peer section.

- **peer**: General properties e.g., Networking, MSP, Storage Path
- **ledger**: State database e.g., CouchDB connection
- **chaincode**: Chaincode runtime e.g., Logging, Startup timeout

Peer emits information about its internal state and this information is used for managing the peer instances.

Third party products or systems can intergrate the peer to carry out monitoring and alerting for the peer instances. The endpoint configuration for monitoring and alerting is managed under the **operations** and **metrics** section.

The last section is the **vm** section that has information regarding the use or docker containers within a virtual machine.

---

All parameters specified in the core.YAML file may be orderer by way of environment variables. Naming schema `CORE_SECTION_SUB-Section_PROPERTY`

- e.g. `CORE_PEER_LISTENADDRESS`

Make sure that you set `FABRIC_CFG_PATH` variable.

---

Peer writes data to the file system and there are certain parameters that need to be set for the file system writes.

Every peer in the network has an identity. Identity is assigned by way of an ID parameter under the general properties for the peer.

- **id**: Peer's identity `devpeer`
- **networkId**: Seperation of networks `dev`

The way it is used is that when the chaincode is instantiated, peer sets up a docker image and the name of the image is prefixed with he networkID. The peer process can be configured to listen on multiple addresses;

- **listenAddress**: Incoming gRPC connections; by default listens on all network interfaces.
- **address**: CLI config endpoint; other peers in the same org

If the **address** parameter is not set, then all incoming connections accepted on **listenAddress**.

> As a best practice always set the address parameter to a private IP address.

- **chaincodeAddress**: Chaincode listener address - Optional
  - is used by chaincode containers for interacting to the peer.

There are two parameters for setting up the local MSP.

- **localMspId**: Must match with the MSP ID in the channel _genesis block_
- **mspConfigPath**: File system path for MSP local configuration for the crypto material.
- Peer writes to the file system, where path to peer write is specified at **fileSystemPath**. As a best practice this path must be protected and secured.

![](./core-yaml-generalProps.jpeg)

## Transport Layer Security for the `peer`

Like the orderer, peer also has gRPC server embedded with it. It can receive calls from gRPC clients. The peer also acts as a gRPC client to the orderer.

The peer binary has the gRPC server and there are gRPC services which are exposed to the clients. These services are exposed on the `listenAddress`. gRPC support TLS, which is enabled by way of the properties under the TLS subsection. You can enable and disable the TLS and then you can also enable, disable client authentication.

The peer binary acts as a gRPC client to the orderer. If the orderer has the client authentication enabled, then the peer has to present it's certificate.

As look at the parameters you need to set for enabling the TLS on the peer.

1. Enabling the TLS
   - `tls`: TLS Configuration
     - `enabled`: true | false
     - `key`: Path to the private key _server.key_
     - `cert`: Path to the TLS certificate _server.crt_
     - `rootcert` : Truster root certificate
2. Setting up the Client Authentication
   - `tls`:
     - `clientAuthRequired`: true | false
       - false = Accepts connection from any source
     - `clientRootCAs`:
       - `files`: List of Client CA certs that can be trusted
3. gRPC TLS Client
   - `clientCert`:
     - `file`: Cert used by peer for client connections
   - `clientKey`:
     - `file`: Key used peer for client connections

### Enabling TLS on the Peer

There are 3 steps.

1. Enable the TLS & Set the certificates
   - It can be done by way of either the core.YAML update the `enabled, cert, key, rootcert` parameters or it can be done by of overwriting the core.YAML parameters in the environment variables.
2. Setup the VM `hostname` & `etc/hosts`
   - Reason you need to do this is because the DNS certificate issued to the peer is for a specific host. In our case devpeer host, doesn't have an associated IP and that is the reason we need to add that UP address to _axios_.
3. run a command to check if TLS is working. - `peer channel list` can be.

- `. env.sh`
- `. ./snippets/enable.tls.sh`
- `.start-node.sh`

if running this commands you would take an error.

- Peer associated with the host: devpeer
  - `sudo hostname devpeer`
- Host devpeer need to set with an IP address
  - if in `sudo vi/etc/hosts` does not have devpeer:
    - `sudo edit /etc/hosts`
