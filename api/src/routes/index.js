const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const productsRoutes= require("./products.js")
const usersRoutes= require("./users.js")

const router = Router();

router.use("/products", productsRoutes)
router.use("/price", usersRoutes)

module.exports = router;