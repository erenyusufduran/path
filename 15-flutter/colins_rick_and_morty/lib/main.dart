import 'package:flutter/material.dart';
import './screens/main_tab/main_tab_screen.dart';
import "./screens/character_detail_screen.dart";
import "./screens/episode_detail_screen.dart";
import "./screens/location_detail_screen.dart";

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
      initialRoute: "/",
      routes: {
        "/": (context) => MainTabScreen(),
        "/character_detail": (context) => CharacterDetailScreen(),
        "/episode_detail": (context) => EpisodeDetailScreen(),
        "/location_detail": (context) => LocationDetailScreen()
      },
    );
  }
}
