// ignore_for_file: unused_import

import "package:flutter/material.dart";
import "package:flutter_basic_widgets/image_widgets.dart";
import "package:flutter_basic_widgets/my_counter_page.dart";

void main(List<String> args) {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "My Counter App",
      theme: ThemeData(
          primarySwatch: Colors.teal,
          textTheme: TextTheme(
              headlineLarge: TextStyle(
                  color: Colors.purple,
                  fontWeight: FontWeight.bold,
                  fontSize: 64))),
      home: Scaffold(
        appBar: AppBar(title: Text("Image Examples")),
        body: ImageExamples(),
      ),
    );
  }
}
