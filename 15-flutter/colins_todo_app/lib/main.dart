import 'package:flutter/material.dart';

void main() => runApp(const TodoApp());

class TodoApp extends StatelessWidget {
  const TodoApp({super.key});
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // Application name
      title: 'Colins ToDo App',
      // Application theme data, you can set the colors for the application as
      // you want
      theme: ThemeData(
        primarySwatch: Colors.red,
      ),
      // A widget which will be started on application startup
      home: const TodoScreen(),
    );
  }
}

class TodoScreen extends StatefulWidget {
  const TodoScreen({super.key});

  @override
  State<TodoScreen> createState() => TodoScreenState();
}

class TodoScreenState extends State<TodoScreen> {
  List<String> todos = [];
  String newTodoText = "";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Colin's Todo App")),
      body: Padding(
          padding: const EdgeInsets.all(10),
          child:
              Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Container(
                margin: const EdgeInsets.only(bottom: 20),
                child: const Text("My Todos",
                    style: TextStyle(
                        fontSize: 26,
                        fontWeight: FontWeight.w300,
                        color: Colors.grey))),
            Row(
              children: [
                Expanded(
                    flex: 4,
                    child: TextField(
                      onChanged: ((value) {
                        setState(() {
                          newTodoText = value;
                        });
                      }),
                    )),
                const SizedBox(
                  width: 20,
                ),
                Expanded(
                    child: ElevatedButton(
                  onPressed: () {
                    setState(() {
                      todos.add(newTodoText);
                    });
                  },
                  style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.green,
                      minimumSize: const Size(double.infinity, 50)),
                  child: const Text("Add"),
                ))
              ],
            ),
            SizedBox(
                height: MediaQuery.of(context).size.height * 0.5,
                child: SingleChildScrollView(
                  child: Column(
                      children: todos
                          .map((todo) => ListTile(
                                leading: const Icon(Icons.today_outlined),
                                title: Text(todo),
                                trailing: IconButton(
                                    icon: const Icon(
                                        Icons.remove_circle_outline,
                                        color: Colors.red),
                                    onPressed: () {
                                      setState(() {
                                        todos = todos
                                            .where((t) => t != todo)
                                            .toList();
                                      });
                                    }),
                              ))
                          .toList()),
                ))
          ])),
    );
  }
}
