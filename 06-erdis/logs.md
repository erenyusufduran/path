1.  erdis-management-worker
    1. RequestError - EREQUEST **18 Haziran'dan 20 Haziran'a kadar 150 200 kere**
       - Cannot continue the execution because the session is in the kill state.
       - /usr/src/app/src/schedulers/dataListener.js
    2. EPIPE **19 ve 20'sinde 2'şer kere**
       - This socket has been ended by the other party
       - /usr/src/app/src/schedulers/dataListenerHR.js
    3. ELOGIN **20 Haziran'da 8 kere**
       - Login failed for user 'axintegration'. Reason: The account is disabled.
       - /usr/src/app/src/schedulers/dataListener.js
2.  erdis-wms-ma-worker
    1. StatusCodeError **devam ediyor**
       - 400 - {"errno":-104,"code":"ECONNRESET","syscall":"read"}
       - /usr/src/app/src/schedulers/stockUpdate.js
    2. TypeError **20 Haziran'da bir kere**
       - wmsModels[_wmsName] is not a function
       - /usr/src/app/src/helpers/apiQueue.js
3.  erdis-pos-worker
    1. RequestError - EREQUEST **20 Haziran'da bir kere**
       - Cannot continue the execution because the session is in the kill state.
       - /usr/src/app/src/schedulers/retailSales.js
    2. ConnectionError - ELOGIN **20 Haziran'da 30 civarı**
       - Login failed for user 'erdis'. Reason: The account is disabled.
       - /usr/src/app/src/schedulers/retailSales.js
       - /usr/src/app/src/schedulers/productReview.js
4.  erdis-store-worker
    1. ConnectionError - ELOGIN **20 Haziran'da 37 kez**
       - Login failed for user 'erdis'. Reason: The account is disabled.
       - /usr/src/app/src/schedulers/shippingReceiptStatus.js
    2. MongooseServerSelectionError **20 Haziran'da 2 kere**
       - connection timed out
       - /usr/src/app/src/schedulers/boxPicture.js
5.  erdis-wms-ua-worker
    1.  RequestError - EREQUEST **1 Haziran'da çok fazla vermişti, sonrasında hiç çıkmamıştı. 21 Haziran'da bir kere daha log atmış. Hala çözülmedi.**
        - While reading current row from host, a premature end-of-message was encountered--an incoming data stream was interrupted when the server expected to see more data. The host program may have terminated. Ensure that you are using a supported client application programming interface (API).
        - /usr/src/app/src/schedulers/jobs/sendData/shippingReceipt.js
6.  erdis-middleware-worker
    1. ConnectionError - ELOGIN **20'sinde 50'den fazla sayıda log.**
       - Login failed for user 'erdis'. Reason: The account is disabled.
       - /usr/src/app/src/schedulers/jobs/getData/storeTransfer.js
       - /usr/src/app/src/schedulers/price.js
7.  erdis-pos-ro-worker - RequestError - EREQUEST - devam ediyor.
8.  NO SERVICE - The numerator data not found! - /usr/src/app/src/schedulers/eDispatch/freeTransferOrder.js - devam ediyor.
