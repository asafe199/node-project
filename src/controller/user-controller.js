const repository = require('../repository/user-repository');
const mongoose = require('mongoose')
exports.get = async (req, res, next) => {
    try {
        const id = req.params.id;
        let data = await repository.findById(id);
        if (data) {
            res.status(200).send({
                data: data
            });
        } else {
            res.status(204).send({
                data: "User not Found"
            });
        }
    } catch (e) {
        res.status(500).send({
            data: e
        });
    }
};

exports.getAll = async (req, res, next) => {
    try {
        let users = await repository.findAll();
        res.status(200).send({
            data: users
        });
    }catch (e) {
        res.status(500).send({
            data: e
        });
    }
}

exports.delete = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await repository.delete(id);
        if (data) {
            res.status(200).send({
                data: "Success"
            });
        } else {
            res.status(204).send({
                data: "User not Found"
            });
        }
    } catch (e) {
        res.status(500).send({
            data: e
        });
    }
};

exports.post = async (req, res) => {
    try {
        await repository.create(req.body);
        res.status(201).send({
            data: "User created successfully"
        });
    } catch (e) {
        let err = e instanceof mongoose.Error.ValidationError;
        res.status(err ? 400 : 500).send({
            data: e
        });
    }
};

exports.put = async (req, res, next) => {
    try {
        await repository.update(req.body);
        res.status(200);
    } catch (e){
        res.status(500).send({
            data: e
        });
    }
}
