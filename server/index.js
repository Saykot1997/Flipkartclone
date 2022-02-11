const express = require('express');
const app = express();
const cors = require('cors');
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

//enviroment variables setup
env.config();

// corse
app.use(cors());

//json data purse
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('uploads'));

// databess conection
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log("databess has been conected !") });

//Home route
app.get('/', (req, res) => { res.status(200).json("hello") });

//user Route
app.use('/api', userRouter);
app.use('/api', adminRouter);
app.use('/api', categoryRoute);
app.use('/api', productRoute);
app.use('/api', cartRoute);
app.use('/api', pageRoute);
app.use('/api', addressRoute);
app.use('/api', orderRoute);


// port number

const PORT = process.env.PORT || 5000;

// app host port

app.listen(PORT, () => {
    console.log("server is running");
})
