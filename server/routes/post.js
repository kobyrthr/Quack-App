const router = require("express").Router();
const postCtrl = require('../controllers/post')

router.get('/',postCtrl.index)






module.exports = router