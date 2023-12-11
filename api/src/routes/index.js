const { Router } = require('express');
const productsRoutes= require("./products.js")
const usersRoutes= require("./users.js")

const router = Router();

router.use("/products", productsRoutes)
router.use("/price", usersRoutes)

module.exports = router;