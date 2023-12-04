const Products = require('../models/products')

const allProducts = async () => {
    return await Products.find()
}

const findStock = async () => {
  try {
    console.log("Stock");

  const data = await allProducts();
  console.log(data)
  const stockfinal = [];
  data.forEach(e => {
      if(e.existencia){
      const foundStock = stockfinal.find(x => x.existencia === e.existencia);
      if (!foundStock) {
          stockfinal.push({
            nombre: e.nombre,
            precio_base: e.precio_base,
            existencia: e.existencia
          });
      }
  }
  });
  return stockfinal;
} catch (error) {
      throw error
}
};

// const findProducts = async (nombre) => {
//   const regExpName = new RegExp(nombre, 'i');
//   const productsByName = await Products.find({ nombre: regExpName });
//   if (!productsByName.length) throw 'No se han encontrado productos con ese nombre';
//   else return productsByName;
// }
  
  module.exports = {
    allProducts,
    findStock,
    // findProducts,
  };