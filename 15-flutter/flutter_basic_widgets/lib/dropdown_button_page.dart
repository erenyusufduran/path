import 'package:flutter/material.dart';

class DropdownButtonPage extends StatefulWidget {
  const DropdownButtonPage({super.key});

  @override
  State<DropdownButtonPage> createState() => _DropdownButtonPageState();
}

class _DropdownButtonPageState extends State<DropdownButtonPage> {
  String? _selectedCity;
  final List<String> _allCities = ["Ankara", "Bursa", "Istanbul", "Izmir", "Sivas"];

  @override
  Widget build(BuildContext context) {
    return Center(
        child: DropdownButton<String>(
            hint: const Text("Select City"),
            icon: const Icon(Icons.arrow_downward),
            iconSize: 32,
            underline: Container(height: 4, color: Colors.purple),
            style: const TextStyle(color: Colors.red),
            onChanged: (String? currentCity) {
              setState(() {
                _selectedCity = currentCity;
              });
            },
            value: _selectedCity,
            items: _allCities
                .map((String currentCity) => DropdownMenuItem(
                    value: currentCity, child: Text(currentCity)))
                .toList()));
  }
}
