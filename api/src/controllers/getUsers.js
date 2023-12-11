const Users = require('../models/users')
const { allProducts } = require('./getProducts')


const allUsers = async () => {
    return await Users.find()
}

const findUser = async (id) => {
  const users = await allUsers()
  const user = users.filter((user) => user.id == id);
  if (!user) throw 'No se han encontrado usuarios con ese id';
  else return user;
}

const nombreProducto = async (nombre, id) => {
  const products = await allProducts()
  const precioB = products.filter((precio) => precio.nombre === nombre);
  const user = await findUser(id)
  const precios = user[0].metadata.precios_especiales
  const pn = precios.filter((precio) => precio.nombre_producto === nombre);
  if(pn.length >= 1 ){
    return pn
  } else {
    return precioB
  }

}

  module.exports = {
    allUsers,
    findUser,
    nombreProducto
  };