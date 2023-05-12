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
