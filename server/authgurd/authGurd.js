const jwt = require("jsonwebtoken");

const authgurd = async (req, res, next) => {

    const token = req.cookies.jwt;

    try {
        const isvarified = await jwt.verify(token, process.env.TOKENSECRATE);

        if (isvarified) {
            req.user_id = isvarified.id
            req.body.role = isvarified.role

            next()
        } else {
            res.status(400).json('you need to login first !!')
        }
    }
    catch (error) {
        res.status(500).json('you need to login first !!')
    }
}

module.exports = authgurd