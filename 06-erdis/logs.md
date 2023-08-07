1. **serviceName: null**
   1. ns2:Server: java.lang.NullPointerException
      - /usr/src/app/src/schedulers/eDispatch/sentEDispatch.js
   2. Cannot read properties of undefined (reading 'startsWith')
       - /usr/src/app/src/schedulers/eDispatch/sentEDispatch.js
2. **erdis-pos-worker**
   1. EREQUEST - Transaction (Process ID 431) was deadlocked on lock resources with another process and has been chosen as the deadlock victim. Rerun the transaction.
      - /usr/src/app/src/schedulers/retailSales.js
3. **erdis-store-worker**
   1. EREQUEST - Cannot insert duplicate key row in object 'dbo.CLSINVENTTRANSFERBOXTABLEACT' with unique index 'I_105365INVENTTRANSFERREFRECIDX'. The duplicate key value is (5637144576, cl1, 5640429637, K4211779400).
      - /usr/src/app/src/schedulers/jobs/sendData/shippingReceipt.js 
4. **erdis-wms-__-worker**
   1. StatusCodeError - 400 - {} - /usr/src/app/src/schedulers/stockUpdate.js
5. **erdis-pos-ro-service**
   1. TopicsNotExistError - The topic(s) ERPOS_QR_BARCODE do not exist
      - /usr/src/app/src/services/rboSpecialGroupItem.js
6. **erdis-wms-ma-worker - ReferenceError**
   -  i is not defined
   -  /usr/src/app/src/schedulers/jobs/sendData/shippingReceipt.js