import { User } from "./models/User";

const user = new User({ name: "Göko", age: 20 });

user.on("change", () => {
  console.log("user was changed");
});
