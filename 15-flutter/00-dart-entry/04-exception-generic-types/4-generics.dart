import 'generic_stack.dart';

void main(List<String> args) {
  List<String> list = [];
  list.add("Eren");
  // list.add(2);

  Stack<String> myStack = Stack();
  // myStack.push(5);
  myStack.push("Eren");

  double doubleOrt = findOrt<int>(1, 3);
  print("$doubleOrt" as List);
}

print(List list) {
  print(list[1].length);
}

double findOrt<T extends num>(T s1,T s2) {
  return (s1 + s2) / 2;
}
