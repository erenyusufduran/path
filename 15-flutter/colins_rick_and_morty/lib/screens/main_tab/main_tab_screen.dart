import 'package:colins_rick_and_morty/screens/main_tab/tabs/characters_screen.dart';
import 'package:colins_rick_and_morty/screens/main_tab/tabs/episodes_screen.dart';
import 'package:colins_rick_and_morty/screens/main_tab/tabs/locations_screen.dart';
import 'package:flutter/material.dart';

class MainTabScreen extends StatefulWidget {
  MainTabScreen({Key? key}) : super(key: key);

  @override
  State<MainTabScreen> createState() => _MainTabScreenState();
}

class _MainTabScreenState extends State<MainTabScreen> {
  int index = 0;

  final List<Widget> _screens = [
    EpisodesScreen(),
    CharactersScreen(),
    LocationsScreen()
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        // appBar: AppBar(title: Text("Rick & Morty")),
        body: _screens[index],
        bottomNavigationBar: BottomNavigationBar(
          currentIndex: index,
          onTap: (value) {
            setState(() {
              index = value;
            });
          } ,
          items: [
            BottomNavigationBarItem(icon: Icon(Icons.movie), label: "Episodes"),
            BottomNavigationBarItem(
                icon: Icon(Icons.person), label: "Characters"),
            BottomNavigationBarItem(icon: Icon(Icons.map), label: "Locations")
          ],
        ));
  }
}
