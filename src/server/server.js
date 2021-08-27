const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config({ path: process.cwd() + '\\src\\.env' });
require('./mongo-connection').initMongo();

const USER_ROUTES = require('../routes/user-routes');
const AUTH_ROUTES = require('../routes/autenticate-routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.enable('trust proxy');

app.use("/user", USER_ROUTES);
app.use("/autenticate", AUTH_ROUTES);

app.use((req, res, next) => {
    const err = new Error('Resource not found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status).send({
        data: err.message
    });
});

module.exports = app;


