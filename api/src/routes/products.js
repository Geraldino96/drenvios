const { Router }= require("express");
const {findStock, allProducts} = require('../controllers/getProducts')

const productsRoutes = Router();

// Handle the /products endpoint
productsRoutes.get("/", async (req, res) =>{
    try {
        return res.status(200).send(await allProducts())
    } catch (error) {
        throw error
    }
});


module.exports = productsRoutes;