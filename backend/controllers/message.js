const Models = require("../models/index");
const user = require("../models/user");

exports.getAllMessage = (req, res, next) => {
  const message = Models.Message.findAll({ order: [["id", "DESC"]] })
    .then((message) => res.status(200).json(message))
    .catch((error) => res.status(400).json({ error }));
};

exports.newMessage = (req, res, next) => {
  let attachment;
  if (req.file != undefined) {
    attachment = `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`;
  } else {
    attachment == null;
  }
  console.log(req.body);
  const message = Models.Message.create({
    UserId: res.locals.userId,
    title: req.body.title,
    content: req.body.content,
    attachment: attachment,
  })
    .then((message) => res.status(201).json(message))
    .catch((err) => res.status(400).json(err));
};

exports.deleteMessage = (req, res, next) => {
  Models.Message.destroy({ where: { id: req.params.id } })
    .then(() => res.status(200).json({ message: "Message supprimé " }))
    .catch((err) => res.status(400).json(err));
};
