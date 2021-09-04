const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");

const Models = require("../models/index");

router.get("/", (req, res) => {
  Models.User.findAll()
    .then((users) => {
      console.log(users);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
