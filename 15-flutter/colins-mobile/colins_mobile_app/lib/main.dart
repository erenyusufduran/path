import 'package:colins_mobile_app/screens/screens.dart' as screens;
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
          scaffoldBackgroundColor: Colors.white,
          primarySwatch: Colors.blue,
          inputDecorationTheme: InputDecorationTheme(
              floatingLabelBehavior: FloatingLabelBehavior.never,
              border: OutlineInputBorder(),
              outlineBorder: BorderSide(color: Colors.blue)),
          elevatedButtonTheme: ElevatedButtonThemeData(
              style: ButtonStyle(
            shape: MaterialStateProperty.all(
              RoundedRectangleBorder(
                borderRadius: BorderRadius.zero,
                side: BorderSide(color: Colors.blue),
              ),
            ),
            foregroundColor:
                MaterialStateColor.resolveWith((states) => Colors.white),
            minimumSize: MaterialStateProperty.resolveWith(
                (states) => Size(double.infinity, 57)),
            maximumSize: MaterialStateProperty.resolveWith(
                (states) => Size(double.infinity, 57)),
            backgroundColor: MaterialStateProperty.resolveWith<Color?>(
                (Set<MaterialState> states) {
              return Colors.blue;
            }),
          ))),
      initialRoute: screens.LoginScreen.route,
      routes: {
        screens.LoginScreen.route: (context) => const screens.LoginScreen(),
        screens.MainTabScreen.route: (context) => const screens.MainTabScreen(),
      },
    );
  }
}
