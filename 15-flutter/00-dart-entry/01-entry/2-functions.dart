void main(List<String> args) {
  int result = calculateArea(5, 10);
  print("Area: $result");

  int summation = sumNums(4, 10);
  print("Summation $summation");

  int whichIsBigger = findMaximum(20, 45);
  print("Which is bigger: $whichIsBigger");

  int area = calculateAreaV2(firstNum: 5, secondNum: 50);
  print(area);
}

int calculateArea(int x, [int y = 0]) {
  int area = x * y;
  return area;
}

int calculateAreaV2({int firstNum = 0, int secondNum = 0}) {
  int area = firstNum * secondNum;
  return area;
}

int sumNums(int firstNum, int secondNum) => firstNum + secondNum;

int findMaximum(int firstNum, int secondNum) =>
    firstNum >= secondNum ? firstNum : secondNum;
