const jwt = require('jsonwebtoken');

module.exports.encode = async (data) => {
    let token = await jwt.sign(data, process.env.SECRET_KEY, {expiresIn: 5000});
    return "Bearer " + token;
}

module.exports.verify = (token) => {
    return jwt.verify(token, process.env.SECRET_KEY);
}

module.exports.decode = async (token) => {
    return await jwt.decode(token);
}

module.exports.isAuthenticate = async (req, res, next) => {
    let authorization = req.headers['authorization'];
    let bearer = authorization?.includes("Bearer ");
    try {
        if(bearer){
            let data = authorization?.replace("Bearer ", "");
            this.verify(data.trim());
            next();
        } else {
            res.status(401).send({
                data: "Bearer Token is Mandatory"
            });
        }
    } catch (e){
        res.status(401).send({
            data: e
        });
    }
}
