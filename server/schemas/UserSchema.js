const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 12;

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    cohort_name: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cohort",
        required: true
    },
    skills: {  
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill",
        required: false
    },
    job_interests: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Interest",
        required: false,
    },
    about: {
        type:String,
        required: false
    }

});

UserSchema.pre("save", function(next){
    return bcrypt
        .hash(this.password, SALT_ROUNDS)
        .then(hash => {
            this.password = hash;
            return next();
        })
        .catch(err => {
            return next(err.message);
        });
});

UserSchema.methods.validatePassword = function(userGuess) {
    return bcrypt.compare(userGuess, this.password);
}

const UserModel = mongoose.model("User", UserSchema, "users");



module.exports = UserModel;

