const express = require('express');
const router = express.Router();
const Messages = require('../models/MessageModel')

//new messages
router.post('', async (req, res) => {
    const newMessage = new Messages(req.body)

    try {
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router