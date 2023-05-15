# Fabric Certification Authority

## Identity Management

There are human actors such as **admins, users, registers** and there are non-human actors **orderers, peers, applications**.

Each of these actors are issued a certificate encapsulate information about each of these actors and identities certificate has the role assigned to the identity and there are some additional attributes in the certificate.

The role and the attribute determines the privileges.

- Agents of trusted certification authorities typically referred to as registrars, other one who issue the identities.
- They are also responsible for assigning appropriate privileges to each of the identities they create.
- They may be able to create identities that in turn can issue or create new identities.

Identity creation in _Fabric_ is a two step process.

1. Step is carried out by the registrar. In this step, **registrar registers** the identity that leads to the generation of the `enrollment ID` and `enrollment secret` This things are securely provided to the end user that owns the identity.
2. End user then carries out step 2. Which is the **enrollment process**. Enrollment process leads to the generation of the certificate for the end user. Take off the register process as an invitation to a user to join the blockchain network and think of the enrollment process as an acceptance of the invitation by the end user.

To add an identity, the registrar has to provide the identity specifications.

- Name: Free string (unique)
- Type: Represents type (peer | orderer | client | other types)
- Affiliation: Organization (specifies the org which identity belongs)
- Max Enrollments: Max Re-enrollment count (how many time identity owner can execute the end rule step. everytime the end user rules or re-enrules, the certificate is updated.)
- Attributes: [ Standard | Custom ] (list of attributes)

> Type may be specified as admin, user, client, peer, orderer or app.

- Affiliation refers to an organization to which the identity is offiially attached or connected.
  - For example; for the organization acme, the employees will have an identity and they'll also be components the orderer of the peer that would be created.
  - These identities will have the affiliation set to acme. Similarly for the organization Budget.
  - Affiliations may be specified at the department level. It doesn't need to be Org level. (acme.logistics, acme.sales)

Attributes use for **Authorization**.

- There are standard attributes and registrars can create custom attributes.
- Attribute names are created with dot notation.
  - Standard attribute names begin with `.hf`
  - **hf.Registrar.Roles - List** - Roles that registrar can manage
  - **hf.Registrar.Attributes - List** - List of attributes for registrar
  - **hf.AffiliationMgr - Boolean** - Allowed to manage affiliations

## Certification Authority

Fabric provides a built in Certification Authority component. Fabric CA components;

- Allow for the creation and management of certification authorities for blockchain networks.
- Implementation of the certification authority is custom built to fulfill the needs of the fabric blockchain networks.
  - You cannot use the certificates created from the fabric, see it in a browser or in other applications.
- Primarily, the fabric is used for setting up _Private Root CA_ & _Intermadiate (ICA)_.

There are three parts in the Fabric CA implementation.

- **CA Server:** Exposes certificate creation and management services.
- **CA Client:** Utility for interacting with the server.
- **SDK:** Set of libraries for writing applications against the CA Server.

The registrar or the admins use the **CA Client** for creating and managing identities on the **CA Server**. Then developers or the users can write applications using the **CA SDK** to interact with the **CA Server**.

### CA Server Services

Consumed by the administrators and registrars **to carry out identity and certificate management**, **for registering new identities**, **to carrying out affiliation management** and **revocations of certificate.** Commonly, the end user interacts with the CA Server services for _enrollment and re-enrollment_.

CA Server exposes these services as REST APIs. The CA Client and SDK consume these APIs. You don't need to use CA Client if you can write your own applications using any language library to invoke these APIs. The specification for these apps are available ib **Swagger format**.

Like the peer and the orderer, the `fabric-ca-server` is available as a single binary. The CA Server for the blockchain network using the fabric-ca-server **binary can be launched as a single process**. But that would introduce a **single point of failure**. OR you can setup the CA Server for your blockchain network in the cluster mod.

