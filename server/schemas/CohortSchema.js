const mongoose = require('mongoose');

const CohortSchema = mongoose.Schema({
    cohort_name: {
        type: String,
        required: true
    }
});

const CohortModel = mongoose.model("Cohort", CohortSchema, "cohorts");

module.exports = CohortModel;