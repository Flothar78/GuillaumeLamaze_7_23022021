const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user");
const auth = require("../middleware/auth");

router.get("/", userControllers.getAll);
router.post("/signup", userControllers.signup);
router.post("/login", userControllers.login);
router.delete("/id", userControllers.deleteAccount);

module.exports = router;
