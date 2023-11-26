import 'dart:math';

class DbTransaction {
  String _username = "eren";
  String _password = "123456";

  bool connect(String username, String password) {
    if (isNetConnected()) return false;
    if (this._username == username && this._password == password) {
      return true;
    }
    return false;
  }

  bool isNetConnected() {
    if (Random().nextBool()) {
      return true;
    }
    return false;
  }
}

class Client {
  int? clientId;

  Client(int id) {
    clientIdControl(id);
  }

  void set clientIdSetter(int id) {
    if (id > 300) {
      this.clientId = id;
    }
  }

  int get clientIdGetter {
    return this.clientId!;
  }

  void clientIdControl(int id) {
    if (id > 300) {
      this.clientId = id;
    }
  }
}
