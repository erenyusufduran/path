import 'package:flutter/material.dart';
import "../../widgets/widgets.dart" as widgets;
import "../../view_models/view_models.dart" as view_models;

class ExploreScreen extends StatelessWidget {
  ExploreScreen({super.key});

  final view_models.TitleGroup _manTitleGroup =
      view_models.TitleGroup(title: "Erkek");

  final List<view_models.CategoryButtonIcon> _manCategories = [
    view_models.CategoryButtonIcon(label: "Erkek T-Shirt", icon: Icons.man),
    view_models.CategoryButtonIcon(label: "Elbise", icon: Icons.woman),
    view_models.CategoryButtonIcon(label: "Çanta", icon: Icons.badge_outlined),
    view_models.CategoryButtonIcon(
        label: "Yeni Doğan Kıyafeetleri", icon: Icons.workspaces),
    view_models.CategoryButtonIcon(label: "Çocuk", icon: Icons.ac_unit),
    view_models.CategoryButtonIcon(label: "Üniversiteli", icon: Icons.ac_unit),
  ];

  final view_models.TitleGroup _womanTitleGroup =
      view_models.TitleGroup(title: "Kadın");

  final List<view_models.CategoryButtonIcon> _womanCategories = [
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
                hintText: "Ürün Ara", prefixIcon: Icon(Icons.search_outlined)),
          ),
          actions: [
            IconButton(
                onPressed: () {}, icon: const Icon(Icons.favorite_outline))
          ],
        ),
        body: SingleChildScrollView(
            child: Column(children: [
          widgets.TitleGroup(_manTitleGroup),
          Wrap(
              children: _manCategories
                  .map((category) => widgets.CategoryButtonIcon(category))
                  .toList()),
          widgets.TitleGroup(_womanTitleGroup),
          Wrap(
              children: _womanCategories
                  .map((category) => widgets.CategoryButtonIcon(category))
                  .toList())
        ])));
  }
}
