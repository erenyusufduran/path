<h1> DOCKER SWARM </h1>

Docker Swarm, Docker Engine'e entegre bir container orchestration çözümüdür. Tekrar bir kuruluma gerek yok. Bir Docker ana bilgisayar havuzunu tek bir sanal ana bilgisayara dönüştürür.

<h2> Swarm Manager ve Worker Node </h2>

- Docker swarm komutunu verdiğiniz anda, engine modundan swarm moduna geçirir.

<h3> Raft Consensus Algorithması ve Manager Node </h3>

- Swarm b irden fazla manager node destekler ve bu sayede yüksek erişilebilirlik sağlar. Bir managerda sorun olursa diğer manager devreye girer ve iş yürümeye devam eder.
- Bu manager nodelardan yalnızda 1 tanesi lider olarak seçilidir ve tüm yönetim lider tarafından yapılır. Diğer bmanager nodelar pasif durumdadır. Siz pasif manager node'lardan birine bir komut verip iş yapmasını isterseniz bu sadece proxy görevi görür ve komutu lider node'a iletir.
- Ortamda birden fazla manager olduğu durumlarda bir adet lider seçilmelidir. Swarm bunu otomatik halleder ve bunun için Raft Consensus algoritmasını kullanır. Raft algoritması lider seçimi için kuralları belirler. Örneğin ortamda 5 manager olan bir durumda lider node bir şekilde erişilemez hale gelirse belirli bir zaman sonra kalan 4 node kendi aralarında oylama yaparak bir lider belirler. Artık Swarm Cluster'ın yönetimi bu yeni lider tarafından sağlanır.
- Raft Consensus Algoritması maksimum (N-1)/2 sayıda replikanın devre dışı kalmasını tolere eder. Örneğin 5 swarm manager olarak kurgulanan bir yapıda 2 manager devre dışı kalırsa kalan 3 node kendi aralarında anlaşarak çalışmaya devam edecektir. Fakat 3 node devre dışı kalırsa kalan 2 node çoğunluğu sağlayıp anlaşamayacakları için sorun çıkacak ve management altyapısı çalışmayacaktır.
- Raft algoritmasının düzgün çalışabilmesi ve lider seçiminin sorunsuz olabilmesi için ortamın her zaman tek sayıda manager nodela kurulmuş olması gerekir. Bu nedenle Docker Swarm 1 ya da 3 ya da 5 ya da 7 manager ile kurulmalıdır. 9 - 11 diye devam edebilir ama 7'den fazla manager olduğu durumlarda ortamda daha fazla sorun çıkacaktır.
