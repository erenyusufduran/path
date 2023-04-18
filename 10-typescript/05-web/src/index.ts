import { User } from "./models/User";

const user = new User({ name: "Eren", age: 21 });
user.set({ name: "Gökşen" });

console.log(user.get("name"));
