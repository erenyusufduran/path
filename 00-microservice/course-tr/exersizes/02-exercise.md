- `docker network create --driver=bridge --subnet=10.10.0.0/16 --ip-range=10.10.10.0/24 --gateway=10.10.10.10 <network-name>`
  - kullanıcı tanımlı bir network olacağı için bridge olmalı
  ***
- `docker network inspect <network-name>`
  ***
- `docker container run -d --name <cont-name> --net <network-name> -p 8080:80 <image-name>`
  ***
- `docker logs <cont-name>`
  - `-f` tagi ekleseydik follow modunda çalışırdı yani bir işlem gerçekleştiğinde logda görünürdü.
  ***
- `docker container run -dit --name <cont-name> <image-name> sh`
  ***
- `docker network connect <network-name> <cont-name>`
  - container'ı network'e bağlama
  ***
- `docker attach <cont-name>`
  - container'a bağlanma
  - `ping web1` dediğimiz zaman pingleyebiliriz, çünkü ikisi de aynı network'e bağlı
  ***
- `docker container run -d --name websrv --net alistirma-agi -p 80:80 --cpus="2" ozgurozturknet/webkayit --env-file .\env.list`
  - websrv adında container
  - networke bağla
  - 80 portunda
  - Maks 2 logical CPU
  - env.list, container'ın environment variable'ı.
  ***
- `docker container run -d --name mysqldb --env-file .\envmysql.list --net alistirma-agi --memory=1g ozgurozturknet/webdb`
  - mysqldb adında container
  - networke bağla
  - Memory 1GB
  - envmysql.list, env variable
  ***
