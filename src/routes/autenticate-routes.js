const express = require('express');
const app = express.Router();
const repository = require("../controller/autenticate-controller")

app.post("/login", repository.login)
app.get("/refresh", repository.refreshToken)

module.exports = app;
