<h1> Docker Compose </h1>

Şuana kadar Docker Containerları tek birer container olarak ele aldık. Artık sistemler birbirleriyle haberleşmek durumundadır, basit uygulamalar bile frontend, backend olmak üzere iki farklı containerdan oluşuyorlar. Hele ki microservice'lerden bahsediyorsak 10'larca containerlar birlikte çalışırlar.

- <b>Compose</b>, çoklu Docker uygulamalarını tanımlamak ve çalıştırmak için bir araçtır. Compose ile uygulamamızın hizmetlerini yapılandırmak için bir YAML dosyası kullanırız. Ardından, tek bir komutla tüm hizmetleri ayağa kaldırabiliyoruz.

- Production için uygun olmasa da localde çok işimize yarıyor, Production kısmında farklı araçlar kullanacağız.
