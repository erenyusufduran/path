const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://localhost:27017/";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log("Ubanle to connect to database!");
  }

  const db = client.db(databaseName);

  db.collection("users")
    .deleteMany({
      age: 23,
    })
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

  db.collection("tasks")
    .deleteOne({ description: "Clean the house" })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
});
