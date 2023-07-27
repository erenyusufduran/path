const { Kafka } = require("kafkajs");

async function createConsumer() {
  try {
    const kafka = new Kafka({
      clientId: "kafka_log_store_client",
      brokers: ["0.0.0.0:9092"],
    });

    const consumer = kafka.consumer({ groupId: "log_store_consumer_group" });
    console.log("Kafka Consumer connection");
    await consumer.connect();
    console.log("Kafka Consumer connection succeed!");

    await consumer.subscribe({
      topic: "LogStoreTopic",
      fromBeginning: true,
    });
    await consumer.run({
      eachMessage: async (result) => {
        console.log(`Received Message: ${result.message.value}, P: => ${result.partition}`);
      },
    });
  } catch (error) {
    console.error(error);
  }
}

createConsumer();
