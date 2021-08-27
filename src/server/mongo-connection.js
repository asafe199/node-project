const mongoConnection = require('mongoose');

module.exports.initMongo = _ => {
    mongoConnection.connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true});
    require('../model/user-model');
}
