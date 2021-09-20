const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user");
const auth = require("../middleware/auth");

////// Les routes qu'emprunteront les requêtes user
router.get("/", userControllers.getAll);
router.post("/signup", userControllers.signup);
router.post("/login", userControllers.login);
router.delete("/", auth, userControllers.deleteAccount);

module.exports = router;
