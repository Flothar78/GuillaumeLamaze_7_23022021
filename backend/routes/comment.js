const express = require("express");
const router = express.Router();
const commentControllers = require("../controllers/comment");
const auth = require("../middleware/auth");

router.get("/", commentControllers.getAllComment);
router.post("/", auth, commentControllers.newComment);
router.delete("/:id", auth, commentControllers.deleteComment);
module.exports = router;
