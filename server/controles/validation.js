const validator = require('validator');

const validationfunc = (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    if (validator.isEmpty(firstName)) {
        res.status(400).json("firstName is required")
    }
    if (!validator.isAlpha(firstName)) {
        res.status(400).json("firstName should be alphabetic")
    }
    if (validator.isEmpty(lastName)) {
        res.status(400).json("lastName is required")
    }
    if (!validator.isAlpha(lastName)) {
        res.status(400).json("lastName should be alphabetic")
    }
    if (!validator.isEmail(email)) {
        res.status(400).json("Email is not valid")
    }
    if (!validator.isStrongPassword(password)) {
        res.status(400).json("lowercase:1 upercase:1 number:1 symble:1 require minimus:8 carecter")
    }
    else {
        next()
    }
}

module.exports = validationfunc;