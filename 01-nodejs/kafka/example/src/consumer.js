const { Kafka } = require("kafkajs");

const topicName = process.argv[2] || "Logs2";

async function createConsumer() {
  try {
    const kafka = new Kafka({
      clientId: "kafka_example_1",
      brokers: ["0.0.0.0:9092"],
    });

    const consumer = kafka.consumer({ groupId: "example_1_cg_1" });
    console.log("Kafka Consumer connection");
    await consumer.connect();
    console.log("Kafka Consumer connection succeed!");

    await consumer.subscribe({
      topic: topicName,
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
