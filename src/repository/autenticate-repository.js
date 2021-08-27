const jwt = require('jsonwebtoken');

module.exports.encode = async (data) => {
    return await jwt.sign(data, process.env.SECRET_KEY, {expiresIn: 300});
}

module.exports.verify = (token) => {
    return jwt.verify(token, process.env.SECRET_KEY);
}

module.exports.decode = async (token) => {
    return await jwt.decode(token);
}

module.exports.isAuthenticate = async (req, res, next) => {
    let authorization = req.headers['authorization'];
    try {
        if(authorization){
            this.verify(authorization);
            next();
        } else {
            res.status(401).send({
                data: "Token is Mandatory"
            });
        }
    } catch (e){
        res.status(401).send({
            data: e
        });
    }
}
