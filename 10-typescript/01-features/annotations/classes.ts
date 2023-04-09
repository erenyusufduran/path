// Classes
// Blueprint to create an object with some fields and methods to represent a 'thing'

class Vehicle {
  protected honk(): void {
    console.log("Beep");
  }
}

class Car extends Vehicle {
  // overwrite
  private drive(): void {
    console.log("Vroom");
  }
  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDrivingProcess();
