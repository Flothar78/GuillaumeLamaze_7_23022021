const Models = require("../models/index");
const bcrypt = require("bcrypt");
exports.signup = (req, res, next) => {
  /////// Hachage du mot de passe (10 fois ici) ///////////////////////////////////////////////////////////////
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = Models.User.create({
        prenom: req.body.prenom,
        nom: req.body.nom,
        email: req.body.email,
        password: hash,
        isAdmin: 0,
        /////// Création du mot de passe hashé pour stockage sécurisé sur base de données ////////
      })
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
