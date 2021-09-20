const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer");
const messageControllers = require("../controllers/message");

router.get("/", auth, multer, messageControllers.getAllMessage);
router.post("/", auth, multer, messageControllers.newMessage);
router.delete("/:id", auth, messageControllers.deleteMessage);

module.exports = router;
