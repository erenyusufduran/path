import { User } from "./models/User";

const user = new User({ name: "Eren", age: 21 });
console.log(user.get("name"));
