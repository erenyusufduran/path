import 'package:flutter/material.dart';

void main(List<String> args) {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(primaryColor: Colors.teal),
      home: Scaffold(
        backgroundColor: Colors.yellow,
        appBar: AppBar(backgroundColor: Colors.teal, title: Text("Header")),
        body: Container(
          color: Colors.tealAccent,
          child: Text(
            "Eren",
            textAlign: TextAlign.center,
          ),
          margin: EdgeInsets.all(20),
          padding: EdgeInsets.only(left: 20, top: 20),
          constraints: BoxConstraints(minHeight: 100, minWidth: 100, maxHeight: 200, maxWidth: 200),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            debugPrint("Clicked!");
          },
          child: Icon(
            Icons.account_box_rounded,
            color: Colors.white,
          ),
          backgroundColor: Colors.red,
        ),
      ),
    );
  }
}
