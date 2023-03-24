# Images

- App binaries and dependencies
- Metadata about the image data and how to run the image
- **Official Definition:** _An image is an ordered collection of root filesystem changes and the corresponding execution parameters for use within a container runtime._
- Not a complete OS. No kernel, kernel modules (e.g. drivers)
- Small as one file (your app binary) like a golang static binary
- Big as a Ubuntu distro with apt, and apache, PHP, and more installed

```
docker pull nginx:version
docker history nginx:latest
docker image inspect mysql
```
