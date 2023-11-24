import "dart:io";

void main(List<String> args) {
  int sayi = 12;
  num number = 354;

  if (sayi < number) {
  } else if (number < sayi) {
  } else {}

  sayi < number ? "" : "";

  String? name = null;
  String message = name ?? "eren";
  print("Hi, $message!");

  switch (23) {
    case 21:
      break;
    case 23:
      break;
    default:
      break;
  }

  // + - * / % %= += ++
  // < > <= >= == !=
  // && || !

  for (int i = 0; i < 10; i++) {}

  List nameList = ["Emre", "Hasan", "Ali"];
  for (String name in nameList) {
    print(name);
  }

  for (int i = 0; i < nameList.length; i++) {
    print(nameList[i]);
  }

  while (3 > 6) {
    break;
  }

  print("Give me a name");
  String isim = stdin.readLineSync().toString();
  print("Given name is $isim");
}
