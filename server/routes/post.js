const router = require("express").Router();
const postCtrl = require('../controllers/post')

router.get('/',postCtrl.index)
router.post('/', postCtrl.createPost)






module.exports = router