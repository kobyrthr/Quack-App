const router = require("express").Router();
const profilePage = require("../controllers/profilePage");
const testpost = require("../controllers/testPost")

//router.get("/", testpost.index),
router.get("/", profilePage.profileInfo),
router.get("/:id", profilePage.userPosts),
router.get("/:id/comments", profilePage.postComments),
router.post("/", profilePage.createPost),
router.put("/:id", profilePage.updatePost),
router.delete("/:id", profilePage.destroyPost)


module.exports = router;