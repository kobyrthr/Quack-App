const db = require("../models/User")

checkDuplicateUser = (req, res, next) => {
    db.User.findOne({
        username: req.body.username
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({message: err});
            return;
        }
        if (err) {
            res.status(400).send({message: "Username is already in use!"});
            return;
        };
    });
};

module.exports = checkDuplicateUser;