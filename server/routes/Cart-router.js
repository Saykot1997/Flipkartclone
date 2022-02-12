const express = require('express');
const Router = express.Router();
const Cart = require('../models/Cart-model');
const authGurd = require('../authgurd/authGurd');



// create cart

Router.post('/cart/add', authGurd, async (req, res) => {

    const runUpdate = (condition, update) => {

        return new Promise((resolve, resect) => {

            Cart.findOneAndUpdate(condition, update, { upsert: true })
                .then(result => resolve(result))
                .catch(err => resect(err))
        })

    }

    try {

        const isCartExist = await Cart.findOne({ user: req.user_id });

        const cartObj = {
            user: req.user_id,
            cartItems: req.body.cartItems
        }


        if (isCartExist) {

            let promiseAray = [];

            req.body.cartItems.forEach((cartItem) => {

                const product = cartItem.product;

                const item = isCartExist.cartItems.find((c) => c.product == product);

                let condition, update;

                if (item) {

                    condition = { "user": req.user_id, "cartItems.product": product }
                    update = {
                        "$set": {
                            "cartItems.$": cartItem
                        }
                    }

                } else {

                    condition = { user: req.user_id }
                    update = {
                        "$push": {
                            "cartItems": cartItem
                        }
                    }
                }

                promiseAray.push(runUpdate(condition, update));

                Promise.all(promiseAray)
                    .then(result => res.status(200).json(result))
                    .catch(err => res.status(400).json(err))

            })


        } else {

            const cart = await new Cart(cartObj).save()
            res.status(200).json(cart)
        }


    } catch (error) {

        res.status(500).json(error)
    }

});


// grt cart 

Router.get('/cart/getcarts', authGurd, async (req, res) => { //  

    try {

        const cart = await Cart.findOne({ user: req.user_id }).populate('cartItems.product', '_id name price productPicture');


        let cartItems = [];
        cart.cartItems.forEach((item) => {
            cartItems.push(
                {
                    _id: item.product._id.toString(),
                    name: item.product.name,
                    img: item.product.productPicture[0].img,
                    price: item.product.price,
                    quantity: item.quantity
                }
            )
        })

        res.status(200).json(cartItems);

    } catch (error) {

        res.status(400).json(error)
    }
});


Router.post('/cart/delete', authGurd, async (req, res) => {

    const productId = req.body.productId;

    try {

        const cart = await Cart.findOne({ user: req.user_id });

        const deleteAbleCart = cart.cartItems.find((item) => item.product.toString() == productId);

        if (deleteAbleCart) {
            const UpdateAbleCart = cart.cartItems.filter((item) => item.product.toString() != deleteAbleCart.product.toString());
            const updateCart = await Cart.findOneAndUpdate({ user: req.user_id }, { cartItems: UpdateAbleCart }, { new: true });
            res.status(200).json(updateCart)
        }


    } catch (error) {

        res.status(400).json(error)
    }
});


// increase product quantity

Router.post("/cart/increment", authGurd, async (req, res) => {

    try {

        const productId = req.body.productId;
        const cart = await Cart.findOne({ user: req.user_id });

        if (cart.cartItems.length > 0) {

            const updateAbleCart = cart.cartItems.find((item) => item.product.toString() == productId);

            if (updateAbleCart) {

                const editedCart = {
                    ...updateAbleCart._doc,
                    quantity: parseInt(updateAbleCart.quantity) + 1
                }

                const updateCarts = cart.cartItems.map((item) => item.product == updateAbleCart.product ? editedCart : item);
                const result = await Cart.findOneAndUpdate({ user: req.user_id }, { cartItems: updateCarts }, { new: true })
                res.status(200).json(result);

            } else {

                res.status(400).json({ message: "product not found" })
            }

        } else {

            res.status(400).json("Cart is Empty")
        }

    } catch (error) {

        res.status(400).json(error)
    }
})


// dicriment 


Router.post("/cart/dicrement", authGurd, async (req, res) => {

    try {

        const productId = req.body.productId;
        const cart = await Cart.findOne({ user: req.user_id });

        if (cart.cartItems.length > 0) {

            const updateAbleCart = cart.cartItems.find((item) => item.product.toString() == productId);

            if (updateAbleCart) {

                const editedCart = {
                    ...updateAbleCart._doc,
                    quantity: parseInt(updateAbleCart.quantity) - 1
                }

                const updateCarts = cart.cartItems.map((item) => item.product == updateAbleCart.product ? editedCart : item);

                const result = await Cart.findOneAndUpdate({ user: req.user_id }, { cartItems: updateCarts }, { new: true })

                res.status(200).json(result);

            } else {

                res.status(400).json("no product found")
            }

        } else {

            res.status(400).json("no cart items found")
        }

    } catch (error) {

        res.status(400).json(error)
    }
})

module.exports = Router;