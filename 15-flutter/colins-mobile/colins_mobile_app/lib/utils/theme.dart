import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import "./utils.dart" as utils;

class Theme {
  static ThemeData lightTheme() {
    return ThemeData(
        scaffoldBackgroundColor: Colors.white,
        inputDecorationTheme: InputDecorationTheme(
            contentPadding: const EdgeInsets.all(10),
            suffixStyle: TextStyle(
                color: utils.Colors.grey,
                fontSize: 12,
                fontWeight: FontWeight.bold,
                fontFamily: "Poppins"),
            focusColor: utils.Colors.blue,
            fillColor: utils.Colors.blue,
            hoverColor: utils.Colors.blue,
            hintStyle: TextStyle(
                color: utils.Colors.grey,
                fontSize: 12,
                fontWeight: FontWeight.w400,
                fontFamily: "Poppins"),
            floatingLabelBehavior: FloatingLabelBehavior.never,
            border: const OutlineInputBorder(),
            outlineBorder: const BorderSide(color: Colors.blue)),
        errorColor: utils.Colors.red,
        hintColor: utils.Colors.grey,
        focusColor: utils.Colors.blue,
        elevatedButtonTheme: ElevatedButtonThemeData(
            style: ElevatedButton.styleFrom(
          textStyle: const TextStyle(
              fontSize: 14, fontWeight: FontWeight.bold, fontFamily: "Poppins"),
          shadowColor: utils.Colors.blue.withOpacity(0.25),
          elevation: 30,
          minimumSize: const Size(double.infinity, 57),
          backgroundColor: utils.Colors.blue,
          foregroundColor: utils.Colors.light,
        )),
        textTheme: TextTheme(
            headlineMedium: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 16,
                color: utils.Colors.dark),
            bodyLarge: TextStyle(
                fontWeight: FontWeight.w400,
                fontSize: 12,
                color: utils.Colors.grey)),
        textButtonTheme: TextButtonThemeData(
            style: TextButton.styleFrom(
                foregroundColor: utils.Colors.blue,
                textStyle: const TextStyle(
                    fontSize: 12,
                    fontWeight: FontWeight.bold,
                    fontFamily: "Poppins"))),
        appBarTheme: AppBarTheme(
            systemOverlayStyle: const SystemUiOverlayStyle(
                statusBarBrightness: Brightness.light,
                statusBarIconBrightness: Brightness.light,
                statusBarColor: Colors.transparent,
                systemNavigationBarIconBrightness: Brightness.dark,
                systemNavigationBarColor: Colors.white),
            titleTextStyle: TextStyle(
              fontFamily: "Poppins",
              fontSize: 16,
              fontWeight: FontWeight.bold,
              color: utils.Colors.dark,
            ),
            backgroundColor: Colors.white,
            foregroundColor: utils.Colors.dark,
            shadowColor: Colors.transparent));
  }
}
