const Products = require('../models/products.model')

const allProducts = async () => {
    return await Products.find()
}

const findStock = async () => {
  try {
  const data = await allProducts();
  console.log(data)
  const stockfinal = [];
  data.forEach(e => {
      if(e.enStock){
      const foundStock = stockfinal.find(x => x.enStock === e.enStock);
      if (!foundStock) {
          stockfinal.push({
            nombre: e.nombre,
            existencia: e.existencia,
            stock: e.enStock
          });
      }
  } else if(e.existencia){
    const foundStock = stockfinal.find(x => x.existencia === e.existencia);
    if (!foundStock) {
        stockfinal.push({
          nombre: e.nombre,
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