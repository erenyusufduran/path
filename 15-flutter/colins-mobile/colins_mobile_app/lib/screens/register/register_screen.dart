import 'package:colins_mobile_app/screens/screens.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RegisterScreen extends StatelessWidget {
  static String route = "/register";
  const RegisterScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: const Text("Yeni Hesap Oluştur")),
        body: SingleChildScrollView(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 25),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  margin: const EdgeInsets.only(top: 45, bottom: 37),
                  child: SvgPicture.asset("assets/icons/logo.svg"),
                ),
                Text(
                  "Başlayalım",
                  style: Theme.of(context).textTheme.headlineMedium,
                ),
                const SizedBox(
                  height: 8,
                ),
                Text(
                  "Yeni hesap oluştur",
                  style: Theme.of(context).textTheme.bodyLarge,
                ),
                const SizedBox(
                  height: 28,
                ),
                TextFormField(
                  decoration: const InputDecoration(
                      hintText: "Adınız Soyadınız",
                      prefixIcon: Icon(Icons.person_outline)),
                ),
                const SizedBox(
                  height: 8,
                ),
                TextFormField(
                  decoration: const InputDecoration(
                      hintText: "E-posta Adresiniz",
                      prefixIcon: Icon(Icons.email_outlined)),
                ),
                const SizedBox(
                  height: 8,
                ),
                TextFormField(
                  decoration: const InputDecoration(
                      hintText: "Şifreniz",
                      prefixIcon: Icon(Icons.lock_outline)),
                ),
                const SizedBox(
                  height: 8,
                ),
                TextFormField(
                  decoration: const InputDecoration(
                      hintText: "Şifreniz Tekrar",
                      prefixIcon: Icon(Icons.lock_outline)),
                ),
                const SizedBox(
                  height: 16,
                ),
                ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      shape: const RoundedRectangleBorder(
                          borderRadius: BorderRadius.zero),
                    ),
                    onPressed: () {
                      // Navigator.pushNamed(context, MainTabScreen.route);
                    },
                    child: const Text("Hesap Oluştur")),
                const SizedBox(
                  height: 12,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      "Hesabın var mı?",
                      style: Theme.of(context).textTheme.bodyLarge,
                    ),
                    TextButton(
                        onPressed: () {
                          Navigator.pushNamed(context, LoginScreen.route);
                        },
                        child: const Text("Giriş Yap",
                            style: TextStyle(color: Colors.blue)))
                  ],
                )
              ],
            )));
  }
}
