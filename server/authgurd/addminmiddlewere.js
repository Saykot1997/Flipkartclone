const adminMiddleWire = (req, res, next) => {

    if (req.body.role == "admin") {
        next()
    } else {
        res.status(400).json("Only admin can make this request")
    }
}

module.exports = adminMiddleWire