const express = require('express');
const Router = express.Router();
const Product = require('../models/Products-model');
const Category = require("../models/Category-model")
const authGurd = require('../authgurd/authGurd');
const adminMiddleWire = require('../authgurd/addminmiddlewere');
const fs = require('fs');
const { upload } = require("../controles/FileUpload");


// create product 

Router.post('/product/create', authGurd, adminMiddleWire, upload.array('files'), async (req, res) => {

    const { name, price, description, category, quantity } = req.body;

    let productPicture = [];

    if (req.files.length > 0) {

        productPicture = req.files.map((file) => {
            return { img: file.filename }
        });
    }

    try {

        const product = await new Product({
            name,
            slug: name.split(" ").join("-"),
            price,
            description,
            productPicture,
            createdBy: req.user_id,
            category,
            quantity
        });

        const updateProduct = await product.save();
        res.status(200).json(updateProduct);

    } catch (error) {

        res.status(400).json(error);
    }
});


// Get Products

Router.get("/products", async (req, res) => {

    try {

        const products = await Product.find({}).populate('category');
        res.status(200).json(products);

    } catch (error) {

        res.status(400).json("could not fatch data");
    }
})

// update product 

Router.put('/product/update/:productId', authGurd, adminMiddleWire, upload.array('files'), async (req, res) => {

    const { name, price, description, category, quantity } = req.body;
    const productId = req.params.productId
    let productPicture = [];

    if (req.files.length > 0) {

        const product = await Product.findById(productId);

        product.productPicture.map((img) => {

            const oldPhoto = img.img;
            const uploadDir = "uploads/";
            const oldPhotoWithPath = uploadDir + oldPhoto

            if (oldPhoto) {

                if (fs.existsSync(oldPhotoWithPath)) {

                    fs.unlink(oldPhotoWithPath, (err) => {
                        console.log("file deleted");
                    });
                }

            } else {

                console.log("oldPhoto is not exist");
            }

        });

        productPicture = req.files.map((file) => {
            return { img: file.filename }
        });

        try {

            const updateProduct = await Product.findOneAndUpdate({ _id: productId }, {
                $set: {
                    name,
                    price,
                    description,
                    quantity,
                    category,
                    productPicture

                }
            }, { new: true })

            res.status(200).json(updateProduct);

        } catch (error) {

            res.status(400).json(error);
        }

    } else {

        try {

            const updateProduct = await Product.findOneAndUpdate({ _id: productId }, {
                $set: {
                    name,
                    price,
                    description,
                    quantity,
                    category
                }
            }, { new: true });

            res.status(200).json(updateProduct);

        } catch (error) {

            res.status(400).json(error);
        }
    }
});


// get product by category

Router.get("/products/:slug", async (req, res) => {

    try {

        const slug = req.params.slug
        const category = await Category.findOne({ slug: slug }).select("_id type");

        if (category) {

            const products = await Product.find({ category: category._id });

            if (category.type !== "store") {

                res.status(200).json(products);

            } else {

                res.status(200).json({
                    products,
                    productByPrice: {
                        under5k: products.filter(product => product.price <= 5000),
                        under10k: products.filter(product => product.price > 5000 && product.price <= 10000),
                        under15k: products.filter(product => product.price > 10000 && product.price <= 15000),
                        under20k: products.filter(product => product.price > 15000 && product.price <= 20000),
                        under30k: products.filter(product => product.price > 20000 && product.price <= 30000),
                        up30k: products.filter(product => product.price > 30000),
                    }
                });
            }

        } else {

            res.status(400).json('Category is not available');
        }

    } catch (error) {

        res.status(400).json("could not fatch data");
    }


});

// get single product details

Router.get("/product/:productId", async (req, res) => {

    try {

        const product = await Product.findById(req.params.productId).populate("category");

        const parentCategories = []

        if (product) {

            const parentCategory = await Category.findById(product.category.parentId);
            parentCategory && parentCategories.push(parentCategory);

            if (parentCategory) {

                const superparentCategory = await Category.findById(parentCategory.parentId);
                parentCategories.push(superparentCategory);
            }

        }

        res.status(200).json({ product, parentCategories });

    } catch (error) {

        res.status(500).json(error);
    }


})


// delete product 

Router.delete("/product/delete/:productId", authGurd, adminMiddleWire, async (req, res) => {

    const param = req.params.productId

    try {

        const product = await Product.findById(param);

        product.productPicture.map((img) => {

            const oldPhoto = img.img;
            const uploadDir = "uploads/";
            const oldPhotoWithPath = uploadDir + oldPhoto

            if (oldPhoto) {

                if (fs.existsSync(oldPhotoWithPath)) {

                    fs.unlink(oldPhotoWithPath, (err) => {
                        console.log("file deleted");
                    });
                }

            } else {

                console.log("oldPhoto is not exist");
            }

        })

        await Product.deleteOne({ _id: param });
        res.status(200).json("product deleted");

    } catch (error) {

        console.log(error);
        res.status(400).json(error)
    }

})



module.exports = Router;