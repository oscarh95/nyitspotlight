const express = require('express');
const router = express.Router();
const User = require('../models/UserModel')


router.get('/register', async (req, res) => {
    const user = await new User({
        username: "David Martinzez",
        email: "dave@gmail.com",
        password: "choom90"
    });

    await user.save();
    res.send("user logged")
})

module.exports = router;