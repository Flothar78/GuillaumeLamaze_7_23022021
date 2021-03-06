const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Models = require("../models/index");
const user = require("../models/user");
////// Creation de utilisateur //////
exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = Models.User.create({
        userName: req.body.nom,
        email: req.body.email,
        password: hash,
        isAdmin: 0,
      })
        .then(() => res.status(201).json(user))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

//// Connexion utilisateur //////
exports.login = (req, res, next) => {
  Models.User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      //////comparaison entre mot de passe entré et mot de passe créé/hashé lors de signup //////
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            ////// Création du token pour chaque userId ////////////////////////////////////////////
            userId: user.id,
            isAdmin: user.isAdmin,
            email: user.email,
            username: user.userName,

            token: jwt.sign(
              { userId: user.id, isAdmin: user.isAdmin },
              "RANDOM_TOKEN_SECRET",
              {
                expiresIn: "24h",
              }
            ),
          });
        })
        .catch((error) => res.status(501).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.deleteAccount = (req, res, next) => {
  Models.User.destroy({ where: { id: res.locals.userId } }).then(() =>
    res.status(200).json({ message: "Compte supprimé " })
  );
};

exports.getAll = (req, res, next) => {
  Models.User.findAll()
    .then((users) => {
      res.sendStatus(200);
    })
    .catch((err) => res.status(401).json(err));
};
