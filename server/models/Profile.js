const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        placeOfEmploy: {
            type: String,
        },
        biography: {
            type: String,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId, 
            ref: "User",
        },
        posts: {
            type: Schema.Types.ObjectId, 
            ref: "Posts",
        },
        comments: {
            type: Schema.Types.ObjectId, 
            ref: "Comments",
        },
        quacks: {
            type: Schema.Types.ObjectId, 
            ref: "Quacks",
        },
    }
)

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;