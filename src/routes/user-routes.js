const express = require('express');
const app = express.Router();
const autenticate = require('../repository/autenticate-repository');

const userController = require('../controller/user-controller')

app.post("/", userController.post);

app.use(async function timer(req, res, next) {
    console.log(`Req : ${req.originalUrl}, Time:${new Date()}`);
    await autenticate.isAuthenticate(req, res, next);
});

app.get("/", userController.getAll);
app.get("/:id", userController.get)
app.delete("/:id", userController.delete);
app.put("/", userController.put);

module.exports = app;
