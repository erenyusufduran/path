import { UserProps } from "./User";

// 1. In Typescript, strings can be types
// 2. In JS(and therefore TS), all object keys are strings

export class Attributes<T extends UserProps> {
  constructor(private data: T) {}

  // K must be key of T.
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}

const attr = new Attributes<UserProps>({ id: 5, age: 20, name: "Goksen" });
const name = attr.get("name");
