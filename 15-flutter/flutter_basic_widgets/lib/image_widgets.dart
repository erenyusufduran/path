import 'package:flutter/material.dart';

class ImageExamples extends StatelessWidget {
  const ImageExamples({super.key});

  @override
  Widget build(BuildContext context) {
    const String assetImg = "assets/images/cat.jpeg";
    const String imgUrl =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/481px-Cat03.jpg";
    const String logoUrl =
        "https://media.licdn.com/dms/image/D4D0BAQEDwaThwgj1Mw/company-logo_200_200/0/1690458611371/qroxquartz_logo?e=2147483647&v=beta&t=mXHislTiiNV_25len1DxqNvmwhBF9VPcLYk-Cg4VsZ0";
    return Center(
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        IntrinsicHeight(
            child: Row(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Expanded(
              child: Container(
                  color: Colors.red.shade300,
                  child: Image.asset(assetImg, fit: BoxFit.contain)),
            ),
            Expanded(
              child: Container(
                  color: Colors.red.shade300,
                  child: Image.network(imgUrl, fit: BoxFit.contain)),
            ),
            Expanded(
                child: Container(
                    color: Colors.red.shade300,
                    padding: const EdgeInsets.all(8.0),
                    child: const CircleAvatar(
                      backgroundImage: NetworkImage(logoUrl),
                    )))
          ],
        )),
        SizedBox(
          height: 200,
          child: FadeInImage.assetNetwork(
              fit: BoxFit.cover,
              placeholder: "assets/images/loading.gif",
              image: imgUrl),
        ),
        const Expanded(
            child: Padding(padding: EdgeInsets.all(8), child: Placeholder()))
      ]),
    );
  }
}
