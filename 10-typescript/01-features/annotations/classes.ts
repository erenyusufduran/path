// Classes
// Blueprint to create an object with some fields and methods to represent a 'thing'

class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log("Beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("Vroom");
  }
  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "red");
console.log(car.color);
car.startDrivingProcess();
