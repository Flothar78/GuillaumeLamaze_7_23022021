const express = require("express");
const router = express.Router();
const messageControllers = require("../controllers/message");
const auth = require("../middleware/auth");

router.get("/", messageControllers.getAllMessage);
router.post("/", messageControllers.newMessage);

module.exports = router;
