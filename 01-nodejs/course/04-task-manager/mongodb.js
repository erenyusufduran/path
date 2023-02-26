const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://localhost:27017/";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log("Ubanle to connect to database!");
  }

  const db = client.db(databaseName);

  db.collection("users")
    .updateOne(
      {
        _id: new ObjectID("63fb86709bbeb24adc7f8fd9"),
      },
      {
        $set: {
          name: "Ako",
        },
        $inc: {
          age: 1,
        },
      }
    )
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

  db.collection("tasks")
    .updateMany(
      {
        completed: false,
      },
      {
        $set: {
          completed: true,
        },
      }
    )
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
});
