import 'package:flutter/material.dart';

class MyCounterPage extends StatefulWidget {
  const MyCounterPage({super.key});

  @override
  State<MyCounterPage> createState() => _MyCounterPageState();
}

class _MyCounterPageState extends State<MyCounterPage> {
  int _count = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("My Counter AppBar"),
      ),
      body: Center(
          child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
        MyNewTextWidget(),
        Text(
          _count.toString(),
          style: Theme.of(context).textTheme.headlineLarge,
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

class MyNewTextWidget extends StatelessWidget {
  const MyNewTextWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Text(
      "How many clicked count",
      style: TextStyle(fontSize: 24),
    );
  }
}
