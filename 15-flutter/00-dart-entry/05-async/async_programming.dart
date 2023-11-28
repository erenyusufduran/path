import 'dart:io';

void main(List<String> args) async {
  // print("Hi there");
  // Future<String> result = longTransaction();
  // result
  //     .then((String value) => print(value))
  //     .catchError((error) => print(error))
  //     .whenComplete(() => print("Bread operations is completed!"));
  // print("Is children come home?");

  print("Getting personal info");
  String person = await getPersonalInfo();
  print(person);
  print("Transaction is over");
}

Future<String> longTransaction() {
  return Future.delayed(Duration(seconds: 2), () {
    // throw Exception("There is no bread");
    return "Kid will come home with bread";
  });
}

Future<String> getPersonalInfo() {
  return Future.delayed(Duration(seconds: 3), () => "Eren");
}
