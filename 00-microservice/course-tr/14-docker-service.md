<h1> Docker Service </h1>

Docker Swarm Cluster'da oluşturabileceğimiz en temel obje servislerdir.

Aslında yine container oluşturuyoruz, fakat Swarm Cluster içerisinde containerlara service diyoruz.

- <h3> Desired State </h3>

  - ozgurozturknet/alistirma:kirmizi isimli imajdan yaratılacak.
  - Sistem genelinde 10 container çalışacak.
  - abc networküne bağlı olacak ve 8080:80 public edilecek.
  - Eğer ben bu servisi güncellersem her güncelleme aynı anda 2 task üzerinde yürütülecek ve her güncelleme arasında 10 sn bekleyeceksin.

- <h3> Current State </h3>

  - Bu özelliklerle 10 container çalışıyor.

<br>
- Eğer Current State, Desired State'den farklı çalışıyor ise Swarm devreye giriyor ve iki state'i eşitlemeye çalışıyor.
 
---

<h2> Docker Service Mode </h2>

- <h3> Replicated </h3>

  - Oluşturmak istediğiniz servisin kaç replika içereceğini belirtirsiniz. Swarm uygun olan nodelar üstünde o sayıda replica oluşturur.
  - Varsayılan olan mod Replicated moddur.

- <h3> Global </h3>

  - Oluşturmak istediğiniz servisin kaç replika içereceğini belirtmezsiniz. Swarm altındaki her node üstünde 1 replica oluşturulur.
  - Global modda oluşturmak için

        docker service create gib --mode=global nginx

    şeklinde yazmak gerekir.

---

task = container

    docker service create nginx
    docker service create --name test nginx
    docker service scale test=3
    docker service ps test
    docker service logs test
