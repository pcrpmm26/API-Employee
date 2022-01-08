const express = require('express');
const app = express.Router();

app.get("/",(req,res)=>{
    res.send("Page Admin Root");
});

app.get("/login",(req,res)=>{
    res.send("Page Admin Root");
});

app.get("/register",(req,res)=>{
    res.send("Page Admin Register");
});

module.exports = app;