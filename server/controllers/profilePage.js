const db = require("../models")

const profileShow = (req,res) => {
  try{
    const foundUser = await db.Profile.findById(req.userId)
    return res.status(200).json({
      message:"found user profile",
      data: foundUser
    })
  }
  catch(err) {
    sondole.log(err)
    return res
      .status(500)
      .json({status:500,
        message: "internal err for find user profile"})
        }
  }
}

module.export{

}
