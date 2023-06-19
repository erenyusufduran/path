1. erdis-wms-eg-worker
   1. RequestError - 16'sında bir kere
      - Error: ESOCKETTIMEDOUT
      - /usr/src/app/src/schedulers/stockUpdate.js
   2. TypeError - 17'sinde 20 kere almışız
      - Cannot read property 'assormentBarcodeLines' of undefined, Cannot read property 'length' of undefined
      - /usr/src/app/src/schedulers/jobs/sendData/shippingOrder.js

---

2. erdis-store-worker
   1. RequestError - EREQUEST
      - Cannot insert duplicate key row in object 'dbo.CLSINVENTTRANSFERBOXTABLEACT' with unique index 'I_105365INVENTTRANSFERREFRECIDX'. The duplicate key value is (5637144576, cl1, 5640371842, K4211623144).
      - /usr/src/app/src/schedulers/jobs/sendData/shippingReceipt.js

---

3. erdis-management-worker
   1. Error - EPIPE - Birkaç günde bir ikişer kere.
      - Socket.writeAfterFIN
      - This socket has been ended by the other party
      - /usr/src/app/src/schedulers/dataListenerHR.js
   2. RequestError - EREQUEST - 16'sından 18'ine 10 civarında.
      - Transaction (Process ID 234) was deadlocked on lock resources with another process and has been chosen as the deadlock victim. Rerun the transaction.
      - /usr/src/app/src/schedulers/dataListener.js

---

4. erdis-wms-ma-worker
   1. StatusCodeError - Her gün 12'de gelmeye devam ediyor.
      - 400 - {"errno":-104,"code":"ECONNRESET","syscall":"read"}
      - /usr/src/app/src/schedulers/stockUpdate.js
   2. RequestError - 17'sinde 1 kere oluşmuş.
      - Error: ESOCKETTIMEDOUT
      - /usr/src/app/src/schedulers/stockUpdate.js