- `fabric-ca-server command --flags`
  - `command`:
    - `version`: Version of the binary
    - `init`: Initialize the CA Server
    - `start`: Start the server
  - `flags`:
    - `-d --debug`: To enable debug level logging
    - `-b --boot`: Bootstrap identity
      - The initial credetials that are used for creating new identities. Think of it as the admin user IDs and admin password.
    - `--address`: Listening address. Default=0.0.0.0
    - `-p`: Listening port. Default=7054
    - `-n --ca.name`: Name for the CA
    - **Certificate** - CA certificate setup
    - **TLS** - Transport Layer Security
    - **CSR** - Certificate Signing Request
    - **Database** - DB Config for cluster setup
    - **LDAP** - LDAP Config for cluster setup
    - **Intermediate CA** - ICA Configuration

### Launch without initialization - Good for testing

`fabric-ca-server start -b admin:adminpw`

- First time _start_ initializes the CA server.
- CA Server generate fabric-ca-server-config.YAML file.
- It generates a self-sign CA Certificate and a key file.
- All of identities on the CA server are manages in a persistent store. By default, SQLite is used by the Ca server. It is embedded database, no seperate server.

Apart from managing information in the database, the CA server also manages information on a file system folder. The location of the file system folder can be specified by way of the `-h` flag. If not specified, then it looks for **environment variable** as `FABRIC_CA_SERVER_HOME`. If not see this look for `FABRIC_CA_HOME`. If not `CA_CFG_PATH`. If not see it too it uses the **current folder**.

- Fabric CA, custom implementation to fulfill needs of Fabric.
  - CA Server
    - Services for managing identity
    - Single binary `fabric-ca-server`
    - Exposed REST APIs
  - CA Client
  - SDK

### Exercise - CA Server

1. Launch the CA server with default configuration.
   - Open terminal window and switch to folder: `ca/server`
   - `fabric-ca-server start -b admin:adminpw`
2. Explore the REST API `swagger`
   - <a href="https://github.com/hyperledger/fabric-ca/blob/master/swagger/swagger-fabric-ca.json">Swagger Fabric CA</a>

## Configuring and Launching the CA Server

- `fabric-ca-server start --flags`
  - Launches the CA server process. It checks if the server has already initialized or not.
    - If the certificate exists and the server has been initialized, then the server is simply logged and starts to listen for the incoming connections.
    - If that is not the case, then the CA server binary checks
      - If the CA server need to be set up as an Intermediate CA, this is check from the configuration.
        - If it is an ICA, then the binary gets the root CA signed cerficate from the root CA.
      - If it is not being set as an ICA, It is being set as a ROOT CA, then the configuration is used for generating a self-sign root certificate and then the server gets launched.
  - Config may be provided by way of _flags_ | _environment_ | _yaml_.
  - Reads the configuration from the `fabric-ca-server-config`
- `fabric-ca-server init --flags`
  - Initializes the CA server.
  - Very similar to start command works, except that it does not launch the CA server.

### `fabric-sa-server-config` File

- `version`: Version of the server
- `port`: Port on which the server listens for incoming REST requests. _Default=7054_
- `crlsizelimit`: CRL size limit. _Default=512000_
- `debug`: Enable/Disable debug level logging

These properties may be overridden with environment variables.

- **Root Certificate Specification**
  - `ca`: Certification Authority Information
  - `csr`: Certificate Signing Request
- **Intermediate CA Setup**
  - `intermediate`: Intermadiate CA Server Setup
- **Identity Enrollment**
  - `affiliations`: CA server affiliations
  - `signing`: Cerificate Signing Configuration
- **Identity Persistence**
  - `registry`: Registry for managing identities
  - `db`: Database configuration
    - SQLite, MySQL, PostgreSQL
  - `ldap`: CA server affiliations
- **Sections**
  - `tls`: Transport Layer Security
  - `crl`: Certificate Revocation List
  - `bccsp`: Blockchain Crypto Service Provider
- **Multiple Certification Authorities**
  - Single CA Server process may host multiple **CA**.
    - To configure the multiple certificate authorities on the same CA server, you have to setup the parameters in two sections.
      - `cacount`: Count of the CA.
      - `cafiles`: Files related to each of the CA.

### Standalone Root CA Server Setup

- Single CA for Acme and Orderer organization
- Use _default database_ for identity persistence - **SQLite**
- TLS = disabled
  - cn - Common Name - Acme-CA
  - O - Organization Name - Acme
  - OU - Organizational unit - B2B
  - L - Location or city - Newark
  - ST - State - New York
  - C - Country - USA

