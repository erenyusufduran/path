So containers should have only one responsibility. But what about the use case I mentioned before, where you have a web server with a log processor? Actually, that's one of the exact problems that the sidecar pattern aims to resolve.

Using the sidecar pattern means extending the behavior of a container. In our example of the log processor for the web server, the log processor could be a different container reading logs from the web server.

The web server will need to write those logs to a volume. In Docker, volumes can be shared with other containers. It's preferable to have this separation because it makes packaging, deployment, resiliency, and reuse easy—and also because not all containers will need or use the same resources.

With this pattern, you're decoupling your system in different parts. Each part has its own responsibilities, and each solves a different problem. You're eating the elephant in small chunks.

----

