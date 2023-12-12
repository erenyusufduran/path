import 'package:flutter/material.dart';
import './screens/screens.dart' as screens;
import "./utils/utils.dart" as utils;

void main() {
  runApp(const ColinsMobileApp());
}

class ColinsMobileApp extends StatelessWidget {
  const ColinsMobileApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Colin's",
      theme: utils.Theme.lightTheme(),
      initialRoute: screens.LoginScreen.route,
      routes: {
        screens.LoginScreen.route: (context) => const screens.LoginScreen(),
        screens.MainTabScreen.route: (context) => const screens.MainTabScreen(),
      },
    );
  }
}
