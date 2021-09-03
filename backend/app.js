const express = require("express");

const app = express();
const db = require("./config/config.json");

const { Sequelize } = require("sequelize");
console.log("coucou");
const sequelize = new Sequelize("database-development", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

try {
  sequelize.authenticate();
  console.log("Connecté à la base de données MySQL!");
} catch (error) {
  console.error("Impossible de se connecter, erreur suivante :", error);
}
