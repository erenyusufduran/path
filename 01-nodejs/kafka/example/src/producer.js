const { Kafka } = require("kafkajs");

const topicName = process.argv[2] || "Logs2";
const partition = process.argv[3] || 0;

async function createProducer() {
  try {
    const kafka = new Kafka({
      clientId: "kafka_example_1",
      brokers: ["0.0.0.0:9092"],
    });

    const producer = kafka.producer();
    console.log("Kafka Producer connection");
    await producer.connect();
    console.log("Kafka Producer connection succeed!");

    const messageResult = await producer.send({
      topic: topicName,
      messages: [
        {
          value: "This is a test log heey message.",
          partition,
        },
      ],
    });
    console.log("Message sent", JSON.stringify(messageResult));
    await producer.disconnect();
  } catch (error) {
    console.error(error);
  }
}

createProducer();
