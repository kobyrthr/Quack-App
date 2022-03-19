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
        else {console.log(allPosts)}
    }

    )
}

module.exports = {
    index,
    
}

// .Posts.find().exec((err, allPosts) => {
//     if (err){
//       return res.status(400),json({
//         message: "cannot find all the user posts",
//         error: err
//       })
//     }
