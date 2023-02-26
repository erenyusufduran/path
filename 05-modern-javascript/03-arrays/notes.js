// const notes = ["Note1", "Note2", "Note3"];

// console.log(notes.length);

// notes.forEach((note) => console.log(note));

// for (let i = 0; i < notes.length; i++) {
//   console.log(notes[i]);
// }

// console.log("-----------------");

// console.log(notes.indexOf("Note2"));

const notes = [
  {
    title: "Next Trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Habbits to work on",
    body: "Exercise, eating a bit better.",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
];

function findNote(notes, noteTitle) {
  const index = notes.findIndex((note, index) => {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
  return notes[index];
}

function _findNote(notes, noteTitle) {
  return notes.find((note, index) => {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
}

console.log("------------------");

function findNotes(notes, query) {
  return notes.filter((note, index) => {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
}

function sortNotes(notes) {
  notes.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
}

// console.log(findNotes(notes, "of"));

// console.log("------------------");

// const note = findNote(notes, "office modification");
// console.log(note);

// const _note = findNote(notes, "office modification");
// console.log(_note);

sortNotes(notes);
console.log(notes);
