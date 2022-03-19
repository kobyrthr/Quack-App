const config = require("../config/auth.config")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const User = require("../models/User");


const signUp = async (req,res) => {
	// console.log(req.body)
	console.log(User)
	// we need to encrypt our passwords
      // we can use the bcrypt libary for this
      // we need to import the library at the top of our file
      // first we need to generate salt
      const salt = bcrypt.genSaltSync(10)
      // salt is a random garbage we add to our encrypted passwords
      // the number we pass to genSaltSync determines how my salt
      // we are adding, the higher the number more secure, but the longer it takes
      // now we're going to generate the actual hashed password
      req.body.password = bcrypt.hashSync(req.body.password, salt)
    //   console.log(req.body)

	  User.findOne({username: req.body.username}, (error, userExists) => {
        if(userExists) {
          res.send('that username is taken')
        } else {
          User.create(req.body, (error, createdUser) => {
            // res.send('user created')
            console.log(createdUser)
            res.send(createdUser)
            if(error) {
              console.log(error)
            }
          })
        }
      })
    //   res.send(req.body)
	// const user = new User({
	// 	username: req.body.username,
	// 	password: req.body.password
	// })
	//  console.log(user)
	// //   User.create(req.body, (err, user) => {
	// 	    console.log(user)
	// 	 res.send("User Created")
	//   },
	//   console.log(User.find({username:"koby"}).exec())
	//  )

	// user.save((err, taco) => {
	// 	console.log(taco)
	// 	if (err) {
	// 		res.status(500). send ({message: err});
	// 		return;
	// 	}
	// 	res.send ({ message: "User was registered successfully!"});
	// });
};


const logIn = async (req,res) => {
   User.findOne({
	   username: req.body.username
   },(err, user) => {
		console.log(user)
		let passwordIsValid = bcrypt.compareSync(
			req.body.password,
			user.password
		);
		if(!passwordIsValid) {
			return res.send(401).send({
				accessToken: null,
				message: "Wrong Password!"
			});
		} else {
			let token = jwt.sign({id: user.id}, config.secret, {
				expiresIn: 86400 // one day
			})
			res.status(200).send({
				id: user._id,
				username: user.username,
				accessToken: token
			});
		}
   }).select("+password")
//    .exec((err, user) => {
// 	   console.log(user)
// 	   if (err) {
// 		   res.status(500).send({message: err});
// 	   }
// 	   if (!user) {
// 		   return res.status(404).send({message: "User Not Found"})
// 	   }


};

const userBoard = async (req, res) => {
	res.status(200).send("user content");
}

module.exports = {
	signUp,
	logIn,
	userBoard,
}