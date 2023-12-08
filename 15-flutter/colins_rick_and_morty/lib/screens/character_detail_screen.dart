import 'package:flutter/material.dart';
import '../models/character.dart';
import "../widgets/key_value.dart";

class CharacterDetailScreen extends StatelessWidget {
  const CharacterDetailScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final _character = ModalRoute.of(context)!.settings.arguments as Character;

    return Scaffold(
        appBar: AppBar(title: Text("Character Detail ${_character.name}")),
        body: SingleChildScrollView(
          padding: const EdgeInsets.only(bottom: 50),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(
                height: 30,
              ),
              Center(
                child: CircleAvatar(
                  radius: 50,
                  backgroundImage: NetworkImage(_character.image),
                  backgroundColor: Colors.transparent,
                ),
              ),
              const SizedBox(
                height: 30,
              ),
              Center(
                  child: Text(
                _character.name,
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              )),
              KeyValue(displayKey: "Status", displayValue: _character.status),
              KeyValue(displayKey: "Species", displayValue: _character.species),
              KeyValue(displayKey: "Type", displayValue: _character.type),
              KeyValue(displayKey: "Gender", displayValue: _character.gender),
              KeyValue(
                  displayKey: "Origin",
                  displayValue: _character.origin["name"]),
              KeyValue(
                  displayKey: "Location",
                  displayValue: _character.location["name"]),
              const SizedBox(
                height: 10,
              ),
              Container(
                  margin: const EdgeInsets.all(8),
                  child: Text(
                    "Episodes",
                    style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
                  )),
              Center(
                child: Wrap(
                  spacing: 5,
                  runSpacing: 4,
                  children: _character.episode
                      .map((episode) => CircleAvatar(
                          child: Text(episode.toString().split("/").last)))
                      .toList(),
                ),
              )
            ],
          ),
        ));
  }
}
