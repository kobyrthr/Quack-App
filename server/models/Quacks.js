const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quackSchema = new Schema(
    {
        post: {
            type: Schema.Types.ObjectId, 
            ref: "Posts",
        },
        quacks: {
            type: [Schema.Types.ObjectId],
            ref:'Profile'
        },
        
    }
)

const Quacks = mongoose.model("Quacks", quackSchema);

module.exports = Quacks;