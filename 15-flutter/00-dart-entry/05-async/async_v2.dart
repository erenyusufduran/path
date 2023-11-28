import 'async_programming.dart';

void main(List<String> args) {
  print("Getting person");
  getPersonalInfo(); // It will not wait this.
  print("Getted"); 
}

void personalTransactions() async {
  String person = await getPersonalInfo();
  print(person);
}