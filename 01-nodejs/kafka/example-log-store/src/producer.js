const { Kafka } = require("kafkajs");
const logData = require("../system-logs.json");

async function createProducer() {
  try {
    const kafka = new Kafka({
      clientId: "kafka_log_store_client",
      brokers: ["0.0.0.0:9092"],
    });

    const producer = kafka.producer();
    console.log("Kafka Producer connection");
    await producer.connect();
    console.log("Kafka Producer connection succeed!");

    const messages = logData.map((item) => {
      return {
        value: JSON.stringify(item),
        partition: item.type === "system" ? 0 : 1,
      };
    });

    const messageResult = await producer.send({
      topic: "LogStoreTopic",
      messages,
    });
    console.log("Message sent", JSON.stringify(messageResult));
    await producer.disconnect();
  } catch (error) {
    console.error(error);
  }
}

createProducer();
