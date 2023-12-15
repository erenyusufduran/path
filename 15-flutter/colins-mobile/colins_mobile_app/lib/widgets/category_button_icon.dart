import 'package:flutter/material.dart';
import "../view_models/view_models.dart" as view_models;
import "../utils/utils.dart" as utils;

class CategoryButtonIcon extends StatelessWidget {
  final view_models.CategoryButtonIcon categoryButtonIcon;

  const CategoryButtonIcon(this.categoryButtonIcon, {super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(right: 12),
      height: 108,
      width: 70,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Container(
            margin: const EdgeInsets.only(bottom: 8),
            child: Icon(
              categoryButtonIcon.icon,
              color: utils.Colors.blue,
            ),
            width: 70,
            height: 70,
            decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(90),
                border: Border.all(color: utils.Colors.light, width: 1)),
          ),
          Text(
            categoryButtonIcon.label,
            style: TextStyle(
              fontSize: 10,
              color: utils.Colors.grey,
            ),
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }
}
