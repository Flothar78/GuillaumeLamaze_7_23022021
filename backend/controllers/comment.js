const Models = require("../models/index");

exports.getAllComment = (req, res, next) => {
  let id = req.query.messageId;
  if (id) {
    const comment = Models.Comment.findAll({
      where: { messageId: id },
      include: [
        {
          model: Models.User,
          attributes: ["id", "userName"],
        },
      ],
      order: [["id", "DESC"]],
    }).then((comment) => res.status(200).json(comment));
  } else {
    const comment = Models.Comment.findAll({
      where: { messageId: id },
      include: [
        {
          model: Models.User,
          attributes: ["id", "userName"],
        },
      ],
      order: [["id", "DESC"]],
    }).then((comment) => res.status(200).json(comment));
  }
  const comment = Models.Comment.findAll({
    where: { messageId: id },
    include: [
      {
        model: Models.User,
        attributes: ["id", "userName"],
      },
    ],
    order: [["id", "DESC"]],
  })
    .then((comment) => {
      res.status(200).json(comment);
    })
    .catch(() => res.status(401).json());
};

exports.newComment = (req, res, next) => {
  const comment = Models.Comment.create({
    UserId: res.locals.userId,
    MessageId: req.body.messageId,
    content: req.body.content,
  })
    .then((comment) => res.status(201).json(comment))
    .catch((err) => res.status(401).json(err));
};

exports.deleteComment = (req, res, next) => {
  Models.Message.destroy({ where: { id: req.params.id } })
    .then(() => res.status(200).json({ message: "Commentaire supprimé " }))
    .catch((err) => res.status(400).json(err));
};
