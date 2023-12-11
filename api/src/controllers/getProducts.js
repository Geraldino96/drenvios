const Products = require('../models/products')


const allProducts = async () => {
  const products = await Products.find()
  return products
}

const findStock = async () => {
  try {
  const data = await allProducts();
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
  
  module.exports = {
    allProducts,
    findStock
  };