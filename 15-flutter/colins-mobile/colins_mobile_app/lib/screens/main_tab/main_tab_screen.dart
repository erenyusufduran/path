import 'package:flutter/material.dart';

class MainTabScreen extends StatefulWidget {
  static String route = "/main_tab";
  const MainTabScreen({super.key});

  @override
  State<MainTabScreen> createState() => _MainTabScreenState();
}

class _MainTabScreenState extends State<MainTabScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Text("Main TAB"),
      bottomNavigationBar: BottomNavigationBar(
          unselectedItemColor: Colors.grey,
          selectedItemColor: Colors.blue,
          showUnselectedLabels: true,
          items: [
            BottomNavigationBarItem(
                icon: Icon(Icons.ac_unit), label: "Anasayfa"),
            BottomNavigationBarItem(icon: Icon(Icons.ac_unit), label: "Arama"),
            BottomNavigationBarItem(icon: Icon(Icons.ac_unit), label: "Sepet"),
            BottomNavigationBarItem(
                icon: Icon(Icons.ac_unit), label: "Kampanyalar"),
            BottomNavigationBarItem(
                icon: Icon(Icons.ac_unit), label: "Hesabım"),
          ]),
    );
  }
}
