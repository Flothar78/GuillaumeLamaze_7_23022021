const express = require("express");
const app = express();

const path = require("path");
const userRoutes = require("./routes/user");
const userMessages = require("./routes/message");

const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("database_development", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

try {
  sequelize.authenticate();
  console.log("Connecté à la base de données MySQL!");
} catch (error) {
  console.error("Impossible de se connecter, erreur suivante :", error);
}

app.use(express.json());

app.use("/users", userRoutes);
app.use("/messages", userMessages);

module.exports = app;
