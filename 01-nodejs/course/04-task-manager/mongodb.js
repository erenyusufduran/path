const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://localhost:27017/";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Ubanle to connect to database!");
    }

    const db = client.db(databaseName);

    db.collection("users").insertOne({
      name: "Eren",
      age: 21,
    });
  }
);
