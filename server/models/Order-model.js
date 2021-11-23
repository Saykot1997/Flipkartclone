const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    addressId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "UserAddress"
    },
    totalAmount: {
        type: Number,
        required: true
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Product"
            },
            payablePrice: {
                type: Number,
                required: true
            },
            purchasedQty: {
                type: Number,
                required: true
            }
        }
    ],
    paymentStatus: {
        type: String,
        required: true,
        enum: ["pending", "completed", "cancelled", "refund"]
    },
    paymentType: {
        type: String,
        enum: ["cod", "card"],
        default: "cod"
    },
    orderStatus: [{
        type: {
            type: String,
            enum: ["ordered", "packed", "shipped", "delevered"],
            default: "ordered"
        },
        date: {
            type: Date
        },
        isComplete: {
            type: Boolean,
            default: false
        }
    }
    ]
}, { timestamps: true })



module.exports = mongoose.model("Order", orderSchema)