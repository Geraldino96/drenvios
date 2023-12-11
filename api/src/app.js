const express = require('express');
const routes = require('./routes/index.js');
const server = express();

require('./db.js');

server.name = 'API';

server.use('/', routes)

module.exports = server;
