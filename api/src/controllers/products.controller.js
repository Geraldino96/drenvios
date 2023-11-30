class ProductsController {
    static getAllProducts(req, res) {
      // Fetch products data from your database or any other source
      const products = [
        // Sample user data
        { name: 'John Doe', email: 'john@example.com' },
        { name: 'Jane Smith', email: 'jane@example.com' },
      ];
  
      res.json({ products });
    }
  
    // Add more methods for handling user-related functionality
  }
  
  module.exports = ProductsController;