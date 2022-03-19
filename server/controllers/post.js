const db = require('../models')

 function index(req,res){
    res.send('Post Page here!'),
    console.log(db.Posts)
}

module.exports = {
    index,
    
}