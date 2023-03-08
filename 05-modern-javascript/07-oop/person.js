class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;
    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`;
    });
    return bio;
  }
  set fullName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes = []) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }
  getBio() {
    return `${this.firstName} ${this.lastName} is a ${this.position}.`;
  }
  getYearsLeft() {
    return 65 - this.age;
  }
}

// const myPerson = new Employee("Gökşen", "Ayar", 20, "Developer", [
//   "Reading",
//   "Cooking",
// ]);
// const person1 = new Person("Eren", "Duran", 21, ["Coding", "Biking"]);

// myPerson.setName("Goksen Ayar");
// console.log(person1.getBio());
// console.log(myPerson.getBio());
// console.log(myPerson.getYearsLeft());

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes = []) {
    super(firstName, lastName, age, likes);
    if (0 < grade && grade < 100) this.grade = grade;
  }
  getBio() {
    const isPassing = this.grade > 70 ? "Passing" : "Failing";
    return `${this.firstName} ${this.lastName} is ${isPassing} the class. His/Her grade is ${this.grade}`;
  }
  updateGrade(change) {
    this.grade += change;
  }
}

const student = new Student("Gökşen", "Ayar", 20, 65, []);
student.fullName = "Eren Duran";
console.log(student.getBio());
student.updateGrade(-20);
console.log(student.getBio());
