const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const USER_CONTROLLER = require('../controller/user');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.enable('trust proxy');

app.use("/user", USER_CONTROLLER);

app.use((req, res, next) => {
    const err = new Error('Resource not found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status)
        .send(
            {data: {message: err.message}}
        );
});

module.exports = app;


