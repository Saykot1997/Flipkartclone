const express = require('express');
const Router = express.Router();
const User = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const validationfunc = require('../controles/validation')


//login route
Router.post('/signin', async (req, res) => {

    try {

        const user = await User.findOne({ email: req.body.email });

        if (user) {

            const varifyPassword = await bcrypt.compare(req.body.password, user.password);

            if (varifyPassword && user.role === "user") {

                const token = jwt.sign({ id: user._id, role: user.role }, process.env.TOKENSECRATE);
                const { password, ...others } = user._doc;
                res.status(200).json({ ...others, token });

            } else {

                res.status(400).json("something went wrong!");
            }

        } else {

            res.status(400).json("authentication fail");
        }

    } catch (error) {

        res.status(400).json(error);
    }

})

//register route
Router.post('/signup', validationfunc, async (req, res) => {

    const email = req.body.email;

    try {

        const user = await User.findOne({ email });

        if (user) {

            res.status(400).json("user alrady register");

        } else {

            const { firstName, lastName, email, password } = req.body;
            const hashPassword = await bcrypt.hash(password, 10);
            const saveAbleUser = new User(
                {
                    firstName,
                    lastName,
                    email,
                    password: hashPassword,
                    userName: firstName + new Date().getTime().toString()
                }
            );

            await saveAbleUser.save();
            res.status(200).json("user has been created ");
        }

    } catch (error) {

        res.status(400).json(error);
    }
})


module.exports = Router;