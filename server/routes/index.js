const router = require("express").Router();
// const posts = require('../controllers/posts')

router.use("/auth", require("./auth"))
router.use("/post", require("./profilePage"))


module.exports = router;
