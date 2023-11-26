class Student {
  int id = 0;
  String name = "";

  Student(this.id, this.name);

  Student.withoutId(this.name) {
    print("Named constructor");
  }

  factory Student.factoryConstructor(int id, String name) {
    if (id < 0 || name.length == 0) {
      return Student(5, name);
    } else {
      return Student(id, name);
    }
  }
}
