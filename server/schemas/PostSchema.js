const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    post_title: {
        type: String,
        required: true
    },
    post_body: {
        type: String,
        required: true
    }
});

const PostModel = mongoose.model("Post", PostSchema, "posts");

module.exports = PostModel;

