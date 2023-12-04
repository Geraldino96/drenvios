const { Schema, model }= require("mongoose");

const products = new Schema({
    nombre: String,
    precio_base: Number,
    enStock: Boolean,
    existencia: Number,
})

const Products = model('Products', products);

module.exports= Products