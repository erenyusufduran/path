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

io.on("connection", (socket) => {
  console.log("New Websocket Connection.");

  socket.emit("message", "Welcome!");
  socket.broadcast.emit("message", "A new user has joined"); // emit for everybody except particular connection.

  socket.on("sendMessage", (message) => {
    io.emit("message", message);
  });

  socket.on("sendLocation", ({ latitude, longitude }) => {
    io.emit("message", `https://google.com/maps?q=${latitude},${longitude}`);
  });

  socket.on("disconnect", () => {
    io.emit("message", "A user has left!");
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});
