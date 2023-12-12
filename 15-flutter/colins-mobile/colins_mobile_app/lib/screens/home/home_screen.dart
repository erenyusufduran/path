import 'package:flutter/material.dart';
import "../../widgets/widgets.dart" as widgets;
import "../../view_models/view_models.dart" as view_models;

class HomeScreen extends StatelessWidget {
  static String route = "/home";
  HomeScreen({super.key});

  final view_models.OfferBannerVM _offerBanner = view_models.OfferBannerVM(
      title: "Super Discounts",
      off: "50%",
      endTime: DateTime.now(),
      imageUrl:
          "https://www.colins.com.tr/Themes/Branch/Content/newyear2022/images/01-tr.jpg");

  final view_models.TitleGroup categoryTitle = view_models.TitleGroup(
      title: "Kategoriler", actionLabel: "Tüm Kategoriler", actionOnTab: () {});

  final view_models.TitleGroup flashSaleTitle = view_models.TitleGroup(
      title: "Çok Satılanlar", actionLabel: "Daha Fazla", actionOnTab: () {});

  final view_models.TitleGroup megaSaleTitle =
      view_models.TitleGroup(title: "İndirimdekiler", actionOnTab: () {});

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
          child: Column(children: [
        widgets.OfferBanner(_offerBanner),
        widgets.TitleGroup(categoryTitle),
        widgets.TitleGroup(megaSaleTitle),
        widgets.TitleGroup(flashSaleTitle)
      ])),
    );
  }
}
