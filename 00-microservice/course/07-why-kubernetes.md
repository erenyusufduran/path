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
