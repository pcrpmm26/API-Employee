const express = require('express');
const employeeController = require('../controllers/employeeController');
const app = express.Router();

app.get("/",employeeController.get);

app.get("/:id",employeeController.getid);

app.get("/tax/:sal",employeeController.getsal);

app.get("/retire/:age",employeeController.getage);

app.post("/",employeeController.post);

module.exports = app;