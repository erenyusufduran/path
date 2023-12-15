// ignore_for_file: must_be_immutable

import "../widgets/widgets.dart" as widgets;
import 'package:flutter/material.dart';
import "../view_models/view_models.dart" as view_models;
import "../utils/utils.dart" as utils;

class OfferBanner extends StatelessWidget {
  view_models.OfferBannerVM offerBanner;

  OfferBanner(this.offerBanner, {super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.only(left: 24),
      margin: const EdgeInsets.all(16),
      height: 206,
      width: double.infinity,
      decoration: BoxDecoration(
          image: DecorationImage(
              image: NetworkImage(offerBanner.imageUrl),
              fit: BoxFit.cover,
              colorFilter: ColorFilter.mode(
                  Colors.black.withOpacity(0.6), BlendMode.dstATop)),
          color: Colors.black,
          borderRadius: BorderRadius.circular(5)),
      child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: 209,
              margin: const EdgeInsets.only(top: 32, bottom: 10),
              child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      offerBanner.title,
                      style: Theme.of(context)
                          .textTheme
                          .displayMedium!
                          .copyWith(color: utils.Colors.light),
                    ),
                    Text(
                      "${offerBanner.off} Discount!",
                      style: Theme.of(context)
                          .textTheme
                          .displayMedium!
                          .copyWith(color: utils.Colors.light),
                    )
                  ]),
            ),
            widgets.PromotionPeriod()
          ]),
    );
  }
}
