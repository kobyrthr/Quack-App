const router = require("express").Router();
const profilePage = require("../controllers/profilePage");

router.get("/", profilePage.profileInfos),
router.get("/:id", profilePage.userPosts),
router.get("/:id/comments", profilePage.postComments),
router.put("/:id", profilePage.updatePost),
router.delete("/:id", profilePage.destroyPost),

module.exports = router;