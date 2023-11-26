void main(List<String> args) {
  Function(int, int) fn1 = (int a, int b) {
    // lambda expression, unnamed functions
    print(a + b);
  };

  fn1(1, 2);

  var fn2 = (int s) => s * 2;
}

void sum(int a, int b) {
  print(a + b);
}
