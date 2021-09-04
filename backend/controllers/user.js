const bcrypt = require("bcrypt");
const Models = require("../models/index");

exports.signup = (req, res, next) => {
  const user = Models.User.create({
    prenom: "aze",
    nom: "rere",
    fonction: "rerereG",
    email: "Dasvdsvs",
    password: "vfsvfs",
    isAdmin: 0,
  })
    .then(() => res.status(200).json(user))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAll = (req, res, next) => {
  Models.User.findAll()
    .then((users) => {
      console.log(users);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
};
