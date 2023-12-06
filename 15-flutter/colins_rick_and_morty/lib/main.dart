import 'package:colins_rick_and_morty/screens/main_tab/main_tab_screen.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const RickAndMorty());
}

class RickAndMorty extends StatelessWidget {
  const RickAndMorty({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Rick & Morty',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MainTabScreen()
    );
  }
}
