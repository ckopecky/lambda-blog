const mongoose = require('mongoose');

const SkillsSchema = mongoose.Schema({
    skill_body: {
        type: String,
        required: false
    }
});

const SkillsModel = mongoose.model("Skill", SkillsSchema, "skills");

module.exports = SkillsModel;