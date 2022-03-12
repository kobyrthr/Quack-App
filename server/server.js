const path = require('path');
require('dotenv').config({path: '../.env'});

/* === External Modules === */
const express = require('express');
const cors = require('cors');

/* === Internal Modules === */
// const routes = require('./routes');

/* === Instanced Modules === */
const app = express();

/* === Configuration === */
const config = require('@practice-monorepo/config');

/* === Middleware === */
app.use(express.static(path.join('build')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors);

/* === Routes & Controllers === */


/* === Server Listener === */
app.listen(config.PORT, () => {
    console.log(`My port is live at https://localhost:${config.PORT}`);
})