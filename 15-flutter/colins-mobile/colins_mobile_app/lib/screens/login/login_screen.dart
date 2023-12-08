import 'package:flutter/material.dart';

class LoginScreen extends StatelessWidget {
  static String route = "/login";
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SingleChildScrollView(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 25),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  child: Text(
                    "COLINS",
                    style: TextStyle(fontSize: 55, fontWeight: FontWeight.w400),
                  ),
                  margin: EdgeInsets.only(top: 113, bottom: 37),
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
                  decoration: InputDecoration(
                      hintText: "E-posta Adresiniz",
                      prefixIcon: Icon(Icons.email)),
                ),
                const SizedBox(
                  height: 8,
                ),
                TextFormField(
                  decoration: InputDecoration(
                      hintText: "Şifreniz", prefixIcon: Icon(Icons.lock)),
                ),
                const SizedBox(
                  height: 16,
                ),
                ElevatedButton(
                    onPressed: () {
                      // Navigator.pushNamed(context, MainTabScreen.route);
                    },
                    child: const Text("Giriş Yap")),
                TextButton(
                    onPressed: () {},
                    child: Text(
                      "Şifremi Unuttum",
                      style: TextStyle(color: Colors.blue),
                    )),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text("Hesabın yok mu?"),
                    TextButton(
                        onPressed: () {},
                        child: Text("Hesap Oluştur",
                            style: TextStyle(color: Colors.blue)))
                  ],
                )
              ],
            )));
  }
}
