const Models = require("../models/index");

exports.getAllMessage = (req, res, next) => {
  const message = Models.Message.findAll()
    .then((message) => res.status(200).json(message))
    .catch((error) => res.status(400).json({ error }));
};

exports.newMessage = (req, res, next) => {
  const message = Models.Message.create({
    UserId: 3,
    title: req.body.title,
    content: req.body.content,
    attachment: req.body.attachment,
  })
    .then((message) => res.status(200).json(message))
    .catch((err) => res.status(400).json(err));
};
