const express = require('express');
const Router = express.Router();
const UserAddress = require("../models/Address-model");
const authGurd = require('../authgurd/authGurd')


// address create

Router.post("/user/address/create", authGurd, async (req, res) => {

    const { address } = req.body;

    try {

        if (address) {

            const userAddress = await UserAddress.findOne({ user: req.user_id });

            if (!userAddress) {

                const createUserAddress = new UserAddress({
                    user: req.user_id,
                    address: address
                })

                const savedAddress = await createUserAddress.save();
                res.status(200).json(savedAddress);

            } else {

                res.status(400).json("Address already created");
            }

        } else {

            res.status(400).json("Address require !!")
        }

    } catch (error) {

        res.status(400).json(error);
    }
});


// get address 
Router.get("/user/address", authGurd, async (req, res) => {

    try {

        const address = await UserAddress.findOne({ user: req.user_id });
        res.status(200).json(address);

    } catch (error) {

        res.status(400).json(error);
    }
});


// update address 
Router.put("/user/address/update", authGurd, async (req, res) => {

    try {
        const { address } = req.body;

        if (address) {

            const updateAddress = await UserAddress.findOneAndUpdate({ user: req.user_id }, { address: req.body.address }, { new: true });
            res.status(200).json(updateAddress);

        } else {

            res.status(200).json("Dont have Address");
        }
    } catch (error) {

        res.status(400).json(error);
    }



});

module.exports = Router;