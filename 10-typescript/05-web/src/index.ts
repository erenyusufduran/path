import { User } from "./models/User";

const user = new User({ id: 1, name: "Newer Name" });

user.on("save", () => {
  console.log(user);
});

user.save();
