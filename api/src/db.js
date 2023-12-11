require('dotenv').config();
const mongoose = require("mongoose");

const {
  DB_USER, DB_PASSWORD, DB_HOST, 
} = process.env;

const dbUri = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}`


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUri, {
    dbName: 'challenge',
  });
  console.log("DB connected!")
}