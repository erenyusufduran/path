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
