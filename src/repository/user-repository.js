const moongose = require('mongoose');
const User = moongose.model('User');
const md5 = require('md5');

module.exports.findById = async (id) => {
    let user = await User.findById(id);
    if (user) {
        return {
            id: user._id,
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            age: user.age,
            roles: user.roles
        };
    } else {
        return null;
    }
}

module.exports.findAll = async _ => {
    let users = await User.find();
    const data = [];
    for (const user of users) {
        data.push({
            id: user._id,
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            age: user.age,
            roles: user.roles
        });
    }
    return data;
}

module.exports.create = (data) => {
    return User.create({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        age: data.age,
        phone: data.phone,
        password: md5(data.password + process.env.DATA_KEY)
    });
}

module.exports.update = (data) => {
    return User.findByIdAndUpdate({
        _id: data.id,
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        age: data.age,
        phone: data.phone,
    });
}

module.exports.delete = (id) => {
    return User.findByIdAndDelete(id);
}

module.exports.emailAndPassword = (email, password) => {
    return User.findOne({
        email: email,
        password: md5(password + process.env.DATA_KEY)
    });
}
