const { Router }= require("express");
const { findUser, allUsers, nombreProducto } = require('../controllers/getUsers')
const usersRoutes = Router();

// Handle the /price endpoint
usersRoutes.get("/", async (req, res) =>{
    try {
        return res.status(201).send(await allUsers())
    } catch (error) {
        res.status(404).send({error})
    }
})

usersRoutes.get("/:id", async(req, res)=>{
    let {id}= req.params
    let {nombre}= req.query
    try{
        const userById = await findUser(id)
        if(nombre){
            console.log("nombre:", nombre)
            return res.status(200).send(await nombreProducto(nombre, id))
        }
        return res.status(200).send(userById)
    } catch (error){
        res.status(400).send(error)
    }
});
// Add more routes for the /price endpoint as needed


module.exports = usersRoutes;