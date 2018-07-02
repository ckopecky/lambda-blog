const mongoose = require('mongoose');

const InterestSchema = mongoose.Schema({
    interest_body: {
        type: String,
        required: false
    }
});

const InterestModel = mongoose.model("Interest", InterestSchema, "interests");

module.exports = InterestModel;