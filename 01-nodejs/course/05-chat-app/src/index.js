const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

let count = 0;

io.on("connection", (socket) => {
  console.log("New Websocket Connection.");
  socket.emit("countUpdated", count);
  socket.on("increment", () => {
    count++;
    // socket.emit("countUpdated", count); --> this will emit for one client so we use below
    io.emit("countUpdated", count); // emit for everyone
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});
