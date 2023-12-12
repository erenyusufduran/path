import '../screens.dart' as screens;
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LoginScreen extends StatelessWidget {
  static String route = "/login";
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          automaticallyImplyLeading: false,
          shadowColor: Colors.transparent,
          actions: [
            TextButton(
                onPressed: () {
                  Navigator.of(context).popAndPushNamed(screens.MainTabScreen.route);
                },
                child: Text(
                  "Atla",
                  style: Theme.of(context).textTheme.headlineMedium,
                ))
          ],
        ),
        body: SingleChildScrollView(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 25),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  margin: const EdgeInsets.only(top: 84, bottom: 37),
                  child: SvgPicture.asset("assets/icons/logo.svg"),
                ),
                Text(
                  "Hoşgeldiniz",
                  style: Theme.of(context).textTheme.headlineMedium,
                ),
                const SizedBox(
                  height: 8,
                ),
                Text(
                  "Devam etmek için giriş yap",
                  style: Theme.of(context).textTheme.bodyLarge,
                ),
                const SizedBox(
                  height: 28,
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
                  obscureText: true,
                  decoration: const InputDecoration(
                      hintText: "Şifreniz",
                      prefixIcon: Icon(Icons.lock_outlined)),
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
                    child: const Text("Giriş Yap")),
                TextButton(
                    onPressed: () {},
                    child: const Text(
                      "Şifremi Unuttum",
                      style: TextStyle(color: Colors.blue),
                    )),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      "Hesabın yok mu?",
                      style: Theme.of(context).textTheme.bodyLarge,
                    ),
                    TextButton(
                        onPressed: () {
                          Navigator.popAndPushNamed(context, screens.RegisterScreen.route);
                        },
                        child: const Text("Hesap Oluştur",
                            style: TextStyle(color: Colors.blue)))
                  ],
                )
              ],
            )));
  }
}
