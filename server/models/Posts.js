const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        content: {
            type: String,
            maxlength: 300,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        profile: {
            type: Schema.Types.ObjectId, 
            ref: "Profile",
        },
        comments: {
            type: Schema.Types.ObjectId, 
            ref: "Comments",
        },
        quack: {
            type: [String]
        }
    },
    {
        timestamps: true
    }
)

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;