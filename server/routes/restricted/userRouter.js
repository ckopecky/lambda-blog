const express = require('express');
const router = express.Router();

const User = require('../../schemas/UserSchema');

// "/api/auth/"

const get = (req, res) => {
    
};


const getProfile = (req, res) => {
    
};

// const postProfile = (req, res) => {
//  ** this will be done on unrestricted side in registration**
// };

const deleteProfile = (req, res) => {

};

const updateProfile = (req, res) => {

};

router.route('/user')
    .get(get);



router.route('/user/:id')
    .get(getProfile)
    .delete(deleteProfile)
    .put(updateProfile);






module.exports = router;