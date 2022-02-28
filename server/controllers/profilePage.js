const db = require("../models/index")
const Create = require("../models/Posts")

const createPost =(req, res) => {
  Create.create(req.body, (err, savedPost) => {
    if(err){
      return res.status(400).json({
        message: "Cannot save the post",
        error: err
      })
    }
    return res.status(201).json({
      message:"successful in creating the post",
      data: savedPost
    })
  })

}



const profileInfo = async (req,res) => {
  try{
    const foundUser = await db.Profile.findById(req.params.id)
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
  db.Profile.findById(req.params.id, (err, foundProfile) => {
    if(err) {
      return res.status(400).json({
        message: "cannot find profile",
        error: err
      })
    }
    foundProfile.Posts.find().exec((err, allPosts) => {
      if (err){
        return res.status(400),json({
          message: "cannot find all the user posts",
          error: err
        })
      }
      return res.status(200).json({
        message: "found all the user posts",
        data: allPosts
      })

    })

  })
}

const postComments = (req, res) =>{
  db.Posts.findById(req.params.id, (err, foundPosts) => {
    if(err) {
      return res.status(400).json({
        message: "cannot find post",
        error: err
      })
    }
    foundPosts.Comments.find().exec((err, allComments) => {
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
  db.Posts.findByIdAndUpdate (
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
    db.Posts.findByIdAndDelete(req.params.id, (err, deletedPost) => {
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
