const db = require("../models/Posts")

 function index(req,res){
    res.send('Post Page here!'),
    db.Posts.find().exec((err,allPosts)=>{
        if (err){
            return res.status(400), json({
                message:"can't find all the posts",
                error:err
            })
        }
        else {console.log(allPosts)}
    }

    )
}

module.exports = {
    index,
}
