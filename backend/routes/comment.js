const express = require("express");
const router = express.Router();
const commentControllers = require("../controllers/comment");

router.get("/", commentControllers.getAllComment);
router.post("/", commentControllers.newComment);

module.exports = router;
