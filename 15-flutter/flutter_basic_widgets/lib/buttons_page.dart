// ignore_for_file: deprecated_member_use

import 'package:flutter/material.dart';

class ButtonWidget extends StatelessWidget {
  const ButtonWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        TextButton(
            onPressed: () {},
            onLongPress: () {
              debugPrint("Long print");
            },
            style: TextButton.styleFrom(backgroundColor: Colors.red),
            child: const Text("Text Button")),
        TextButton.icon(
          onPressed: () {},
          style: ButtonStyle(
              backgroundColor: MaterialStateProperty.resolveWith((states) {
                if (states.contains(MaterialState.pressed)) {
                  return Colors.teal;
                }
                if (states.contains(MaterialState.hovered)) {
                  return Colors.orange;
                }
                return Colors.red;
              }),
              foregroundColor: MaterialStateProperty.all(Colors.yellow),
              overlayColor:
                  MaterialStateProperty.all(Colors.yellow.withOpacity(0.5))),
          icon: const Icon(Icons.add),
          label: const Text("With Icon"),
        ),
        ElevatedButton(
            onPressed: () {},
            style: ElevatedButton.styleFrom(
                primary: Colors.red, onPrimary: Colors.yellow),
            child: const Text("Elevated Button")),
        ElevatedButton.icon(
          onPressed: () {},
          icon: const Icon(Icons.add),
          label: const Text("With Icon"),
        ),
        OutlinedButton(onPressed: () {}, child: const Text("Outlined Button")),
        OutlinedButton.icon(
          onPressed: () {},
          icon: const Icon(Icons.add),
          label: const Text("Outlined Button with Icon"),
          style: OutlinedButton.styleFrom(
              shape: const RoundedRectangleBorder(
                  borderRadius: BorderRadius.all(Radius.circular(10))),
              side: const BorderSide(color: Colors.purple, width: 2)),
        )
      ],
    );
  }
}
