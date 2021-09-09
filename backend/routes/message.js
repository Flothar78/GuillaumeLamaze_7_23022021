const express = require("express");
const router = express.Router();
const messageControllers = require("../controllers/message");
const auth = require("../middleware/auth");

router.get("/", auth, messageControllers.getAllMessage);
router.post("/", auth, messageControllers.newMessage);

module.exports = router;
