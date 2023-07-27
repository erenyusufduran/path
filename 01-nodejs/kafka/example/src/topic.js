const { Kafka } = require("kafkajs");

async function createTopic() {
  try {
    const kafka = new Kafka({
      clientId: "kafka_example_1",
      brokers: ["0.0.0.0:9092"],
    });

    const admin = kafka.admin();
    console.log("Kafka Broker connection is begin");
    await admin.connect();
    console.log("Kafka Broker connection succeed!");
    
    await admin.createTopics({
      topics: [
        {
          topic: "Logs",
          numPartitions: 1,
        },
        {
          topic: "Logs2",
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