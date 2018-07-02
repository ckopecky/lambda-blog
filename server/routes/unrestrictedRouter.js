const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const User = require('../schemas/UserSchema');

//   "/api/user"

const tokenGenerator = (user) => {
    const options = {
        expiresIn: "24h"
    }

    const payload = {name: user.username};

    const secret = "Blog-writing is so much fun!";

    return jwt.sign(payload, secret, options);

}

const getRoot = (req, res) => {
    res.send({api: "api/users route can GET on root route"})
};

const register = (req, res) => {
    const { username, password } = req.body;
    User.create({ username, password })
        .then(user => {
            const token = tokenGenerator(user);
            res.status(201).json({message: `Welcome, ${user.username}`, token})
        })
        .catch(err => {
            res.status(500).json({Error: err.message});
        });
};

const login = (req, res) => {
    const { username, password } = req.body;
    User.findOne({username})
        .then(user => {
            if(!user){
                res.status(404).json({Error: "user not found"});
            }
            else{
                user
                    .validatePassword(password)
                    .then(match => {
                        if(match) {
                            const token = tokenGenerator(user);
                            res.status(200).json({Message: `Welcome, ${user.username}, have a token`, token });
                        }
                        else{
                            res.status(400).json({Message: "username/password combination not found in database"});
                        }
                    })
                    .catch(err => {
                        res.status(500).json({Error: err.message});
                    });
            }
        })
        .catch(err => {
            res.status(500).json({Error: err.message});
        });
};

router.route('/')
    .get(getRoot);

router.route('/register')
    .post(register);

router.route('/login')
    .post(login);






module.exports = router;