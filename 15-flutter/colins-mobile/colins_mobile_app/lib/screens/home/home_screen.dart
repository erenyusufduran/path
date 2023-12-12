import 'package:flutter/material.dart';
import "../../widgets/widgets.dart" as widgets;
import "../../view_models/view_models.dart" as view_models;

class HomeScreen extends StatelessWidget {
  static String route = "/home";
  HomeScreen({super.key});

  view_models.OfferBannerVM _offerBanner = view_models.OfferBannerVM(
      title: "Super Discounts", off: "50%", endTime: DateTime.now());

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: TextFormField(
            decoration: const InputDecoration(
                hintText: "Ürün Ara", prefixIcon: Icon(Icons.search_outlined))),
        actions: [
          IconButton(
              onPressed: () {}, icon: const Icon(Icons.favorite_outline)),
          IconButton(
              onPressed: () {}, icon: const Icon(Icons.notifications_outlined))
        ],
      ),
      body: SingleChildScrollView(
          child: Column(children: [widgets.OfferBanner(_offerBanner)])),
    );
  }
}
