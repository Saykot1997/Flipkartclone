const express = require('express');
const Router = express.Router();
const Cart = require('../models/Cart-model');
const Order = require('../models/Order-model');
const authGurd = require('../authgurd/authGurd');

// create Order
Router.post('/order/add', authGurd, async (req, res) => { //

    const orderObj = {
        user: req.user_id,
        totalAmount: parseInt(req.body.totalAmount),
        ...req.body
    }

    try {

        const cart = await Cart.deleteOne({ user: req.user_id });

        if (cart) {

            const order = new Order(orderObj)
            const saveOrder = await order.save()
            res.status(200).json(saveOrder);

        } else {

            res.status(400).json("could not delete order")
        }

    } catch (error) {

        res.status(400).json(error)
    }



});


// get orders

Router.get('/orders', authGurd, async (req, res) => { // 

    try {

        const orders = await Order.find({ user: req.user_id }).populate("addressId items.productId user") //items.productId
        res.status(200).json(orders)

    } catch (error) {

        res.status(400).json(error)
    }
})


Router.get('/admin/orders', authGurd, async (req, res) => { // 

    try {

        const orders = await Order.find({}).populate("addressId items.productId user") //items.productId
        res.status(200).json(orders)

    } catch (error) {

        res.status(400).json(error)
    }
})

Router.put('/admin/orders/:orderId', authGurd, async (req, res) => { // 

    const { orderId } = req.params;
    const { orderStatus } = req.body;

    if (orderStatus[0].type === "delevered") {

        orderStatus[0].isComplete = true

    } else {

        orderStatus[0].isComplete = false
    }

    try {

        const order = await Order.findOneAndUpdate({ _id: orderId }, { $set: { orderStatus: req.body.orderStatus } }, { new: true })

        res.status(200).json(order)

    } catch (error) {

        res.status(400).json(error)
    }
})



module.exports = Router;