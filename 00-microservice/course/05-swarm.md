# Swarm Mode

If you have just a couple of people on your team, or if you're just a solo developer, how do you take your containers and scale them and deal with their entire life cycle? From deploying them, to starting them, to restarting them, to recreating them, to deleting them and updating them and all that.

We start to ask questions around how exactly does _Docker_ do that or does it even do that at all?

- How do we automate container lifecycle?
- How can we easily scale out/in/up/down?
- How can we ensure our containers are re-created if they fail?
- How can we replace containers without downtime?
- How can we control/track where containers get started?
- How can we create cross-node virtual networks?
- How can we ensure only trusted servers run our containers?
- How can we store secrets and get them to the right container?

## Built-In Orchestration

Swarm Mode brings together years of understanding the needs of containers and how to actually run them live in production.

> **Swarm** _is actually a server clustering solution that brings together different operating systems or hosts, or nodes, into a single manageable unit that you can then orchestrate the lifecycle of your containers in._

---

**`docker service create`**

| Manager Node |                                               |
| :----------: | --------------------------------------------- |
|     API      | Accepts command from client, creates services |
| Orchestrator | Reconciliation loop for service objects       |
|  Allocator   | Allocates IP addresses to tasks               |
|  Scheduler   | Assigns nodes to tasks                        |
|  Dispatcher  | Check in on workers                           |

| Worker Node |                                                |
| :---------: | ---------------------------------------------- |
|   Worker    | Connects dispatcher to check on assigned tasks |
|  Executor   | Executes the tasks assigned to worker node     |

---

```
docker swarm init
docker node ls
docker service create alpine ping 8.8.8.8
docker service update ID --replicas 3
```

## Scaling Out with Overlay Networking

- Just choose --driver overlay when creating network
- For container to container traffic inside a single Swarm
- Optional IPSec encryption on network creation
- Each service can be connected to multiple networks

## Scaling Out with Routing Mesh

- Routes ingress (incoming) packets for a service to proper task
- Spans all nodes in Swarm
- Uses IPVS from Linux Kernel
- Load balances Swarm Services across their tasks
- _Two ways this works:_
  - Container to container in a overlay network
  - External traffic incoming to published ports (all nodes listen)
  ***
- This is stateless load balancing
- This LB is at OSI layer 3 (TCP), not layer 4 (DNS)
- Both limitation can be overcome with:
  - Nginx or HAProxy LB proxy, or
  - Docker Enterprise Edition, which comes with build-in L4 web proxy

> The load balancer built-in to the overlay networking driver will do this job out of the box.

> In the default overlay network, you can visit any node on port 8088 to see the NGINX welcome message.

## Swarm Stacks: Production Grade Compose

- Stacks accept compose files as their declarative definition for services, networks and volumes.
- We use `docker stack deploy` rather than `docker service create`
- Stacks manages all those objects for us, including overlay network per stack. Adds stack name to start of their name.
- `docker-compose` CLI doesn't need on swarm server.

## Secrets Storage

- Easiest _secure_ solution for storing secrets in Swarm.
- Supports generic strings or binary content up to 500KB in size
- Doesn't require apps to be rewritten
- Only stored on disk on Manager Nodes
- Secrets are first stored in Swarm, then assigned to a Service
- Only containers in assigned Service(s) can see them
- `/run/secrets/<secret_name>`
- Local docker-compose can use file-based secrets, but not secure

```
cat pssql_user.txt
docker secret create psql_user psql_user.txxt
echo "myDBpassWORD" | docker secret create psql_pass -
docker secret ls
```

`for 05-example`

```
echo "oagy938hs" | docker secret create psql-pw -
docker stack deploy -c docker-compose.yml drupal

```

- when creating services add: `--secret psql_user -e POSTGRES_USER_FILE=/run/secrets/psql_user`

**in yml file**

```
secrets:
  psql_user:
    file: ./psql_user.txt
```
