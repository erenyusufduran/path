const { Kafka } = require("kafkajs");

async function createTopic() {
  try {
    const kafka = new Kafka({
      clientId: "kafka_log_store_client",
      brokers: ["0.0.0.0:9092"],
    });

    const admin = kafka.admin();
    console.log("Kafka Broker connection is begin");
    await admin.connect();
    console.log("Kafka Broker connection succeed!");

    await admin.createTopics({
      topics: [
        {
          topic: "LogStoreTopic",
          numPartitions: 2,
        },
      ],
    });
    console.log("Topic is created!");
    await admin.disconnect();
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
}

createTopic();
