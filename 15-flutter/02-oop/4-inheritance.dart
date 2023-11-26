void main(List<String> args) {
  User systemUser = SystemUser("eren", "123");
  systemUser.login();
}

class User {
  String email = "";
  String password = "";

  User(this.email, this.password) {
    print("User class contructor executed");
  }

  void login() {
    print("User logging in!");
  }
}

class SystemUser extends User {
  SystemUser(String email, String password) : super(email, password) {
    print("System user class's constructor executed");
  }

  void invite() {
    print("Invited");
  }

  void changeEmail(String _email) {
    super.email = _email;
  }

  @override
  void login() {
    print("System user logging in!");
  }
}

class ReadOnlyUser extends SystemUser {
  ReadOnlyUser(String email, String password) : super(email, password) {}

  void sayName() {
    print("Only readeable user");
  }
}

class AdminUser extends User {
  AdminUser(String email, String password) : super(email, password) {}

  void summationOfUsers() {
    print("Summation of users count is 20");
  }
}
