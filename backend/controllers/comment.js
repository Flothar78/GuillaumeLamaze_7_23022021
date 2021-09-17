const Models = require("../models/index");

exports.getAllComment = (req, res, next) => {
  let id = req.query.messageId;
  if (id) {
    const comment = Models.Comment.findAll({ where: { messageId: id } }).then(
      (comment) => res.status(200).json(comment)
    );
  } else {
    const comment = Models.Comment.findAll().then((comment) =>
      res.status(200).json(comment)
    );
  }
  const comment = Models.Comment.findAll()
    .then((comment) => {
      res.status(200).json(comment);
    })
    .catch((error) => {
      error.status(401).json(error);
    });
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
