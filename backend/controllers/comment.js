const Models = require("../models/index");

exports.getAllComment = (req, res, next) => {
  const comment = Models.Comment.findAll().then((comment) =>
    res.status(200).json(comment)
  );
};

exports.newComment = (req, res, next) => {
  const comment = Models.Comment.create({
    UserId: res.locals.userId,
    MessageId: req.body.messageId,
    content: req.body.content,
  })
    .then((message) => res.status(201).json(message))
    .catch((err) => res.status(400).json(err));
};
