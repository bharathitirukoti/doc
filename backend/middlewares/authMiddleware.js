const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // Example: check for a token
  // if (!req.headers.authorization) return res.status(401).send({ message: "Unauthorized" });
  next();
};