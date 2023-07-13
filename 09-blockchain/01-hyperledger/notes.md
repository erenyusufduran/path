kullanıcı api-gateway'e geliyor ordaki requestleri dağıtıyor.

pos-other repomuz var oraya gelicek. pos other'da api yazılıcak.

bu api gidip => middleware (yeni haliyle data-management)'tan data alıcak sonrasında bu datalar günün sonunda api-gateway'e dönücek.

api-gateway'i de pos-other'ı da api kısmını yazabilirsin ama api-gateway'den pos-other'a istek atmalısın

erdis-gateway, erdis-pos-other

**erdis-gateway**

- routes içinde master data altında olan bir şeye
