const router = require("express").Router();
// const posts = require('../controllers/posts')

router.use("/auth", require("./auth"))
router.use("/profilepage", require("./profilePage"))
router.use("/post", require("./post"))


module.exports = router;
