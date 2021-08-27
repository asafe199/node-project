const token = require("../repository/autenticate-repository");
const user = require("../repository/user-repository");

module.exports.login = async (req, res, next) => {
    try {
        let data = await user.emailAndPassword(req.body.email, req.body.password);
        if (data) {
            await buildToken(data, res);
        } else {
            res.status(204).send({
                data: "Email or Password is Wrong"
            });
        }
    } catch (e) {
        res.status(500)
            .send({data: e}
            );
    }
}

module.exports.refreshToken = async (req, res, next) => {
    try {
        let authorization = req.headers['authorization'];
        if (authorization) {
            let data = token.verify(authorization);
            await buildToken(data, res);
        } else {
            res.status(403).send();
        }
    } catch (e) {
        res.status(401).send({data: e});
    }
}

async function buildToken(data, res) {
    let tokenEncode = await token.encode({
        id: data.id,
        name: data.name,
        email: data.email,
        roles: data.roles
    });
    res.status(200).send({
        data: {
            token: tokenEncode,
            user: {
                id: data.id,
                email: data.email
            }
        }
    })
}


