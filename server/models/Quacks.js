const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quackSchema = new Schema(
    {
        quack: {
            type: Boolean,
        },
        profile: {
            type: Schema.Types.ObjectId, 
            ref: "Profile",
        }
    }
)

const Quacks = mongoose.model("Quacks", quackSchema);

module.exports = Quacks;