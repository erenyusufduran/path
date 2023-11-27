void main(List<String> args) {
  print("Program has been started");

  try {
    double number = 100 / int.parse("eren");
    print(number);
  } on IntegerDivisionByZeroException {
    print("Divider cant be zero");
  } on FormatException catch (e) {
    print("String can't be int: ${e.message}");
  } catch (e) {
    print("Program gives an error $e");
  } finally {
    print("Finished");
  }
}
