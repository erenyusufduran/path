void main(List<String> args) async {
  Map<String, dynamic> user = await getUserWithId(5);
  String username = user["username"];
  List<String> courses = await getCoursesByUsername(username);
  print(courses);
}

Future<Map<String, dynamic>> getUserWithId(int id) {
  print("Id: $id - fetching");
  return Future.delayed(
      Duration(seconds: 2), () => {"username": "qroxyn", "id": id});
}

Future<List<String>> getCoursesByUsername(String username) {
  print("Getting courses by with username: $username");
  return Future.delayed(
      Duration(seconds: 4), () => ["flutter", "kotlin", "javascript"]);
}
