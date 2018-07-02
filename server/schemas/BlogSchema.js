const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    blog_title: {
        type: String,
        required: true
    },
    blog_body: {
        type: String,
        required: true
    },
    tag: {
        type: mongoose.Schema.Types.ObjectId,
        reqquired: true,
        ref: "Tag"
    }
});

const BlogModel = mongoose.model("Blog", BlogSchema, "blogs");

module.exports = BlogModel;

