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
- services: All services defined under this section
  - container_name
  - image
  - working_Dir
  - command
  - environment
  - volumes
  - ports
  - networks
  - depends_on
