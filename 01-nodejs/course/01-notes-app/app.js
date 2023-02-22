const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// console.log(process.argv);

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title:", argv.title);
    console.log("Body: ", argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note!");
  },
});

yargs.command({
  command: "list",
  describe: "List the notes",
  handler: function () {
    console.log("Listing out all notes");
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});

yargs.parse();

console.log(yargs.argv);
