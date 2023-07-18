10'undan beri olanları taradım.
1. serviceName: null - Error
   - errorMessage: EF0153: [EF0153] Kontör yetersiz
   - /usr/src/app/src/schedulers/eDispatch/freeTransferOrder.js
   - methodName: finish
2. serviceName: null- Error
   - Cannot parse response
   - /usr/src/app/src/schedulers/eDispatch/sentEDispatch.js
3. serviceName: null - Error
   - Error: Invalid WSDL URL: https://efaturaconnector.efinans.com.tr/connector/ws/connectorService?wsdl
   - /usr/src/app/src/schedulers/eDispatch/sentEDispatch.js
4. serviceName: erdis-management-worker - RequestError - EREQUEST
   - Transaction (Process ID 254) was deadlocked on lock resources with another process and has been chosen as the deadlock victim. Rerun the transaction.
   - /usr/src/app/src/schedulers/dataListener.js
5. serviceName: erdis-store-worker - RequestError - EREQUEST
   * Cannot insert duplicate key row in object 'dbo.CLSINVENTTRANSFERBOXTABLEACT' with unique index 'I_105365INVENTTRANSFERREFRECIDX'. The duplicate key value is (5637144576, cl1, 5640402504, K4211750184).
   * /usr/src/app/src/schedulers/jobs/sendData/shippingReceipt.js
6. serviceName: erdis-wms-ma-worker - StatusCodeError
   - 400 - {"errno":-104,"code":"ECONNRESET","syscall":"read"}
   - /usr/src/app/src/schedulers/stockUpdate.js
7.  serviceName: erdis-store-worker - MongooseServerSelectionError
   -  connection timed out
   -  /usr/src/app/src/schedulers/shippingReceiptStatus.js
8. erdis-wms-ua-worker - erstore-lf-worker 
   -  Failed to connect to 10.0.8.113:1433 - Could not connect (sequence)
9. erdis-data-management
   1.  Cannot read property 'topicName' of undefined - "5639688500,5639688502,5639688503,5639688505,5639688507" - TypeError
      - /usr/src/app/src/schedulers/management/jobs/getData/eCommerceOrder.js
      - getQueue
   2.  TypeError - Object.hasOwn is not a function
       - /usr/src/app/src/schedulers/management/dataListenerHR.js  
       - DataListener.onTick
       - Cannot read property 'postalCode' of undefined
       - Cannot read property 'toLocaleUpperCase' of null
   3. RequestError - EREQUEST 
       - Incorrect syntax near ','.
       - Error converting data type varchar to bigint.
       - /usr/src/app/src/schedulers/management/dataListenerHR.js - handleError
10. erdis-pos-ro-worker RequestError EREQUEST