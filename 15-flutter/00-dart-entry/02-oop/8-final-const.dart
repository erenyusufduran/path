// final does runtime, const does compile time execution
// const should be used known when compile time, final is same relations with runtime
void main(List<String> args) {
  // var str = "eren";
  // str = "yusuf";

  // final String str2 = "eren";
  // // str2 = "yusf";

  // const String str3 = "eren";
  // // str3 = "Ysuf";

  // final list = [1, 2, 3];
  // final list2 = [1, 2, 3];

  // if (list == list2) { // it will compare memory place.
  //   print("equal");
  // } else {
  //   print("not equal");
  // }

  const list = [1, 2, 3];
  const list2 = [
    1,
    2,
    3
  ]; // list and list2 are canonicolized, so it is pointing same memory place.

  if (list == list2) {
    // when you use lists with const you can't add element, so it will be equal.
    // it will compare memory place.
    print("equal");
  } else {
    print("not equal");
  }

  const Student student = Student(5, "Eren");
  print(student.id);
}

class Student {
  final int id;
  final String name;

  const Student(this.id, this.name);
}
