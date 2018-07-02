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

