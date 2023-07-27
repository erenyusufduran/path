const { Kafka } = require("kafkajs");

async function createProducer() {
  try {
    const kafka = new Kafka({
      clientId: "kafka_pub_sub_client",
      brokers: ["0.0.0.0:9092"],
    });

    const producer = kafka.producer();
    console.log("Kafka Producer connection");
    await producer.connect();
    console.log("Kafka Producer connection succeed!");

    const messageResult = await producer.send({
      topic: "rawVideoTopic",
      messages: [
        {
          value: "Video uploaded",
          partition: 0,
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
