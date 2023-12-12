import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  static String route = "/home";
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: TextFormField(
              decoration: const InputDecoration(
                  hintText: "Ürün Ara",
                  prefixIcon: Icon(Icons.search_outlined))),
          actions: [
            IconButton(
                onPressed: () {}, icon: const Icon(Icons.favorite_outline)),
            IconButton(
                onPressed: () {},
                icon: const Icon(Icons.notifications_outlined))
          ],
        ),
        body: Center(child: Text("Home Screen")));
  }
}
