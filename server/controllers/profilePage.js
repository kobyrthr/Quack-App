//const db = require("../models/index")
const Post = require("../models/Posts");
const Profile = require("../models/Profile")

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



const profileInfo = async (req,res) => {
  try{
    const foundUser = await Profile.findById(req.params.id)
    return res.status(200).json({
      message:"found user profile",
      data: foundUser
    })
    res.send(`the founduser is this ${foundUser}`);
  }
  catch(err) {
    return res
      .status(500)
      .json({status:500,
        message: "internal err for find user profile"})
        }

}

const userPosts = (req, res) =>{
  Profile.findById(req.params.id, (err, foundProfile) => {
    if(err) {
      return res.status(400).json({
        message: "cannot find profile",
        error: err
      })
    }
     Post.find({profile: foundProfile._id}, (err, foundPosts) => {
      if(err) {
        return res.status(400).json({
          message: "cannot find posts",
          error: err
        })
      }
      return res.status(200).json({
        message: "found all the user posts",
        data: foundPosts
      })
     })
      
    })
  }

const postComments = (req, res) =>{
  Post.findById(req.params.id, (err, foundPosts) => {
    if(err) {
      return res.status(400).json({
        message: "cannot find post",
        error: err
      })
    }
    foundPosts.comments.find().exec((err, allComments) => {
      if (err){
        return res.status(400),json({
          message: "cannot find all the user posts",
          error: err
        })
      }
      return res.status(200).json({
        message: "found the comments on the post",
        data: allComments
      })

    })

  })
}

const updatePost = (req, res) => {
  Post.findByIdAndUpdate (
    req.params.id,
    req.body,
    {new:true}, (err, updatedPost) => {
      if (err) {
        return res.status(400).json({
          message: "cannot update post",
          error: err
        })
      }
      return res.status(202).json({
        message: "post update is a success",
        data: updatedPost
      })
    }

  )
}

const destroyPost = (req, res) => {
    Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        if (err){
            return res.status(400).json({
                message: "cannot delete post",
                error: err,
            })
        }
        return res.status(200).json({
            message: "Post deletion is a Success!",
            data: deletedPost
        })
    })
}

module.exports = {
createPost,
profileInfo,
userPosts,
postComments,
updatePost,
destroyPost,
//index
}
