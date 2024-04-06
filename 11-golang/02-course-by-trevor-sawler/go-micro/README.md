go-micro is subfolder, but there are 5 services and frontend.

Each microservice has dockerfile and they are in a docker-compose file.

If you want to start project:

```sh
docker-compose up -d # To start services
make start # To start frontend
```