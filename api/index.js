const server = require('./src/app.js');
// const { conn } = require('./src/db.js');

  server.listen(3001, () => {
    console.log('Server 3001');
  });