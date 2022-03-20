const Post = require('../models/Posts')

 function index(req,res){
    // res.send('Post Page here!'),
    Post.find().exec((err,allPosts)=>{
        if (err){
            return res.status(400), json({
                message:"can't find all the posts",
                error:err
            })
        }
        return res.status(200).json({
            message: "Success!",
            data: allPosts, 
        })
    }

    )
}


const createPost =(req, res) => {
    Post.create(req.body, (err, savedPost) => {
      if(err){
        return res.status(400).json({
          message: "Cannot save the post",
          error: err
        })
      }
      console.log(savedPost);
      return res.status(201).json({
        message:"successful in creating the post",
        data: savedPost
      })
    })
  
  }

module.exports = {
    index,
    createPost
    
}