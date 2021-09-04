const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const db = require("../app");
const User = require("../models/index");

router.get("/", (req, res) =>
  User.findAll()
    .then((users) => {
      console.log(users);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

module.exports = router;
