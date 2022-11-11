const express = require('express');
const router = express.Router();
const User = require('../models/UserModel')

//register
router.post('/register', async (req, res) => {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        try{
            const user = await newUser.save();
            res.status(200).json(user);
        }catch(err){
            res.status(500).json(err);
        }
})

//login
router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({email:req.body.email});
        !user && res.status(404).send("User not found")
        
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;