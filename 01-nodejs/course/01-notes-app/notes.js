const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  debugger; // node --inspect-brk app.js add --> to chrome://inspect
  if (!duplicateNote) {
    notes.push({ title, body });
    console.log(chalk.green.inverse("Note Added!"));
    saveNotes(notes);
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const exceptRemovedNote = notes.filter((note) => note.title !== title);
  if (notes.length > exceptRemovedNote.length) {
    console.log(chalk.green.inverse("Note Removed!"));
    saveNotes(exceptRemovedNote);
  } else {
    console.log(chalk.red.inverse("Note note found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes: "));
  notes.forEach((note) =>
    console.log(`Title: ${note.title}, Description: ${note.body}`)
  );
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.green(`Title: ${note.title}, Description: ${note.body}`));
  } else {
    console.log(chalk.red("Note not found!"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

module.exports = { addNote, removeNote, listNotes, readNote };
