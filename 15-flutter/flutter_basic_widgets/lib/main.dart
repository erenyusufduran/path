import "package:flutter/material.dart";

void main(List<String> args) {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: MyHomePage(),
        title: "My Counter App",
        theme: ThemeData(primarySwatch: Colors.teal));
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("My Counter AppBar"),
      ),
      body: Center(
          child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
        Text(
          "How many clicked count",
          style: TextStyle(fontSize: 24),
        ),
        Text(
          "0",
          style: TextStyle(fontSize: 48, fontWeight: FontWeight.bold),
        )
      ])),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: Icon(Icons.add),
      ),
    );
  }
}
