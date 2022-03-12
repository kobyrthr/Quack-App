const bcrypt = require("bcryptjs");

const register = async (req,res) => {
	try {
		const foundUser = await db.User.findOne({email: req.body.email})

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
				.json({status: 201, message: ""})
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