import 'package:flutter/material.dart';
import "../screens.dart" as screens;
import "../../utils/utils.dart" as utils;

class MainTabScreen extends StatefulWidget {
  static String route = "/main_tab";
  const MainTabScreen({super.key});

  @override
  State<MainTabScreen> createState() => _MainTabScreenState();
}

class _MainTabScreenState extends State<MainTabScreen> {
  final List<Widget> _screens = [
    screens.HomeScreen(),
    screens.ExploreScreen(),
    const screens.CartScreen(),
    const screens.OfferScreen(),
    const screens.AccountScreen()
  ];
  int _selectedIndex = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _screens[_selectedIndex],
      bottomNavigationBar: Container(
        decoration: BoxDecoration(
            border:
                Border(top: BorderSide(color: utils.Colors.light, width: 1))),
        height: 59,
        child: BottomNavigationBar(
            backgroundColor: Colors.white,
            type: BottomNavigationBarType.fixed,
            currentIndex: _selectedIndex,
            onTap: (int value) {
              setState(() {
                _selectedIndex = value;
              });
            },
            iconSize: 26,
            unselectedItemColor: utils.Colors.grey,
            selectedItemColor: utils.Colors.blue,
            showUnselectedLabels: true,
            selectedLabelStyle:
                const TextStyle(fontSize: 10, fontWeight: FontWeight.bold),
            unselectedLabelStyle:
                const TextStyle(fontSize: 10, fontWeight: FontWeight.w400),
            items: const [
              BottomNavigationBarItem(
                  icon: Icon(Icons.home_outlined), label: "Anasayfa"),
              BottomNavigationBarItem(
                  icon: Icon(Icons.search_outlined), label: "Arama"),
              BottomNavigationBarItem(
                  icon: Icon(Icons.shopping_cart_outlined), label: "Sepet"),
              BottomNavigationBarItem(
                  icon: Icon(Icons.tag_outlined), label: "Fırsatlar"),
              BottomNavigationBarItem(
                  icon: Icon(Icons.person_outlined), label: "Hesabım"),
            ]),
      ),
    );
  }
}
