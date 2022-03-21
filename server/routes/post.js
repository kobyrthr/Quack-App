const router = require("express").Router();
const postCtrl = require('../controllers/post')

router.get('/',postCtrl.index)
router.post('/', postCtrl.createPost)
// router.put("/:id", postCtrl.updatePost),







module.exports = router