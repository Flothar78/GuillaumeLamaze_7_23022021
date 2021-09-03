const express = require("express");
const app = express();

const users = require("./app");

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.listen(3000, () => {
  console.log("Serveur à l écoute");
});
