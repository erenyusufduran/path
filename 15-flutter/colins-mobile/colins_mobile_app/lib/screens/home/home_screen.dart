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

  final List<view_models.CategoryButtonIcon> _categories = [
    view_models.CategoryButtonIcon(label: "Erkek T-Shirt", icon: Icons.man),
    view_models.CategoryButtonIcon(label: "Elbise", icon: Icons.woman),
    view_models.CategoryButtonIcon(label: "Çanta", icon: Icons.badge_outlined),
    view_models.CategoryButtonIcon(
        label: "Yeni Doğan Kıyafeetleri", icon: Icons.workspaces),
    view_models.CategoryButtonIcon(label: "Çocuk", icon: Icons.ac_unit),
    view_models.CategoryButtonIcon(label: "Üniversiteli", icon: Icons.ac_unit),
  ];

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
        SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 16),
            scrollDirection: Axis.horizontal,
            child: Row(
                children: _categories
                    .map((category) => widgets.CategoryButtonIcon(category))
                    .toList())),
        widgets.TitleGroup(flashSaleTitle)
      ])),
    );
  }
}
