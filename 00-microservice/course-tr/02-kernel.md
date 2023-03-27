# KERNEL

İşletim sistemi kullanıcının bir bilgisayardaki uygulamaları çalıştırmasını sağlayan ana yazılımdır.

Normalde bir uygulama işletim sistemi olmadan da çalışır, ama ne yapması gerektiğiyle ilgili tüm machine code'ların yazılmış olması gerekir. İşletim sistemi ise bu işi kolaylaştırır.

<h2> İşletim Sistemi Bileşenleri </h2>

3 ayrı bileşenden oluşur.

1. Kullanıcı Arayüzü

2. Uygulama

3. Kernel

> Özetle işletim sistemi; ana işi yapan bir çekirdek, kernelin üstüne kullanıcıların etkileşime girebileceği arayüz uygulaması. Yanında kullanıcıların ihtiyacı olan uygulamaların paketlenmiş hali olan sistemdir.

Bir bilgisayarı çalıştırdığınız zaman BIOS devreye girer. Donanımı test eder. Depolama birimlerine bakar ve ufak bir uygulamayı yükler. O uygulama da kerneli yükler.

- Kernel aslında işletim sisteminin kendisidir diyebiliriz.

İşletim sistemi çekirdeği, fiziksel katman ile uygulamalar arasında bir köprüdür. Uygulama disk ile iletişime geçmek istediğinde, kernela istek atar ve kernel diske ulaşır. Bu yüzden uygulamalar tarafında donanımla iletişim kurmak zorunda kalmayız.
