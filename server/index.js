require('dotenv').config()
const sequelize = require('./db');

const express = require('express');

const PORT = process.env.PORT;

const app = express();

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log('Server running on port ' + PORT);
        });
    }
    catch (e) {
        console.log(e);
    }
}

