const express = require("express");
const router = express.Router();
const messageControllers = require("../controllers/message");

router.get("/", messageControllers.getAllMessage);
router.post("/", messageControllers.newMessage);

module.exports = router;
