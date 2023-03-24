# Docker Compose

Docker Compose, which is a combination of a command line tool and a configuration file.

When you think about your containers, they're a single process solution, we're rarely going to use just a single container to solve a problem or provide a service to our customers.

What if we had a way to connect all those pieces of our solution together, where we are didn't need to remember all of our docker run options, and then get them into discreet, virtual networks with relationships between them, and only expose the public ports, and then spin them all up and tear them down with one command.

The first part is the YAML file.
Second part is a CLI tool

### **docker-compose.yml**

- Compose YAML format has it's own versions: 1, 2, 2.1, 3
- YAML file can be used with _docker-compose_ command for local docker automation.
- With _docker_ directly in production with _Swarm_.

```
docker-compose.yml is default name, it can change with -f
```

## docker-compose CLI

- CLI tool comes with docker.
- Not a production-grade tool but ideal for local development and test
- Two most common commands are
  - _docker-compose up_ - setup volumes/networks and start all containers
  - _docker-compose down_ - stop all containers and remove cont/vol/net
- If all your projects had a _Dockerfile_ and _docker-compose.yml_ then new eveloper onboarding would be:
  - git clone github.com/some/
  - docker compose up

---

- Compose can also build your custom images
- Will build them with _docker-compose up_ if not found in cache
- Also rebuild with _docker-compose build_
