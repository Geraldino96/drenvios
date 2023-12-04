const Users = require('../models/users')

const allUsers = async () => {
    // console.log("Users")
    return await Users.find()
}

const findUser = async (id) => {
  // console.log("user id", id)
  const users = await allUsers()
  // console.log(users)
  const user = users.filter((user) => user.id == id);
  // console.log("user", user[0].metadata.precios_especiales)
  // const userById = await Users.find(id);
  if (!user) throw 'No se han encontrado usuarios con ese id';
  else return user;
}

const nombreProducto = async (nombre, id) => {
  const user = await findUser(id)
  // console.log("product", user[0])
  const pn = user[0].metadata.precios_especiales.filter((precios_especiales) => precios_especiales.nombre_producto === nombre);
  console.log("product name", pn)
  return pn
}

// Product list
// {
//   "nombre": "Nike Air Max 90",
//   "precio_base": 150.99,
//   "existencia": 25
// },
// {
//   "nombre": "Adidas Stan Smith",
//   "precio_base": 99.99,
//   "existencia": 15
// },
// {
//   "nombre": "Reebok Classic Leather",
//   "precio_base": 89.99,
//   "existencia": 12
// },
// {
//   "nombre": "New Balance 574",
//   "precio_base": 120.5,
//   "existencia": 18
// },
// {
//   "nombre": "Vans Old Skool",
//   "precio_base": 69.99,
//   "existencia": 10
// },
// {
//   "nombre": "Under Armour HOVR Sonic",
//   "precio_base": 109.99,
//   "existencia": 5
// },
// {
//   "nombre": "Skechers D'Lites",
//   "precio_base": 89.99,
//   "existencia": 22
// }


  module.exports = {
    allUsers,
    findUser,
    nombreProducto
  };