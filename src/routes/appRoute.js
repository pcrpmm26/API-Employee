const express = require('express');
const app = express.Router();
const appController = require('../controllers/appController');

app.get("/",(req,res)=>{
    res.send("Page Root");
});

app.get("/login",appController.login);

//app.get("/product/:id/:type/",appController.getProduct);

app.post("/register",appController.register);

module.exports = app;