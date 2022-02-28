const db = require("../models")

const profileInfos = (req,res) => {
  try{
    const foundUser = await db.Profile.findById(req.params.id)
    return res.status(200).json({
      message:"found user profile",
      data: foundUser
    })
  }
  catch(err) {
    console.log(err)
    return res
      .status(500)
      .json({status:500,
        message: "internal err for find user profile"})
        }
  }
}

const userPosts = (req, res) =>{
  db.Profile.findById(req.params.id, (err, foundProfile) => {
    if(err) {
      return res.status(400).json({
        message: "cannot find profile by id",
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

module.export{
profileInfos,
userPosts,

}
