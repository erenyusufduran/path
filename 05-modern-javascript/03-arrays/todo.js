// const notes = ["todo1", "todo2", "todo3", "todo4", "todo5"];

// console.log(`You have ${notes.length} notes.`);
// console.log(`Todo: ${notes[0]}`);

// notes.push("new note");
// notes.pop();

// notes.shift();
// notes.unshift("First note");

// console.log(notes);

// const notesV2 = notes.slice(1, 3);
// console.log(notesV2);

// const noteschallenge = ["todo1", "todo2", "todo3", "todo4", "todo5"];

// const eren = noteschallenge.splice(0, 3);
// console.log(eren);

// eren.push("Buy Coffee!");
// eren.shift();

// console.log(eren);

const todos = [
  {
    text: "Order cat food",
    completed: true,
  },
  {
    text: "Clean kitchen",
    completed: false,
  },
  {
    text: "Buy food",
    completed: true,
  },
  {
    text: "Do work",
    completed: false,
  },
  {
    text: "Exercise",
    completed: true,
  },
];

function deleteTodo(todos, todoText) {
  const index = todos.findIndex((todo) => {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
}

function getThingsToDo(todos) {
  return todos.filter((todo) => {
    return !_Itodo.completed;
  });
}

function sortTodos(todos) {
  todos.sort((a, b) => {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
}

// console.log(getThingsToDo(todos));

// deleteTodo(todos, "buy food");
// console.log(todos);

sortTodos(todos);
console.log(todos);
