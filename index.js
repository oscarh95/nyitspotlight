const express = require("express");
const app = express;

app.listn(8800, () => {
    console.log("Database connected")
})