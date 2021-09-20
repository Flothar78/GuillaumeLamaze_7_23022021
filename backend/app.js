const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const env = require("dotenv").config();
const userRoutes = require("./routes/user");
const messageRoutes = require("./routes/message");
const commentRoutes = require("./routes/comment");

////// Création d'e l'instance se sequelize avec nom et credentials ///////
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("database_development", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

/////// Connexion de l'application à la base données via sequelize
try {
  sequelize.authenticate();
  console.log("Connecté à la base de données MySQL!");
} catch (error) {
  console.error("Impossible de se connecter, erreur suivante :", error);
}

////// En-t^tes attendues en réponse aux requêtes du frontend //////
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

////// Intégration de différents modules //////
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

////// Middleware pour rendre utilisables simplement les données user du frontend //////
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

////// Déclaration des URL pour cheminement des requêtes côté serveur //////
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/users", userRoutes);
app.use("/messages", messageRoutes);
app.use("/comments", commentRoutes);

module.exports = app;
