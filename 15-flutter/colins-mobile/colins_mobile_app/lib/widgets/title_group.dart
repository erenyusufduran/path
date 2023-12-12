import 'package:flutter/material.dart';
import "../view_models/view_models.dart" as view_models;

class TitleGroup extends StatelessWidget {
  final view_models.TitleGroup titleGroup;

  const TitleGroup(this.titleGroup, {super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(left: 16, right: 16, top: 24, bottom: 12),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Text(
            titleGroup.title,
            style: Theme.of(context).textTheme.headlineSmall,
          ),
          if (titleGroup.actionLabel != null)
            (TextButton(
              child: Text(titleGroup.actionLabel.toString()),
              onPressed: titleGroup.actionOnTab,
            ))
        ],
      ),
    );
  }
}
