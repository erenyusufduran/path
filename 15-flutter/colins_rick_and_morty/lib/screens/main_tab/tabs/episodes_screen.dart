import 'package:flutter/material.dart';

class EpisodesScreen extends StatelessWidget {
  const EpisodesScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: Text("Episodes")),
        body: Column(
          children: [
            ElevatedButton(onPressed: () {
              
            }, child: Text("Call Episodes API"))
          ],
        ));
  }
}
