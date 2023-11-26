import 'DbTransaction.dart';

void main(List<String> args) {
  DbTransaction db = DbTransaction();
  
  bool result = db.connect("eren", "123456");
  if (result) return print("Connected");
}

