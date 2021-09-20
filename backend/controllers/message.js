const Models = require("../models/index");
const user = require("../models/user");

/// Récupération de tous les messages au sein de la base de données via sequelize ///
exports.getAllMessage = (req, res, next) => {
  const message = Models.Message.findAll({
    include: [
      {
        model: Models.User,
        attributes: ["id", "userName"],
      },
    ],
    order: [["id", "DESC"]],
  })
    .then((message) => res.status(200).json(message))
    .catch((error) => res.status(400).json({ error }));
};

/// Création de message dans la db /////
exports.newMessage = (req, res, next) => {
  let attachment;
  if (req.file != undefined) {
    /// Voir si il y a une image à intéger ou non ///
    attachment = `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`;
  } else {
    attachment == null;
  }

  const message = Models.Message.create({
    UserId: res.locals.userId,
    title: req.body.title,
    content: req.body.content,
    attachment: attachment,
  })
    .then((message) => res.status(201).json(message))
    .catch((err) => res.status(400).json(err));
};
/// Suppression de message dans base de données selon id récupéré via URL ///
exports.deleteMessage = (req, res, next) => {
  let options = { where: { id: req.params.id } };
  if (!res.locals.isAdmin) {
    options.where.userId = res.locals.userId;
  }
  Models.Message.destroy(options)
    .then(() => res.status(200).json({ message: "Message supprimé " }))
    .catch((err) => res.status(400).json(err));
};
