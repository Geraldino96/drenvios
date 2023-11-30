require('dotenv').config();

const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}`);
}