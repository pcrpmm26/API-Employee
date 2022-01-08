const express = require('express');
const productController = require('../controllers/productController');
const app = express.Router();

app.get("/",productController.get);

app.get("/:id",productController.getid);

app.get("/name/:name",productController.getname);

app.get("/price/:price",productController.getprice);

app.post("/",productController.post);

app.put("/:id",productController.putid);

app.patch("/:id",productController.patchid);

app.delete("/:id",productController.deleteid);

module.exports = app;