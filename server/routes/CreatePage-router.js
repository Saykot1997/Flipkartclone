const express = require('express');
const Router = express.Router();
const { upload } = require("../controles/FileUpload");
const Page = require("../models/Page-model");
const authGurd = require('../authgurd/authGurd');
const adminmiddlewere = require('../authgurd/addminmiddlewere');

//create page
Router.post("/page/create", authGurd, adminmiddlewere, upload.fields([{ name: "banners" }, { name: "products" }]), async (req, res) => {

    const { banners, products } = req.files;

    if (banners.length > 0) {
        req.body.banners = banners.map((banner) => ({
            img: banner.filename,
            navigateto: `/bannerClicked?categoryId=${req.body.category}&type=${req.body.type}`
        }))
    }
    if (products.length > 0) {
        req.body.products = banners.map((product) => ({
            img: product.filename,
            navigateto: `/productClicked?categoryId=${req.body.category}&type=${req.body.type}`
        }))
    }

    req.body.createdBy = req.user_id;

    const hasCategory = await Page.findOne({ category: req.body.category });

    if (hasCategory) {
        try {
            const updateCategory = await Page.findOneAndUpdate({ category: req.body.category }, req.body, { new: true });
            if (updateCategory) {
                res.status(200).json(updateCategory);
            } else {
                res.status(400).json("could not update page");
            }
        } catch (error) {
            res.status(400).json(error)
        }

    } else {
        try {
            const page = await new Page(req.body);
            const savePage = await page.save();
            res.status(200).json(savePage);
        } catch (error) {
            res.status(400).json(error);
        }
    }

});


// get page

Router.get("/page/:category/:type", async (req, res) => {
    try {
        const { category, type } = req.params;
        if (type === "page") {
            const page = await Page.findOne({ category: category });
            res.status(200).json(page);
        } else {
            res.status(400).json("bad request")
        }
    } catch (error) {
        res.status(400).json(error)
    }

})

Router.get("/pages", authGurd, adminmiddlewere, async (req, res) => {

    try {

        const pages = await Page.find({}).populate("category")
        res.status(200).json(pages);
    } catch (error) {
        res.status(400).json(error)
    }

})

module.exports = Router