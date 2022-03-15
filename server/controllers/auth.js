const config = require("../config/auth.config")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const userSchema = require("../models/User");


const signUp = async (req,res) => {
	const user = new userSchema({
		username: req.body.username,
		password: bcrypt.hashSync(req.body.password, 10),
	})
	user.save((err, user) => {
		if (err) {
			res.status(500). send ({message: err});
			return;
		}
		res.send ({ message: "User was registered successfully!"});
	});
};


const logIn = async (req,res) => {
   userSchema.username.findOne({
	   username: req.body.username
   })
   .exec((err, user) => {
	   if (err) {
		   res.status(500).send({message: err});
	   }
	   if (!user) {
		   return res.status(404).send({message: "User Not Found"})
	   }

	   let passwordIsValid = bcrypt.compareSync(
		   req.body.password,
		   user.password
	   );
	   if(!passwordIsValid) {
		   return res.send(401).send({
			   accessToken: null,
			   message: "Wrong Password!"
		   });
	   }

	   let token = jwt.sign({id: user.id}, config.secret, {
		   expiresIn: 86400 // one day
	   });
	   
	   res.status(200).send({
		   id: user._id,
		   username: user.username,
		   accessToken: token
	   });
   });
};

module.exports = {
	signUp,
	logIn
}