const express = require('express');
const app = express.Router();
const repository = require("../controller/autenticate-controller")

app.use(async function timer(req, res, next) {
    console.log(`Req : ${req.originalUrl}, Time:${new Date()}`);
});

app.post("/login", repository.login)
app.get("/refresh", repository.refreshToken)

module.exports = app;
