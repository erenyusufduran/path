void main(List<String> args) {
  Math math = Math(3, 5);
  math.sum();
  math.sum();

  Math math2 = Math(5, 8);
  math2.sum();

  print(Math.summationCount);

}

class Math {
  static double PI = 3.14;
  static int summationCount = 0;
  int firstNum = 0;
  int secondNum = 0;

  Math(this.firstNum, this.secondNum);

  static void className() {
    print("Math MasterClass!");
  }

  void sum() {
    summationCount++;
    print("${this.firstNum + this.secondNum}");
  }

  void subtract() {
    print("${this.firstNum - this.secondNum}");
  }
}
