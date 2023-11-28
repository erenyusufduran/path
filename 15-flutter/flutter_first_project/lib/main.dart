import 'package:flutter/material.dart';

void main(List<String> args) {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(primaryColor: Colors.teal),
      home: Scaffold(
        appBar: AppBar(backgroundColor: Colors.teal, title: Text("Header")),
        body: Center(
            widthFactor: 2,
            heightFactor: 2,
            child: Container(
              width: 200,
              height: 200,
              color: Colors.red,
              child: Container(
                alignment: Alignment.center,
                color: Colors.blue,
                margin: EdgeInsets.all(40),
                width: 50,
                height: 50,
                child: Text("Eren"),
              ),
            )),
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
