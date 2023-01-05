const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const postRoutes = require('./routes/post'); // importing routes

const app = express();

//app middlewares
app.use(bodyparser.json());
app.use(cors());

//route middlewares
app.use(postRoutes);

const PORT = 8000;
const DB_URL = `mongodb+srv://iamkw97:mngDB01@testMERN.m08ayt9.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(DB_URL)
    .then(() => {
        console.log("DB connection established");
    })
    .catch((err) => {
        console.log(`DB connection error :`, err);
    });

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
});