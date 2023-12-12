import 'package:flutter/material.dart';
import "../view_models/view_models.dart" as view_models;

class OfferBanner extends StatelessWidget {
  view_models.OfferBannerVM offerBanner;

  OfferBanner(this.offerBanner, {super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.all(16),
      height: 206,
      width: double.infinity,
      decoration: BoxDecoration(
          color: Colors.red, borderRadius: BorderRadius.circular(5)),
      child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: 209,
              margin: const EdgeInsets.only(top: 32, left: 24),
              child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      offerBanner.title,
                      style: Theme.of(context)
                          .textTheme
                          .displayMedium!
                          .copyWith(color: Colors.white),
                    ),
                    Text(
                      "${offerBanner.off} Discount!",
                      style: Theme.of(context)
                          .textTheme
                          .displayMedium!
                          .copyWith(color: Colors.white),
                    )
                  ]),
            ),
            Row(
              children: [
                Text("08"),
                Text(":"),
                Text("34"),
                Text(":"),
                Text("52")
              ],
            )
          ]),
    );
  }
}
