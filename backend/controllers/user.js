const bcrypt = require("bcrypt");
const Models = require("../models/index");

exports.signup = (req, res, next) => {
  const user = Models.User.create({
    prenom: "Guillaume",
    nom: "Lamaze",
    email: "rpout@g.com",
    password: "qwerty",
    isAdmin: 0,
  })
    .then(() => res.status(200).json(user))
    .catch((error) => res.status(400).json({ error }));
};

exports.login = (req, res, next) => {
  const user = Models.User.findOne({
    where: {
      prenom: "Guillaume",
      nom: "Lamaze",
      email: "rpout@g.com",
      password: "qwerty",
      isAdmin: 0,
    },
  }).then((user) => {
    if (!user) {
      return res.status(401).json({ error: "Utilisateur non trouvé !" });
    }
    res.status(200).json({ user });
  });
};

exports.getAll = (req, res, next) => {
  Models.User.findAll()
    .then((users) => {
      console.log(users);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
};
