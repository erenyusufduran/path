import 'package:colins_mobile_app/screens/screens.dart';
import 'package:flutter/material.dart';

class LoginScreen extends StatelessWidget {
  static String route = "/login";
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(body: Center(child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text("Login Screen"),
        ElevatedButton(onPressed: () {
          Navigator.pushNamed(context, MainTabScreen.route);
        }, child: Text("Anasayfaya Git"))
      ],
    )));
  }
}
