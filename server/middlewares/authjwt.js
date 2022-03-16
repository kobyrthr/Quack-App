const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models/User");

verifyToken = (res, req, next) => {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(403).send({message: "No Token Provided"});
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({message: "Unauthorized!"});
        }
        req.userId = decoded.id;
        next();
    });
};

module.exports = verifyToken;