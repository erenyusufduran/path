# Docker Based Fabric Network Setup

## Native - Docker Based Network Setup

Fabric Infrastructure set up in two ways.

- By using the fabric binaries installed directly on the virtual machines.
- Use the fabric container images for Docker, for setting up the infrastructure.

The services for the various fabric components are deployed on the containerisation platforms, such as _kubernetes_ or _docker compose_.

### Navite vs. Docker Setup

- Both are acceptable ways of setting the infrastructure.
- **Docker** installation is simpler way to setup with _orchestration_ engines and tools.
  - Dependencies may be added as containers. E.g. use containerized versions.

### How to Decide?

- **Skillset available** e.g., are there container experts in team.
  - Does the organization have container exports on the team?
    - If not they may have to go with the native set of technology stack.
- **Technology stack**, is containerization platform available?
  - If the organization already has invested in containerisation platforms such as kubernetes, they may decide to go with docker based setup.
- **Current policies & practices** for setting up IT infrastructure.

### Docker Compose | Kubernetes

- Docker-compose works only on a single HOST on machine. That means is that you need to install all your fabric components such as peers and orderers on a single machine for it to work.
  - User for experimentation.
    - Host file system used for persistence.
    - Orchestration layer manages a virtual network | Host file system mappings.
- Kubernetes works in a multi host setup.
  - Used for setting up Fabric in production.
    - Orchestration engine manages the distribution of containers across multiple hosts.
    - **Docker-compose** will **NOT** work | kubernetes will work.

### Docker-Compose

Requires a config file that define services that make up the app.

- Creates the instances of containers in specified in YAML

  - `docker-compose up -d`
    - Looks for docker-compose.yaml file in current folder.
    - -d flag used to launch environment in the background/detached mode.
  - `docker-compose down`
    - Shuts down all of the containers defined in YAML file.
    - All data stored in the container filesystem is lost.
  - `docker-compose stop`
  - `docker-compose start`
  - `docker-compose pause`
  - `docker-compose restart`

- Default YAML file name may be overridden with -f flag - `docker-compose -f some-file.yaml up`
  - Multiple files may be specified with -f flag - `docker-compose -f file1 -f file2 up`
  - Merges the configuration
  - Properties in later files overrides

### `docker-compose.yaml`

- version: Version of the compose file
- network: Virtual network
- volumes: Data persistence on host machine
  - there will be 3 volumes for each organizations
- services: All services defined under this section
  - 3 services and tool service
    - Tool service created by using the standard fabric-tools image. It has some fabric binaries installed.
    - Launched in the same virtual network
  - container_name
  - image
  - working_Dir
  - command
  - environment
  - volumes
  - ports
  - networks
  - depends_on

## Docker Project Folder Setup

- Single instance of the orderer container type SOLO
- There are two peer organizations, each have single peer.
- Tools container for peer admin | testing.
- Native binary for administration and testing.

> Services are host defined in docker-compose.yaml are not available outside the docker environment. peer1.acme.com, peer1.budget.com will not be available in host machine. You need to define these host /etc/hosts file in setup folder.

### Project Setup Folder Structure

- `docker`
  - `config` - All config managed in this folder /var/hyperledger/config
    - `docker-compose-base.yaml`
    - `crypto-config` - Crypto material used for docker setup
    - `orderer` - Orderer YAML file
    - `acme` - Core YAML file
    - `budget` - Core YAML file
  - `tool-bins` - Shell scripts executed within tools container /opt/scripts
  - `bins` - Shell scripts that are dependent on the native binaries
    - Scripts under the bins folder need to be executed on the VM terminal prompt.

`tool-bins` & `bins` have same shell names files. Differences is that the shell script in `tool-bins` need to be executed within the tools container. In bins folder need to be executed on the VM terminal.

- `init-setup.sh` - Initialize & Launch the setup
- `shutdown.sh` - Shuhdown without cleanup
- `launch.sh` - Launch the setup
- `login-tool.sh` - Logs into the tools docker container
- `clean.sh` - Removes the volumes
- `clean.sh all` - Removes the crypto | network artifacts | volumes
