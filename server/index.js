const express = require('express');
const app = express();
const mongoose = require('mongoose');
const env = require("dotenv");
const userRouter = require('./routes/user-router');
const adminRouter = require('./routes/admin-router');
const categoryRoute = require("./routes/Category-route");
const productRoute = require("./routes/Products-router");
const cartRoute = require("./routes/Cart-router");
const pageRoute = require("./routes/CreatePage-router");
const orderRoute = require("./routes/Order-router");
const addressRoute = require("./routes/Address-router");
var cookieParser = require('cookie-parser');
const path = require('path');

app.use(cookieParser());


//enviroment variables setup
env.config();

//json data purse
app.use(express.json());

app.use(express.urlencoded({ extended: false }))

//app.use(express.static(path.join(__dirname, "uploads")))
app.use(express.static('uploads'));
// databess conection
mongoose.connect('mongodb://localhost:27017/myapp', () => { console.log("databess has been conected !") });

//Home route
app.get('/', (req, res) => {
    res.status(200).json({
        message: "hello"
    })
});

//user Route
app.use('/api', userRouter);
app.use('/api', adminRouter);
app.use('/api', categoryRoute);
app.use('/api', productRoute);
app.use('/api', cartRoute);
app.use('/api', pageRoute);
app.use('/api', addressRoute);
app.use('/api', orderRoute);

app.listen(process.env.PORT, () => { console.log(`server is running at 8000`) });
