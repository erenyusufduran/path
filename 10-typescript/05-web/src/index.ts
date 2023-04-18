import { User } from "./models/User";

const user = new User({ name: "Eren", age: 21 });

user.on("change", () => {});
user.on("change", () => {});
user.on("ern", () => {});

console.log(user);
