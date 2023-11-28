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
        body: Center(
          child: Container(
            padding: EdgeInsets.all(20),
            child: FlutterLogo(
              size: 64,
            ),
            decoration: BoxDecoration(
                color: Colors.orange,
                shape: BoxShape.rectangle,
                border: Border.all(width: 4, color: Colors.purple),
                borderRadius: BorderRadius.only(
                    bottomLeft: Radius.circular(30),
                    topRight: Radius.circular(30)),
                image: DecorationImage(
                    image: NetworkImage(_imgFirst),
                    fit: BoxFit.contain,
                    repeat: ImageRepeat.repeat),
                boxShadow: [
                  BoxShadow(
                      color: Colors.green,
                      offset: Offset(10, 20),
                      blurRadius: 20),
                  BoxShadow(
                      color: Colors.yellow,
                      offset: Offset(0, -20),
                      blurRadius: 15)
                ]),
          ),
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
