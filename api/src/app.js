const express = require('express');
const routes = require('./routes/index.js');

// require('./db.js');
require('./db.js');


const server = express();

server.name = 'API';

server.use('/', routes)

// server.get('/products', (req, res) => {
//     res.send("Ruta productos")
//     console.log("Ruta productos")
// });


module.exports = server;
