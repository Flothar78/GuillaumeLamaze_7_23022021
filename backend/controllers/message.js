const Models = require("../models/index");

exports.getAllSauce = (req, res, next) => {
  Models.Message.findAll()
    .then((messages) => res.status(200).json(messages))
    .catch((error) => res.status(400).json({ error }));
};
