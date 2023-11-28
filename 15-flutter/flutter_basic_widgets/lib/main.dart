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

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _count = 0;

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
          _count.toString(),
          style: TextStyle(fontSize: 48, fontWeight: FontWeight.bold),
        )
      ])),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          debugPrint("Button has been clicked");
          increaseCount();
        },
        child: Icon(Icons.add),
      ),
    );
  }
  
  void increaseCount() {
    setState(() {
      _count++;
    });
  }
}
