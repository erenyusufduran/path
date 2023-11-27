// ignore_for_file: unused_local_variable

void main(List<String> args) {
  Map<String, dynamic> map = Map();
  var map2 = <String, dynamic>{};

  map["id"] = 5;
  map["name"] = "eren";
  map["color"] = "blue";

  print(map);

  var newMap = Map.from({"value": "new"});
  var mapFromEntries = Map.fromEntries(map.entries);
  print(mapFromEntries);

  var list = [1, 2, 3, 4];
  var mapFromIterable = Map<String, String>.fromIterable(list,
      key: (item) => "$item", value: (item) => "${item * 2}");
  print(mapFromIterable);

  map.update("newId", (value) => value * 3, ifAbsent: () => 100);

  map.putIfAbsent("surname", () => "Duran");
  print(map);

}
