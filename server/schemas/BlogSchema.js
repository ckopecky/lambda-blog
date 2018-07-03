const mongoose = require('mongoose');

const definition = {
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
    },
    userId: {
        type: String
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
};

const options = {
    timestamps: true
}

const BlogSchema = new mongoose.Schema(definition, options);

const BlogModel = mongoose.model("Blog", BlogSchema);

module.exports = BlogModel;

