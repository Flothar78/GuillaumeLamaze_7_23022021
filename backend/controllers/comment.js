const Models = require("../models/index");

exports.getAllComment = (req, res, next) => {
  const comment = Models.Comment.findAll()
    .then((comment) => res.status(200).json(comment))
    .catch((error) => res.status(400).json({ error }));
};

exports.newComment = (req, res, next) => {
  const comment = Models.Comment.create({
    UserId: 33,
    MessageId: 37,
    content: req.body.comment,
  })
    .then((message) => res.status(201).json(message))
    .catch((err) => res.status(400).json(err));
};
