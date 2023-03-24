<h1> CONTAINER </h1>

- Bilgisayarı aldık, işletim sistemimizi kurduk. Linux kuralım. Gerekli kütüphaneleri ekleyelim. Bunun üzerine app1 adında uygulama kuralım. Buna app2 kuramıyoruz, çünkü çatışmasını istemiyoruz. Çünkü birbirlerinden izole çalışması gerekiyor.

- Başka bir bilgisayarı aldık, bu sefer işletim sistemi kurmayıp, sanallaştırma yazılım kuruyoruz. Ardından da sanal makine üzerine linux kuruyoruz. Buna uygulama kuruyoruz, sonra yeni bir makine oluşturup yeni bir uygulama oluşturabiliyoruz.

> Bu çözüm daha minimal bir kaynak israfı sağlasa da aslında burada da bir kaynak israfı söz konusu. Yeni işletim sistemleri kendi işletim sistemlerini yönetmek için bile bir kaynak israfı olacak.

İşte bunlara çözüm olacak bir teknoloji de 2010'lara doğru hayatımıza girdi.

    Sorumuz şuydu: Acaba biz bu uygulamaları aynı sistem üzerinde birbirinden izole çalıştırabilir miyiz?

- Bu sonuca yanıt olarak bir yöntem bulundu ve adına <font size="4">container</font> diyoruz.

- Linux 1991'den beri geliştiriliyor. Bu çekirdeğe namespaces adı verilen bir özellik eklendi. namespace'ler sayesinde iki ayrı process'i birbirinden bağımsız çalıştırabiliyoruz.

- Control groups da kaynak kullanımını sınırlıyor ve process'ler birbirlerinden bağımsız çalışabiliyorlar.

2013 senesinden itibaren ise bu yapı değişti ve yeni bir sistem geldi.
