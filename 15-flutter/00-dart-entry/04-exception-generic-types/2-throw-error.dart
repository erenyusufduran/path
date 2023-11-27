void main(List<String> args) {
  try {
    double value = sqrt(-20);
    print("Value: ${value.toStringAsFixed((2))}");
  } on FormatException catch (e) {
    print(e.message);
  } catch (e) {
    print(e);
  }
}

double sqrt(int i) {
  if (i < 0) {
    throw FormatException("Number can not be negative");
  }
  return sqrt(i);
}
