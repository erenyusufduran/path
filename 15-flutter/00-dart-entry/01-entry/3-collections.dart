// ignore_for_file: unused_local_variable

void main(List<String> args) {
  // int num = 0;
  // List<int> numbers = List.filled(10, num, growable: false);
  // numbers[3] = 20;
  // print(numbers);

  // List<String> names = List.filled(2, "");
  // for (int i = 0; i < numbers.length; i++) {
  //   numbers[i] += 20;
  //   print(numbers[i]);
  // }

  // for (int element in numbers) {
  //   print(element);
  // }

  // List<int> dynamicNums = [];
  // dynamicNums.add(60);
  // dynamicNums.add(50);
  // print(dynamicNums);

  // List<dynamic> random = List<dynamic>.filled(5, 0);
  // random[0] = "Goko";
  // random[1] = 58;
  // random[2] = false;

  // random.first;
  // random.last;
  // random.isEmpty;
  // random.length;
  // random.reversed;
  // random.remove(60);
  // random.removeAt(1);
  // random.clear();
  // random.contains(50);
  // random.elementAt(1);
  // random.indexOf(50);
  // random.shuffle();

  // ******************************

  Set<String> nameSet = Set();
  nameSet.add("Eren");
  nameSet.add("Muhammed");
  nameSet.add("Enes");

  for (String name in nameSet) {
    print("Name: ${name}");
  }

  /************************ */
  Map<String, int> countryCodes = {
    "Istanbul": 34,
    "Bursa": 16,
    "Ankara": 6,
  };
  print(countryCodes["Istanbul"]);

  for (String key in countryCodes.keys) {
    countryCodes[key];
  }

  for (int value in countryCodes.values) {
    value;
  }

  for (var element in countryCodes.entries) {
    element.key;
    element.value;
  }
}
