const path = require('path');
require('dotenv').config({path: './.env'});

/* === External Modules === */
const express = require('express');
const cors = require('cors');

/* === Internal Modules === */


/* === Instanced Modules === */
const app = express();
const routes = require('./routes');

/* === Configuration === */
const config = require('@Quack-App/config');

/* === Middleware === */
app.use(express.static(path.join('build')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

/* === Routes & Controllers === */

app.use("/api", require('./routes/profilePage'))
//app.all("/api/*", (req, res, next) => {
//	res.send("HOLD UP THESE ARE NOT THE APIS YOU ARE LOOKING FOR")
//})
//require('./routes/auth')


//Data connection:
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
/*
app.all("/api/*", (req, res, next) => {
	res.send("Not the backend APIs we want")
})*/
//SUPER AMAZING MAGICAL MONOREPO FULL STACK MIDDLEWARE
//This targets all routes that aren't specified by our specific server routes that are not "/api"
//ANY REQUESTS not covered by our routes will get piped into this middleware! This literally hands over control to React
/*
app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "build", "index.html"))
})
*/

/* === Server Listener === */
app.listen(config.PORT, () => {
    console.log(`My port is live at https://localhost:${config.PORT}`);
})