# Apache Kafka

Apache Kafka is an open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications.

---

## Why Kafka

Kafka has numerous advantages. Today, Kafka is used by over 80% of the Fortune 100 across virtually every industry, for countless use cases big and small. It is the de facto technology developers and architects use to build the newest generation of scalable, real-time data streaming applications. While these can be achieved with a range of technologies available in the market, below are the main reasons Kafka is so popular.

- **High Throughput**
  Capable of handling high-velocity and high-volume data, Kafka can handle millions of messages per second.
- **High Scalability**
  Scale Kafka clusters up to a thousand brokers, trillions of messages per day, petabytes of data, hundreds of thousands of partitions. Elastically expand and contract storage and processing.
- **Low Latency**
  Can deliver these high volume of messages using a cluster of machines with latencies as low as 2ms.
- **Permanent Storage**
  Safely, securely store streams of data in a distributed, durable, reliable, fault-tolerant cluster.
- **High Availability**
  Extend clusters efficiently over availability zones or connect clusters accross geographic regions, making Kafka highly available and fault tolerant with no risk of data loss.

---

## How Kafka Works

Apache Kafka consist of a storage layer and a compute layer that combines efficient, real-time data ingestion, streaming data pipelines, and storage across distributed systems. In short, this enables simplified, data streaming between Kafka and external systems, so you can easily manage real-time data and scale within any type of infrastructure.

### Real-Time Processing at Scale

An data streaming platform would not be complete without the ability to process and analyze data as soon as it's generated. The Kafka Streams API is a powerful, lightweight library that allows for on-the-fly processing, letting you aggregate, create windowing parameters, perform joins of data within a stream, and more. Perhaps best of all, it is built as a Java application on top of Kafka, keeping your workflow intact with no extra clusters to maintain.

### Durable, Persistent Storage

An abstraction of a distributed commit log commonly found in distributed databases, Apache Kafka provides durable storage. Kafka can act as a _source of truth_, being able to distribute data across multiple nodes for a highly available deployment within a single data center or across multiple availability zones.

### Publish + Subscribe

At its heart lies the humble, immutable commit log, and from there you can subscribe to it, and publish data to any number of systems or real-time applications. Unlike messaging queues, Kafka is a highly scalable, fault tolerant distributed system, allowing it to be deployed for applications like managing passenger and driver matching at Uber, providing real-time analytics and predictive maintenance for British Gas' smart home, and performing numerous real-time services accross all of LinkedIn. This unique performance makes it perfect to scale from one app to company wide use.

---

## What is Kafka Used For?

Commonly used to build real-time streaming data pipelines and real-time streaming applications, today, there are hundreds of Kafka use cases. Any company that relies on, or works with data can find numerous benefits.

- **Data Pipelines**
  In the context of Apache Kafka, a streaming data pipeline means ingesting the data from sources into Kafka as it's created and then streaming that data from Kafka to one or more targets.
- **Stream Processing**
  Stream processing includes operations like filters, joins, maps, aggregations, and other transformations which enterprises leverage to power many use-cases. Kafka Streams is a stream processing library built for Apache Kafka enabling enterprises to process data in real-time.
- **Streaming Analytics**
  Kafka provides high throughput event delivery, and when combined with open-source technologies such as Druid can form a powerful Streaming Analytics Manages (SAM), Druid consumes streaming data from Kafka to enable analytical queries. Events are first loaded in Kafka, where they are buffered in Kafka brokers before they are consumed by Druid real-time workers.
- **Streaming ETL**
  Real-time ETL with Kafka combines different components and features such as Kafka Connect source and sink connectors to consume and produce data from/to any other database, application, or API, Single Message Transform (SMT) – an optional Kafka Connect feature, Kafka Streams for continuous data processing in real-time at scale.
- **Event-Driven Microservices**
  Apache Kafka is the most popular tool for microservices because it solves many of the issues of microservices orchestration while enabling attributes that microservices aim to achieve, such as scalability, efficiency, and speed. It also facilitates inter-service communication while preserving ultra-low latency and fault tolerance.

---

## Resource

- <a href="https://www.confluent.io/what-is-apache-kafka/">What is Apache Kafka</a>
