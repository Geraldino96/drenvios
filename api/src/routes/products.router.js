const { Router }= require("express");
const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/products.controller');

const productsRoutes= Router();

// Handle the /users endpoint
router.get('/', ProductsController.getAllProducts);

// Add more routes for the /users endpoint as needed

module.exports = productsRoutes;