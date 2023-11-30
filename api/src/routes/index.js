const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const productsRoutes= require("./products.router.js")

const router = Router();

router.use("/products", productsRoutes)

module.exports = router;