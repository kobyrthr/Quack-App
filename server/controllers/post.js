const Post = require('../models/Posts')

 function index(req,res){
    res.send('Post Page here!'),
    Post.find().exec((err,allPosts)=>{
        if (err){
            return res.status(400), json({
                message:"can't find all the posts",
                error:err
            })
        }
        else {
            // Post.create({
            //     content:"hi i'm a post"
            // }),
            console.log(allPosts)
        
        }
    }

    )
}

module.exports = {
    index,
    
}
