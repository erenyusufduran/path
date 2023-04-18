import { User } from "./models/User";

const user = new User({ name: "Eren", age: 21 });

user.on("change", () => {
  console.log("Change #1");
});
user.on("change", () => {
  console.log("Change #2");
});
user.on("save", () => {
  console.log("Save was triggered");
});

user.trigger("save");

console.log(user);
