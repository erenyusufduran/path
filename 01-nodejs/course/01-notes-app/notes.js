const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your notes...";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push({ title, body });
    console.log(chalk.green.inverse("Note Added!"));
    saveNotes(notes);
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const exceptRemovedNote = notes.filter((note) => note.title !== title);
  if (notes.length > exceptRemovedNote.length) {
    console.log(chalk.green.inverse("Note Removed!"));
    saveNotes(exceptRemovedNote);
  } else {
    console.log(chalk.red.inverse("Note note found!"));
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

module.exports = { getNotes, addNote, removeNote };
