const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const messageControllers = require("../controllers/message");

router.get("/", messageControllers.getAllMessage);
router.post("/", auth, messageControllers.newMessage);
router.delete("/:id", auth, messageControllers.deleteMessage);

module.exports = router;
