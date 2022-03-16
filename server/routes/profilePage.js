const router = require("express").Router();
const profilePage = require("../controllers/profilePage");

router.get("/", profilePage.profileInfos),
router.get("/:id", profilePage.userPosts),
router.get("/:id/comments", profilePage.postComments),
router.put("/:id", profilePage.updatedPost),
router.delete("/:id", profilePage.destroyPost)

module.export = router;