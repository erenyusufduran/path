const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://eren123:eren123@taskmanager.jtjk7.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
