const express = require('express');
const Router = express.Router();
const Category = require('../models/Category-model')
const authGurd = require('../authgurd/authGurd')
const adminMiddleWire = require('../authgurd/addminmiddlewere');
const { upload } = require("../controles/FileUpload");
const Page = require("../models/Page-model");
const Product = require("../models/Products-model");

// category create
Router.post('/category/create', authGurd, adminMiddleWire, upload.single('files'), async (req, res) => {  //

    const categoryObject = {
        name: req.body.name,
        slug: req.body.name.split(" ").join("-"),
        type: req.body.type
    }

    if (req.file) {

        categoryObject.categoryImg = req.file.filename
    }

    try {

        if (!req.body.parentId) {

            const category = await new Category(categoryObject);
            const updateCategory = await category.save()
            res.status(200).json(updateCategory)

        } else {

            categoryObject.parentId = req.body.parentId

            const category = await new Category(categoryObject)
            const updateCategory = await category.save()
            res.status(200).json(updateCategory)
        }


    } catch (error) {

        res.status(500).json(error)
    }

})

//get category
Router.get('/categories', async (req, res) => {


    const createCategory = (categories, parentId = null) => {

        let category

        if (parentId === null) {

            category = categories.filter(cat => cat.parentId === undefined);

        } else {

            category = categories.filter(cat => cat.parentId === parentId)
        }


        const categoryList = category.map((cate) => ({
            _id: cate._id,
            name: cate.name,
            slug: cate.slug,
            parentId: cate.parentId,
            type: cate.type,
            children: createCategory(categories, cate._id.toString())
        }))


        return categoryList
    }

    try {

        const categories = await Category.find({})

        const categoryList = createCategory(categories)

        res.status(200).json(categoryList)

    } catch (error) {

        res.status(500).json(error)
    }
})


//get parent category
Router.post("/categories/parent", async (req, res) => {

    try {

        const category = await Category.findOne({ name: req.body.slug });

        if (category) {

            const parentCategory = await Category.findById(category.parentId);
            res.status(200).json(parentCategory.name);

        } else {

            res.status(400).json("could not find category")
        }

    } catch (error) {

        res.status(400).json("could not found category")
    }
});


// update category

Router.post('/category/update', upload.array('files'), async (req, res) => {

    const { _id, name, parentId, type } = req.body;
    const updatedCategories = [];

    try {

        if (name instanceof Array) {

            for (let i = 0; i < name.length; i++) {
                const category = {
                    name: name[i],
                    type: type[i]
                }
                if (parentId[i] !== "") {
                    category.parentId = parentId[i]
                }

                const updatedCategory = await Category.findOneAndUpdate({ _id: _id[i] }, category, { new: true });
                updatedCategories.push(updatedCategory);
            }
            res.status(200).json(updatedCategories);

        } else {

            const category = {
                name: name,
                type: type
            }
            if (parentId !== "") {
                category.parentId = parentId
            }

            const updatedCategory = await Category.findOneAndUpdate({ _id }, category, { new: true });
            res.status(200).json(updatedCategory);
        }


    } catch (error) {

        res.status(400).json("could not update")
    }


});


// delete category

Router.post('/category/delete', async (req, res) => {

    const ids = req.body.payload;

    try {

        const deletedIds = [];

        for (let id of ids) {

            const deletedId = await Category.findOneAndDelete({ _id: id._id });
            await Page.deleteMany({ category: id._id });
            await Product.deleteMany({ category: id._id });
            deletedIds.push(deletedId);
        };

        deletedIds.length == ids.length && res.status(200).json(deletedIds);

    } catch (error) {

        console.log(error)
        res.status(400).json("could not delete");
    }
})

module.exports = Router