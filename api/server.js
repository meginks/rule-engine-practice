const express = require("express");
const cors = require("cors");
const { output } = require("./rule.js");
const { outputAdmin } = require("./headshot.js");
const server = express();
server.use(express.json());
server.use(cors);

server.get("/", (req, res) => {
  res.send("<p>RUNNING</p>");
});

server.get("/output", (req, res) => {
  console.log(output);
});

server.get("/admin", (req, res) => {
  console.log(outputAdmin);
});

module.exports = server;
