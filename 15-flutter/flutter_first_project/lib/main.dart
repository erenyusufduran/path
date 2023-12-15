// ignore_for_file: use_key_in_widget_constructors, must_be_immutable, prefer_final_fields, annotate_overrides, prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';

void main(List<String> args) {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  String _imgFirst =
      "https://emrealtunbilek.com/wp-content/uploads/2016/10/apple-icon-72x72.png";
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(backgroundColor: Colors.teal, title: Text("Header")),
        body: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: withProblemsContainer,
                ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            debugPrint("Clicked!");
          },
          backgroundColor: Colors.red,
          child: Icon(
            Icons.account_box_rounded,
            color: Colors.white,
          ),
        ),
      ),
    );
  }

  List<Widget> get flexibleContainer {
    return [
      Flexible(
        child: Container(
          width: 75,
          height: 75,
          color: Colors.yellow,
        ),
      ),
      Flexible(
        child: Container(
          width: 75,
          height: 75,
          color: Colors.red,
        ),
      ),
      Flexible(
        child: Container(
          width: 75,
          height: 75,
          color: Colors.green,
        ),
      ),
      Flexible(
        child: Container(
          width: 75,
          height: 75,
          color: Colors.blue,
        ),
      )
    ];
  }

  List<Widget> get expandedContainer {
    return [
      Expanded(
        flex: 2,
        child: Container(
          width: 75,
          height: 75,
          color: Colors.yellow,
        ),
      ),
      Expanded(
        flex: 1,
        child: Container(
          width: 75,
          height: 75,
          color: Colors.red,
        ),
      ),
      Expanded(
        flex: 3,
        child: Container(
          width: 75,
          height: 75,
          color: Colors.blue,
        ),
      ),
      Expanded(
        child: Container(
          width: 75,
          height: 75,
          color: Colors.grey,
        ),
      ),
    ];
  }

  List<Widget> get withProblemsContainer {
    return [
      Container(
        width: 75,
        height: 75,
        color: Colors.yellow,
      ),
      Container(
        width: 75,
        height: 75,
        color: Colors.red,
      ),
      Container(
        width: 75,
        height: 75,
        color: Colors.blue,
      ),
      Container(
        width: 75,
        height: 75,
        color: Colors.grey,
      ),
      Container(
        width: 75,
        height: 75,
        color: Colors.blue,
      ),
      Container(
        width: 75,
        height: 75,
        color: Colors.red,
      )
    ];
  }

  Widget rowColumnMethods() {
    return Container(
      color: Colors.red.shade300,
      child: Column /*Row*/ (
          mainAxisSize: MainAxisSize.max,
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [Text("E"), Text("R"), Text("E"), Text("N")],
            ),
            Icon(
              Icons.add_circle,
              size: 64,
              color: Colors.green,
            ),
            Icon(
              Icons.add_circle,
              size: 64,
              color: Colors.red,
            ),
            Icon(
              Icons.add_circle,
              size: 64,
              color: Colors.blue,
            ),
            Icon(
              Icons.add_circle,
              size: 64,
              color: Colors.orange,
            )
          ]),
    );
  }

  Widget containerLessons() {
    return Center(
      child: Container(
        padding: EdgeInsets.all(20),
        decoration: BoxDecoration(
            color: Colors.orange,
            shape: BoxShape.rectangle,
            border: Border.all(width: 4, color: Colors.purple),
            borderRadius: BorderRadius.only(
                bottomLeft: Radius.circular(30), topRight: Radius.circular(30)),
            image: DecorationImage(
                image: NetworkImage(_imgFirst),
                fit: BoxFit.contain,
                repeat: ImageRepeat.repeat),
            boxShadow: [
              BoxShadow(
                  color: Colors.green, offset: Offset(10, 20), blurRadius: 20),
              BoxShadow(
                  color: Colors.yellow, offset: Offset(0, -20), blurRadius: 15)
            ]),
        child: FlutterLogo(
          size: 64,
        ),
      ),
    );
  }
}
