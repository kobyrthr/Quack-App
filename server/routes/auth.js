const middleware = require("../middlewares");
const controller = require("../controllers")

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post("/auth/signup",[middleware.checkDuplicateUser],controller.signUp);
    app.post("/auth/signin", controller.logIn);
    app.get("/auth/user", controller.userBoard)
}