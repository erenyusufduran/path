const { Kafka } = require("kafkajs");

async function createConsumer() {
  try {
    const kafka = new Kafka({
      clientId: "kafka_pub_sub_client",
      brokers: ["0.0.0.0:9092"],
    });

    const consumer = kafka.consumer({ groupId: "hd_4k_8k_consumer_group" });
    console.log("Kafka Consumer connection");
    await consumer.connect();
    console.log("Kafka Consumer connection succeed!");

    await consumer.subscribe({
      topic: "rawVideoTopic",
      fromBeginning: true,
    });
    await consumer.run({
      eachMessage: async (result) => {
        console.log(`Received Video: ${result.message.value}_4k_8k_encoder`);
      },
    });
  } catch (error) {
    console.error(error);
  }
}

createConsumer();
