require('dotenv').config()
const sequelize = require('./db');
const models = require('./models/models');
const express = require('express');

const app = express();

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(process.env.PORT, () => {
            console.log('Server running on port ' + process.env.PORT);
        });
    }
    catch (e) {
        console.log(e);
    }
}

start();