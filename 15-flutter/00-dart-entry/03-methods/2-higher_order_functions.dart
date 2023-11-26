void main(List<String> args) {
  List<int> list = [1, 2, 3];
  list.forEach((element) {
    print("Element: ${element}");
  });

  list.forEach(callback);

  forEachForMyOwn(list, (int element, int index) => print("Element: ${element}, index: ${index}"));
}

void callback(int element) {
  print("Element: ${element}");
}

void forEachForMyOwn(List<int> list, Function callback) {
  for (int i = 0; i < list.length; i++) {
    callback(list[i], i);
  }
}
