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
