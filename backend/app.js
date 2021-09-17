const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const auth = require("./middleware/auth");
const multer = require("./middleware/multer");

const userRoutes = require("./routes/user");
const messageRoutes = require("./routes/message");
const commentRoutes = require("./routes/comment");

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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/users", userRoutes);
app.use("/messages", multer, messageRoutes);
app.use("/comments", commentRoutes);

module.exports = app;