1. Setup the parameters in `fabric-ca-server-config`
   - `ca`
     - `name`: acme-ca
     - `keyfile`: ca-cert.pem
   - `affiliations`
     - `acme`:
       - logistics
       - accounting
     - `orderer`:
       - support
   - `registry`:
     - `maxenrollments`
     - `identities`:
   - `csr`:
     - `cn`: Acme-CA
   1. Execute `./clean.sh`
   2. Copy fabric-ca-server-config.yaml to `ca/server`
2. Execute the init command
   1. In `ca/server`, run `fabric-ca-server init`
   2. `fabric-ca-server start`
3. Examine the Root Certificate
   1. Check <a href="https://certlogik.com/decoder/">ca-cert.pem</a>

## Fabric CA Client

- Fabric CA Client is a command line interface for interacting with the CA server. Like the CA Server, it is available as a single binary `fabric-ca-client`.
- CA Client binary picks up the configuration information from `fabric-ca-client-config.yaml` file.
- CA Client need access to the crypto material for the identity that it uses for interacting with the CA Server.
- Home folder can specified with `-h flag`, `FABRIC_CA_CLIENT_HOME`, `FABRIC_CA_HOME`, `CA_CFG_PATH`, `$HOME/fabric-ca-client`

- `fabric-ca-client command --flags`
  - command:
    - `getcainfo`: Gets the CA info
    - `identity`: Manage the identities
    - `register`: Registers an identity
    - `enroll`: Enroll an identity
    - `reenroll`: Re-enroll an identity
    - `affiliations`: Manage affilitiations
    - `certificate`: Manage certificates
    - `revoke`: Revoke identity
    - `gencrl`: Generate Certificate Revocation List
    - `gencsr`: Generate a Certificate Signing Request

### Bootstap Identity

- `fabric-ca-client enroll -u http://admin:adminpw@localhost:7054`
- `fabric-ca-client reenroll`

### Explore the CA Client Setup

1. Add an additional bootstrap identity (user)
   - added in `config.1`
2. Enroll the bootstrap identities (admin & user)
   - in ca folder `. ./setclient.sh admin`
   - `fabric-ca-client enroll -u http://admin:adminpw@localhost:7054`
   - in ca folder `. ./setclient.sh user`
   - `fabric-ca-client enroll -u http://user:userpw@localhost:7054`
     - gives an error in third time.
3. Call enroll command multiple times for user

## Attribute Based Access Control (ABAC) & Identity Commands

- Standard attributes are used for fabric runtime access control.
  - When the registrar is creating an identity, the fabric runtime checks, if the registrar has the appropriate attribute, that would allow the registrar to create new identities.
- Specification elements added as attributes (default)
  - Name: hf.EnrollmentID
  - Type: hf.Type
  - Affiliation: hf.Affiliation
- Custom attributes are added by the registrar.
  - User by Application Level Access Control.
  - Accessible from chaincode.

By default attributes are not added to the enrollment certificae of an identity. Registrar need to expliciitly request for the attributes to be added to the insert.

These access control mechanism is referred to as the attribute based access control.

1. Launch the CA server & Enroll admin identity
   - `fabric-ca-server init`
   - `fabric-ca-server start`
   - `. ./setclient.sh admin`
   - `fabric-ca-client enroll -u http://admin:adminpw@localhost:7054`
2. List the identities using the _`identity list`_ command
   - `fabric-ca-client identity list`
3. Add 2 new identities of `type=user` and default attributes
   - `fabric-ca-client identity add user1 --type user --affiliation org1 --maxenrollments 2`
   - `fabric-ca-client identity add user2 --json '{"type": "user", "affiliation": "org1", "maxenrollments": 2}'`
4. Modify affiliation of the user to _org2_ & add a custom attribute
   - `fabric-ca-client identity modify user --affiliation org2 --attrs myAttr=true`
5. Remove the user1 and then use `list` command to confirm
   - `fabric-ca-client identity remove user`
6. Modify custom attribute such that its added to the _ECert_.
   - `fabric-ca-client identity modify user --affiliation org2 --attrs myAttr=true:ecert`
