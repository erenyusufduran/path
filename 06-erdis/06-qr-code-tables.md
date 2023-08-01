# AX TABLES

| <font size="4px">**Contents**</font>                          |
| :------------------------------------------------------------ |
| 1. [**RBOSpecialGroupItems**](#rboSpecial)                    |
| 2. [**ETGGtipInfo**](#etgGtip)                                |
| 3. [**CisPOLineTable**](#cisPOLine)                                |
| 4. [**CLSQRGtinTable** (1. Custom Table)](#firstCustomTable)  |
| 5. [**CLSQRCodeTable** (2. Custom Table)](#secondCustomTable) |

**RBOSpecialGroupItems** tablosu; **CisPOLineTable** tablosu ile *JOIN* ediliyor. Bu iki tablonun birleştirilmesiyle QR status'ü olanlar (QR alınması gerekenleri) bir *batch* yardımıyla **CLSQRGtinTable** yani **1. Custom Table**'a atılıyor. 

- **CisPOLineTable**'daki hangi status QR kodun gerekip gerekmeyeceğine karar veriyor?
- Burada çalışan SP'nin ismi nedir?

Sonrasında Rusya'ya gidecek olan data **CLSQRGtinTable** tablosuna atılıyor. `STATUS`'e bakılarak Rusya tarafına gönderiliyor.

- Status altında 3 tane değer bulunabiliyor. Bunlar; 0, 1 ve 2. Hangi değer neyi gösteriyor? Şuanlık anladığım;
  - 0 - Gönderilmedi
  - 1 - Requested (Rusya'ya gönderildi)
  - 2 - Received (Cevap alındı) 
    - Veya Etiketçi firmaya gönderildi. (2. Custom table'da (**CLSQRCodeTable**) bir status bulunmuyor)

Buradan sonra Rusya dönüş yapıyor. Rusya'nın dönüşü **CLSQRCodeTable** tablosuna yani **2. Custom Table**'a atılıyor. Burada herhangi bir barcode, PO bulunmuyor direkt olarak etiketçiye gidecek olan matrix code bulunuyor. 

- Bunları barcode, po ile birlikte tutabiliyor muyuz ve tutarsak bu dataya tutacağımız po-barcode birleşimini key olarak atayarak ulaşabilir miyiz? --> array olarak response olabilir.
- Etiketçi firmaya bunları manuel olarak gönderiyoruz, orada bir servis yazabilir miyiz?

---

- **RBOSpecialGroupItems** içerisindeki;
  -  `ITEMID`, 
  -  `ETGCONFIGID`, 
  -  `ETGSTYLEID`, 
  -  `ETGINVENTCOLORID`, 
  -  `ETGGTIPINFOID` alanları bizim için önemli olan alanlar. 
- Bu alanlar **CisPOLineTable** içerisinde;
  - `ITEMID`,
  - `CONFIGID`,
  - `INVENTSTYLEID`,
  - `INVENTCOLORID` olarak bulunuyorlar.
- **ETGGtipInfo** içerisindekii önemli alanlar ise;
  - `GTIPINFOID`
  - `USEQRCODE` alanları.

**RBOSpecialGroupItems** içerisindeki `ETGTIPINFOID` aynı zamanda **ETGGtipInfo** tablosunda `GTIPINFOID` olarak bulunmakta. Biz burada RBOSpecialGroupItems'tan ETGGtipInfo'ya gidiyoruz ve aynı *`GTIPINFOID`*'ye sahip olan dökümana bakıp, bu dökümanın `USEQRCODE` alanı 0 mı 1 mi diye bakıyoruz. 

1 ise **CLSQRGtinTable** adlı tabloda bunları topluyoruz. Rusya'ya gitmesi gereken dökümanları görebiliyoruz.

## <a id="rboSpecial">**RBOSpecialGroupItems**</a>

```
- GROUP_ID
- ITEM_ID
- ETG_INVENT_COLOR_ID
- ETG_STYLE_ID
- ETG_CONFIG_ID
- ETG_STYLE_NAME
- ETG_GTIP_INFO_ID
- ETG_ISC_OATED
- ETG_OUTLET
- ETGC_OLLECTION_IN_USE
- PLMPSF
- CLS_CANCELLED
- CLS_ONAY_TARIHI
- DATE_OF_SALES_SEASON
- DATA_AREA_ID
- REC_VERSION
- PARTITION
- REC_ID
```

## <a id="etgGtip">**ETGGtipInfo**</a>

```
- GTIP_INFO_ID
- DATA_AREA_ID
- REC_VERSION
- PARTITION
- REC_ID
- USE_QR_CODE
- USE_QR_CODE_BELARUS
- QR_CODE_CONTROL_WMS_RU
- QR_CODE_CONTROL_WMS_BY
```

## <a id="cisPOLine">**CisPOLineTable**</a>

```
- THEME_ID
- ITEM_ID
- INVENT_COLOR_ID
- INVENT_SIZE_ID
- PURCH_POOL_ID
- DELIVERY_DATE
- MODEL_NUM
- IS_SIZE_PO
- ASSORTMENT_GROUP_ID
- PURCH_PRICE
- PURCH_QTY_ORDERED
- LDP_PRICE
- PSF_PRICE
- PRICE_UNIT
- PAYMTERMID
- ADDRESS_COUNTRY_REGION_ID
- SHIP_TO
- INVENT_LOCATION_ID
- PO_ID
- PO_STATUS
- DELIVERY_MODE
- ORDER_PHASE_ID
- HIT_ID
- RFQ_LINE_NUM
- MRCH_COLLECTION_ID
- INVENT_STYLE_ID
- CONFIG_ID
- QTY_IN_ASSORTMENT
- LOT_QTY
- LOCAL_LPD
- LOCAL_CURRENCY
- LOADING_TYPE
- MIN_DELIVERY_TOL_DAYS
- REF_REC_ID
- FABRIC_COMPOSITION_ID
- TRANSFER_REC_ID
- DATA_AREA_ID
- REC_VERSION
- PARTITION
- REC_ID
- CLS_IMALAT_STATUS
```

## <a id="firstCustomTable">**CLSQRGtinTable *(1. Custom Table)***</a>

```
- CONFIG_ID
- GTIN_KEY
- INVENT_COLOR_ID
- INVENT_SIZE_ID
- INVENT_STYLE_ID
- ITEM_ID
- PO_ID
- PURCH_POOL_ID
- QR_CODE_CONTROL
- QTY
- DATA_AREA_ID
- REC_VERSION
- PARTITION
- REC_ID
- STATUS
```

## <a id="secondCustomTable">**CLSQRCodeTable *(2. Custom Table)***</a>

```
- DATA_AREA_ID
- REC_VERSION
- PARTITION
- REC_ID
- S58SKU
- S58_QRCODE
- S58QR2
- S58_COUNTRY_REGION
```