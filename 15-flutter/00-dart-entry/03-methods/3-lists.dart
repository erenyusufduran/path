// ignore_for_file: unused_local_variable

void main(List<String> args) {
  Person person = Person(3, "Eren");
  Student student = Student(5, "Goksen", 4);

  List<Person> allStudents = [person, student];

  var list1 = List<Student>.filled(5, Student(0, "", 0));
  list1[0];
  var listFrom = List<Person>.from(allStudents);
  var listOf = List<Student>.of(allStudents.whereType<Student>());

  print(listFrom);
  print(listOf);

  var listGenerate = List<int>.generate(5, (index) => index + 2);
  print(listGenerate);

  var immutableList = List.unmodifiable([0, 1, 2]);
  immutableList.reversed;

  allStudents.add(Person(5, "Ali"));
  allStudents.addAll([Person(23, "Resul"), Student(65, "Ibrahim", 3)]);

  bool result = allStudents.any((Person element) => element.id > 10);
  print(result);

  Map<int, Person> mappedStudents = allStudents.asMap();
  print(mappedStudents[1]!.name);

  print(allStudents.contains(person));

  bool resultEvery = allStudents.every((element) => element.name.length > 5);
  print(resultEvery);

  var found = allStudents.firstWhere((element) => element.id == 5); // find

  var maps = allStudents.map((Person element) => "${element.id} ${element.name}" ).toList();
  print(maps);

  allStudents.sort((st1, st2) {
    if (st1.id >= st2.id) {
      return 1;
    }
    return -1;
  });
}

class Person {
  int id = 0;
  String name = "";

  Person(this.id, this.name);

  @override
  String toString() {
    return "id: $id, name: $name";
  }
}

class Student extends Person {
  int lessonsCount = 0;

  Student(int id, String name, this.lessonsCount) : super(id, name);

  @override
  String toString() {
    return "id: $id and name: $name and lessonsCount: $lessonsCount";
  }
}
