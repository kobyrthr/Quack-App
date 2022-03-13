const config = require("../config/auth.config")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const db = require("../models/User");

const signUp = async (req,res) => {
	const User = new User({
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

const registerPassword = async (req,res) => {
	try {
		const foundUser = await db.User.findOne({email: req.body.username})

		if(foundUser) {
			const salt = await bcrypt.genSaltSync(10);
			const hash = await bcrypt.hashSync(req.body.password, salt);

			const updatedUser = await db.User.findByIdAndUpdate(
				{_id: foundUser._id},
				{
					$set: {password: hash}
				},
				{new: true}
            )

			return res
				.status(201)
				.json({status: 201, message: "You are now registered!"})
		}

		return res
			.status(400)
			.json({status: 400, message: " Email Address is incorrect or not in the database."})

	} catch(err) {
		return res.status(500).json({
			status: 500,
			errorMsg: err,
			message: "Site Broke"
		})
	}
}

const login = async (req,res) => {
    try {
        const foundUser = await db.User.findOne
    }
}