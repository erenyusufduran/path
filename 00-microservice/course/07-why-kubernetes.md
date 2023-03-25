# Kubernetes

Kubernetes is a popular contanier ochestrator. Container Orchestration = Make many servers act like one.

- Released by Google in 2015, maintained by large community.

Kubernetes essentially is a set of APIs that run on apps in containers to manage a set of servers and then execute your containers on Docker, by default. It can run other container runtimes that aren't Docker, like conteinerd. By default, right now, it runs on top of Docker. So it's not getting rid of your container runtime. It's just a series of containers on top of that manage the **multi-node** system that it's controlling.

- Runs on top of Docker (usually) as a set of API's in containers.
- Provided API/CLI to manage containers across servers.
- Many clouds provide it for you.
- Many verdors make a _distribution_ of it.

## Why Kubernetes?

One of the simple formulas for whether or not to use _orchestration_ are taking the number of servers that to need for particular environment, and then the change rate of it's applications, or the environment itself, and the multiplication of those two really equals the benefit of orchestration.

- Servers + Change Rate = Benefit of Orchestration

When you're starting out, you may only need a single server, or just a few servers, and if you're not changing your applications very often, let's say you're only changing them once a month or less, then orchestration, and the effort involved in deploying it, managing it, securing it, may be unnecessary at your state. Especially if you're a solo developer just a very small team.

---

When you choose your orchestrator, if you'll choose Kubernetes, then you should decide which distribution:

- cloud
- self-managed (Docker Enterprise, Rancher, OpenShift, Canonical, VMware PKS)
- You want to use one of these distribution, because they guarantee that the API from Kubernetes is used directly, and that it's fully supported.

## Kubernetes vs. Swarm

As a baseline here, both tools that solve similar problems.

- They are both container orchestrators that run on top container runtime.
- Both are solid platform with vendor backing.
- Swarm: Easier to deploy/manage.
- Kubernetes: More features and flexibility.

### Advantages of Swarm

- Comes with Docker, single vendor container platform.
- Easiest orchestrator to deploy/manage yourself.
- Follows 80/20 rule, 20% of features for 80% of use cases.
- Runs anywhere Docker does:
  - local, cloud, datacenter
  - ARM, Windows, 32-bit
- Secure by default
- Easier to troubleshoot

### Advantages of Kubernetes

- Clouds will deploy/manage Kubernetes for you
- Infrastructure vendors are making their own distributions.
- Widest adoption and community
- _Flexible:_ Covers widest set of use cases.
- **Kubernetes first** vendor support
- No one ever got fired for buying IBM
  - This saying was popular decades ago when IBM was the largest vendor for computing and outsourcing you hardware, and your mainframes, and your PCs, and there was this whole time where they were really killing it in the marketplace.
  - Essentially, if you couldn't make a desicion on which vendor you wanted to go with. If you just went the safe way, you would be going with IBM.
- Picking solutions isn't 100% rational.
- Trendy, will benefit your career.
