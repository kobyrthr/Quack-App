const middleware = require("../middlewares");
const auth = require("../controllers")
const router = require("express").Router();

router.post("/signup",auth.signUp);
router.post("/signin", auth.logIn);
router.get("/user", auth.userBoard)


module.exports = router;