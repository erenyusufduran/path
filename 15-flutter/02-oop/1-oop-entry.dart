void main(List<String> args) {
  Student firstStudent = Student();
  Student secondStudent = Student();

  firstStudent.name = "Eren";
  secondStudent.isActive = false;

  Car honda = Car(2020, "Honda", true);
  honda.giveInfos();
}

class Student {
  int? id;
  String? name;
  bool? isActive;

  void study() {
    print("Student is studying");
  }
}

class Car {
  int modelYear;
  String? mean;
  bool? isAutomatic;

  // Car(int _modelYear, String _mean, bool _isAutomatic) {
  //   this.modelYear = _modelYear;
  //   this.mean = _mean;
  //   this.isAutomatic = _isAutomatic;
  // }

  Car(this.modelYear, this.mean, this.isAutomatic) {}

  void giveInfos() {
    print("Year: ${modelYear}, Mean: ${mean}, is automatic: ${isAutomatic}");
  }

  void calculateAge() {
    print("Age is: ${2023 - this.modelYear}");
  }
}
