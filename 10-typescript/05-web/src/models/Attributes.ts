// 1. In Typescript, strings can be types
// 2. In JS(and therefore TS), all object keys are strings

export class Attributes<T extends object> {
  constructor(private data: T) {}

  // K must be key of T.
  get = <K extends keyof T>(key: K): T[K] => {
    // We are using this keyword, but we are calling this func
    // from user class, so this would be undefined, but with
    // arrow functions it work correctly. So with getter methods
    // use arrow function.
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
