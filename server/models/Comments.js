const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
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
        quack: {
            type: Schema.Types.ObjectId, 
            ref: "Quacks",
        }
    },
    {
        timestamps: true
    }
)

const Comments = mongoose.model("Comments", commentSchema);

module.exports = Comments;