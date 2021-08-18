const express = require('express');
const app = express.Router();

app.use(function timer(req, res, next) {
    console.log(`Req : ${req.originalUrl}, Time:${new Date()}`);
    next();
});

app.get("/", function (req, res) {
    res.send({
        message: "GET USER OK"
    });
});

app.delete("/:id", function (req, res) {
    const id = req.params.id;
    res.send({
        response: id
    });
});

app.post("/", function (req, res) {
    res.status(201).send({
        message: "POST USER OK"
    });
});

module.exports = app;
