import 'package:flutter/material.dart';
import "./utils.dart" as utils;

class Theme {
  static ThemeData lightTheme() {
    return ThemeData(
        scaffoldBackgroundColor: Colors.white,
        inputDecorationTheme: InputDecorationTheme(
            floatingLabelBehavior: FloatingLabelBehavior.never,
            border: OutlineInputBorder(),
            outlineBorder: BorderSide(color: Colors.blue)),
        // elevatedButtonTheme: ElevatedButtonThemeData(
        //     style: ButtonStyle(
        //   shape: MaterialStateProperty.all(
        //     RoundedRectangleBorder(
        //       borderRadius: BorderRadius.zero,
        //       side: BorderSide(color: Colors.blue),
        //     ),
        //   ),
       
        // ))
        elevatedButtonTheme: ElevatedButtonThemeData(
            style: ElevatedButton.styleFrom(
          shadowColor: utils.Colors.blue.withOpacity(0.25),
          elevation: 30,
          minimumSize: const Size(double.infinity, 57),
          primary: utils.Colors.blue,
          foregroundColor: utils.Colors.light,
        )));
  }
}
