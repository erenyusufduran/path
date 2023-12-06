import 'package:flutter/material.dart';
import "dart:convert" as convert;
import "package:http/http.dart" as http;

import "../../../models/info.dart";
import "../../../models/episode.dart";

import "../../../widgets/episode_line.dart";

class EpisodesScreen extends StatefulWidget {
  const EpisodesScreen({Key? key}) : super(key: key);

  @override
  State<EpisodesScreen> createState() => _EpisodesScreenState();
}

class _EpisodesScreenState extends State<EpisodesScreen> {
  Info? _info;
  List<Episode> _episodes = [];
  String _errorMessage = "";
  bool _fetching = false;

  Future<void> getEpisodes() async {
    try {
      setState(() {
        _fetching = true;
      });
      var url = Uri.https("rickandmortyapi.com", "/api/episode");
      var response = await http.get(url);
      if (response.statusCode != 200) {
        throw "Service not working!";
      }
      var jsonResponse = convert.jsonDecode(response.body);

      Info responseInfo = Info(
        count: jsonResponse["info"]["count"],
        pages: jsonResponse["info"]["pages"],
        prev: jsonResponse["info"]["prev"],
        next: jsonResponse["info"]["next"],
      );

      List<Episode> responseEpisodes = [];

      for (var result in jsonResponse["results"] as List) {
        Episode resultEpisode = Episode(
            id: result["id"],
            name: result["name"],
            airDate: result["air_date"],
            episode: result["episode"],
            characters: result["characters"],
            url: result["url"],
            created: result["created"]);
        responseEpisodes.add(resultEpisode);
      }

      setState(() {
        _info = responseInfo;
        _episodes = responseEpisodes;
      });
    } catch (error) {
      setState(() {
        _errorMessage = error.toString();
      });
    } finally {
      setState(() {
        _fetching = false;
      });
    }
  }

  @override
  void initState() {
    getEpisodes();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Episodes"),
          actions: [
            if (_fetching)
              Container(
                  margin: EdgeInsets.all(20),
                  height: 20,
                  width: 15,
                  child: CircularProgressIndicator(color: Colors.black)),
            if (!_fetching)
              IconButton(
                icon: Icon(Icons.refresh),
                onPressed: getEpisodes,
              )
          ],
        ),
        body: SingleChildScrollView(
          child: Column(
            children: [
              ..._episodes.map((episode) => EpisodeLine(episode: episode)),
              if (_fetching)
                Container(
                    margin: EdgeInsets.only(top: 20),
                    child: Center(child: CircularProgressIndicator())),
            ],
          ),
        ));
  }
}
