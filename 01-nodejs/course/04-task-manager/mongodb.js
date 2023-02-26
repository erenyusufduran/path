const { MongoClient, ObjectID } = require("mongodb");

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
    // db.collection("users").findOne(
    //   { _id: new ObjectID("63fb86709bbeb24adc7f8fd8") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(user);
    //   }
    // );

    db.collection("users")
      .find({ age: 21 })
      .toArray((error, users) => {
        console.log(users);
      });
  }
);
