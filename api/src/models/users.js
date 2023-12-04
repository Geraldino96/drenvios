const { Schema, model }= require("mongoose");

const users = new Schema({
    id: Number,
    nombre: String,
    metadata: {
        precios_especiales: [
            {
                nombre_producto: String,
                precio_especial_personal: Number,
            },
            {
                nombre_producto: String,
                precio_especial_personal: Number,
            }
        ]
    },
})

const Users = model('Users', users);

module.exports = Users