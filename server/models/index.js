const mongoose = require("mongoose");
const db = mongoose.connection;
const dbUrl = process.env.MONGO_URL;

mongoose   
    .connect(dbUrl)
    .then(() => {
        console.log(`MongoDB connected at ${db.host}: ${db.port}.`)
    })
    .catch((err) => { 
        console.log(`MongoDB failed to connect. Error: ${err}`)
    });

module.export = {
    User: require("./User"),
    Profile: require("./Profile"),
    Posts: require("./Posts"),
    Comments: require("./Comments"),
    Quacks: require("./Quacks")
}