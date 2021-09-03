const express = require("express");
const app = express();

const users = require("./users.json");

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.post("/users", (req, res) => {
  const user = new User({
    prenom: user.prenom,
    nom: user.nom,
    fonction: user.metier,
    email: user.email,
    password: user.password,
    isAdmin: 0,
  });
  user
    .save()
    .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
    .catch((error) => res.status(400).json({ error }));
});

const { Sequelize } = require("sequelize");
console.log("coucou");
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

module.exports = app;
