import 'package:flutter/material.dart';

class PromotionPeriod extends StatelessWidget {
  const PromotionPeriod({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        time(context: context, label: "08"),
        seperator(),
        time(context: context, label: "34"),
        seperator(),
        time(context: context, label: "52"),
      ],
    );
  }

  Widget time({required BuildContext context, required String label}) {
    return Container(
      width: 42,
      height: 41,
      child: Center(
        child: Text(
          label,
          style: Theme.of(context).textTheme.headlineMedium,
        ),
      ),
      decoration: BoxDecoration(
          color: Colors.white, borderRadius: BorderRadius.circular(5)),
    );
  }

  Widget seperator() {
    return Container(
        margin: const EdgeInsets.symmetric(horizontal: 4),
        child: const Text(":",
            style: TextStyle(
                color: Colors.white,
                fontSize: 14,
                fontWeight: FontWeight.bold)));
  }
}
