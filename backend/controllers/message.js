const Models = require("../models/index");

exports.getAllMessage = (req, res, next) => {
  const message = Models.Message.findAll()
    .then((message) => res.status(200).json(message))
    .catch((error) => res.status(400).json({ error }));
};

exports.newMessage = (req, res, next) => {
  const message = Models.Message.create({
    UserId: 2,
    title: "test",
    content: "lesgens les gens !! les gens",
    attachment: "frountch",
  })
    .then((user) => res.status(201).json(user))
    .catch((error) => res.status(400).json({ error }));
};
