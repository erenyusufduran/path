1. **erdis-pos-ro-worker**

   1. RequestError - EREQUEST - **Sürekli devam ediyor**.

      - Transaction (Process ID 176) was deadlocked on lock | communication buffer resources with another process and has been chosen as the deadlock victim. Rerun the transaction.
      - /usr/src/app/src/schedulers/retailSales.js

   2. RequestError - EREQUEST - **16/06'da başladı.**
      - Procedure or function 'GetQueue' expects parameter '@destinationId', which was not supplied.
        - /usr/src/app/src/schedulers/dataListener.js

---

2. **erdis-management-worker**
   1. Error - EPIPE - **Haziran 7, 9, 12, 13 ikişer kere**
      - This socket has been ended by the other party
      - /usr/src/app/src/schedulers/dataListenerHR.js
   2. RequestError - EREQUEST - **9, 12, 13 birer kere**
      - /usr/src/app/src/schedulers/dataListener.js

---

3. **erdis-store-worker**
   1. RequestError - EREQUEST - **Son 3 günde 10 civarı**
      1. Cannot insert duplicate key row in object 'dbo.CLSINVENTTRANSFERBOXTABLEACT' with unique index
         - /usr/src/app/src/schedulers/jobs/sendData/shippingReceipt.js
      2. Error: connect ECONNREFUSED 10.105.162.91:443 - **6 ve 12 Haziran**
         - /usr/src/app/src/schedulers/jobs/sendData/shippingReceipt.js
   2. MongooseServerSelectionError - **9 ve 12'si**
      - /usr/src/app/src/schedulers/shippingReceiptStatus.js

---

4. **erdis-store-service** - **16 Haziran Sabah 5.35**
   - TopicsNotExistError - The topic(s) STORE_CLEARBOXES do not exist
   - /usr/src/app/src/services/clearBoxes.js

---

4. **erdis-wms-ma-worker**
   1. StatusCodeError - **Her gün tam 12'de**
      - 400 - {"errno":-104,"code":"ECONNRESET","syscall":"read"}
      - /usr/src/app/src/schedulers/stockUpdate.js

---

3. **ns2:Server:**
   - ettn boş olamaz.
   - dbc7f994-fb99-4975-909a-5b79cbf9a34a nolu yerelden alınan belge bulunamadı.
   1. Error
      - /usr/src/app/src/schedulers/eDispatch/sentEDispatch.js

---

4. **S:Server:**
   - Error
   - Could not open Hibernate Session for transaction; nested exception is org.hibernate.exception.JDBCConnectionException: Could not open connection

---

5. **read ECONNRESET**
   - Error - ECONNRESET
   - /usr/src/app/src/schedulers/eDispatch/sentEDispatch.js

---

6. **Invalid WSDL URL:** - **Cannot parse response**
   - /usr/src/app/src/schedulers/eDispatch/sentEDispatch.js
   - /usr/src/app/src/schedulers/eDispatch/freeReturnOrder.js
   - /usr/src/app/src/schedulers/eDispatch/answerOrder.js

---

7. - **The numerator data not found!** - **10binden fazla son 3 günde**
   - Error
   - /usr/src/app/src/schedulers/eDispatch/freeTransferOrder.js
