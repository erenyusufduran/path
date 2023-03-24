# Container Lifetime & Persistent Data

- Containers are **usually** immutable and ephemeral
- _Immutable Infrastrucre:_ only re-deploy containers, never change
- This is the ideal scenario, but what about databases, or unique data?
- Docker gives us features to ensure there _seperation of concerns_
- This is known as _persistent data_
- Two ways: Volumes and Bind Mounts
- **Volumes:** Make special location outside of container UFS
- **Bind Mounts:** Link container path to host path

```
docker volume create
```

## Bind Mounting

- Maps a host file or directory to a container file or directory
- Basically just two locations pointing to the same files
- Again, skips UFS, and host files overwrite any in container
- Can't use in Dockerfile, must be at container run

```
run -v //c/Users/user_name/stuff:/path/container
```

## Named Volumes

- Database upgrade with containers

```
docker container run -d --name psql -v psql:/var/lib/postgresql/data postgres:latest

docker container logs -f psql
```
