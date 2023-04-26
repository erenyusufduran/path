import "reflect-metadata";

// const plane = {
//   color: "red",
// };

// Reflect.defineMetadata("note", "hi there", plane, "color");
// // Reflect.defineMetadata("height", "10", plane);

// const note = Reflect.getMetadata("note", plane, "color");
// // const height = Reflect.getMetadata("height", plane);

// console.log(note);
// // console.log(height);

@printMetadata
class Plane {
  color: string = "red";

  @get("/login")
  fly(): void {
    console.log("vrrrrrrrrrrrrr");
  }
}

function get(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (const key in target.prototype) {
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log(secret);
  }
}
