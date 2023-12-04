const { Router }= require("express");
const {findStock, allProducts} = require('../controllers/getProducts')

const productsRoutes = Router();

// Handle the /products endpoint
productsRoutes.get("/", async (req, res) =>{
    try {
        return res.status(200).send(await findStock())
    } catch (error) {}
    // const {nombre}= req.query;
    // console.log("hola");

    // try {
    //     if(nombre){
    //         const productSearch = await findProducts(nombre)
    //         if(!productSearch){ 
    //             return res.status(400).send({error:"No such product found"})
    //         }else{
    //             return res.status(200).send(productSearch)
    //         }
    //     }
    //     else {
    //          return res.status(201).send(await findStock())
    //     }
            
    // } catch (error) {
    //     return res.status(500).send({error: error.message})

    // }
});
// Add more routes for the /users endpoint as needed

module.exports = productsRoutes;