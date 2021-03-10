var uuid = require("uuid");

var uniq_users = [];

var express = require("express");
var app = express();

app.use(express.static(__dirname + "/UI"));
const http = require("http").Server(app);

const io = require("socket.io")(http);
const port = process.env.PORT || 1123;

io.on("connection", (socket) => {
  //console.log(uuid.v4());
  var new_user = uuid.v4();
  var user_name = "";
  uniq_users.push(new_user);
  io.emit("unique_users", uniq_users.length);
  socket.on("disconnect", function () {
    const index = uniq_users.indexOf(new_user);
    if (index > -1) {
      uniq_users.splice(index, 1);

      io.emit("unique_users", uniq_users.length);
      io.emit("user_left", user_name);
    }
  });
  socket.on("msg", (msg) => {
    var data = { name: user_name, message: msg };
    io.emit("msg", data);
  });

  socket.on("user_joined", (msg) => {
    user_name = msg;
    io.emit("server_msg", msg);
  });
});

console.log(`running at http://localhost:${port}/`);
var server = http.listen(port);
