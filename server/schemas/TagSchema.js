const mongoose = require('mongoose');

const TagSchema = mongoose.Schema({
    tag_body: {
        type: String,
        required: false
    }
});

const TagModel = mongoose.model("Tag", TagSchema, "tags");

module.exports = TagModel;