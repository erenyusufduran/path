import 'package:flutter/material.dart';
import "../models/episode.dart";
import "../widgets/key_value.dart";

class EpisodeDetailScreen extends StatelessWidget {
  const EpisodeDetailScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final _episode = ModalRoute.of(context)!.settings.arguments as Episode;

    return Scaffold(
      appBar: AppBar(title: Text(_episode.name)),
      body: SingleChildScrollView(
          child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          KeyValue(
              displayKey: "Episode Number",
              displayValue: _episode.id.toString()),
          KeyValue(displayKey: "Name", displayValue: _episode.name),
          KeyValue(displayKey: "Air Date", displayValue: _episode.airDate),
          KeyValue(displayKey: "Episode", displayValue: _episode.episode),
          Container(
              margin: const EdgeInsets.all(8),
              child: Text(
                "Characters",
                style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
              )),
          Center(
            child: Wrap(
              spacing: 5,
              runSpacing: 4,
              children: _episode.characters
                  .map((character) => CircleAvatar(
                        radius: 20,
                        backgroundImage: NetworkImage(
                            "https://rickandmortyapi.com/api/character/avatar/${character.toString().split("/").last}.jpeg"),
                        backgroundColor: Colors.transparent,
                      ))
                  .toList(),
            ),
          )
        ],
      )),
    );
  }
}
