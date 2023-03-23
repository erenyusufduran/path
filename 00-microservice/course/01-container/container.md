# Containers

Containers are the fundamental building block of the Docker toolkit and that's one of the first things we're going to learn.

- Check versions of our docker CLI and engine.
- Create a Nginx (web server) container
- Learn common container management commands
- Learn Docker networking basics

---

    docker version - verified cli can talk to engine
    docker ps - to see working containers
    docker info
    docker container logs
    docker container rm
    docker top - list running processes in spesific cont

---

**-d**

- it's the short version of --detach. By running in detached mode, we are able to have access to our command line when the container spins up and runs. Without it, we would have logs constantly fed onto the screen.

---

### Image vs. Container

- An image is the application we want to run
- A container is an instance of that image running as a process
- You can have many containers running off the same image
- Docker's default image "registry" is called Docker Hub.

**docker container run --publish 80:80 nginx**

1. Downloaded image _nginx_ from Docker Hub
2. Started a new container from that image
3. Opened port 80 on the host IP

### Run vs. Start

- _docker container run_ always start a **new** container
- _docker container start_ to start an existing stopped one

### What happens in _docker container run_?

1. Looks for that image locally in image cache, doesn't find anything
2. Then looks in remote image repo
3. Downloads the latest version
4. Creates new container based on that image and prepares to start
5. Gives it a virtual IP on a private network inside docker engine
6. Opens up port 80 on host and forwards to port 80 in container
7. Starts container by using the CMD in the image Dockerfile.

## What's Going On In Containers

- docker container top - process list in one container
- docker container inspect - details of one container config
- docker container stats - performance starts for all containers
