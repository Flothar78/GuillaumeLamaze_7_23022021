////// Appel du module jsonweb token //////////////////////////////////////////////////////////////////////
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    /////// Récupération du token et comparaison avec l'userID du corps de la requête ////////
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    res.locals.userId = userId;
    res.locals.isAdmin = decodedToken.isAdmin;
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch {
    res.status(406).json({
      error: new Error("Invalid request!"),
    });
  }
};
