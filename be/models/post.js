const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model(
    'Posts', //db name
    postSchema //db schema
);