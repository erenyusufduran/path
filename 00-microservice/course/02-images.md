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
docker image push _image_name_
docker logout

The -f command is used to specify a dockerfile, with an alias of --file
```

- **Official Repositories**: They live at the _root namespace_ of the registry, so they don't need account name in front of repo name.
- **Package Manager**: PM's like apt and yum are one of the reasons to build containers FROM debian, ubuntu, fedora or CentOS

**01-example**

```
docker image build -t nginx-with-html .
docker container run -p 80:80 --rm nginx-with-html
```

```
docker image prune - to clean up just "dangling" images
docker system prune - will clean up everything
```
