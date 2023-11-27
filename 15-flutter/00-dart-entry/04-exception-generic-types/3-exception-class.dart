void main(List<String> args) {
  try {
    Student student = Student(-4);
    print(student.age);
  } on AgeException catch (e) {
    print(e.message);
  }
}

class AgeException implements Exception {
  String message = "";

  AgeException({this.message = "AgeException"});

  @override
  String toString() {
    return super.toString();
  }
}

class Student {
  int age = 0;

  Student(int age) {
    if (age < 0) {
      throw AgeException(message: "Age can not be negative");
    } else {
      this.age = age;
    }
  }
}
