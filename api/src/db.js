require('dotenv').config();
const mongoose = require("mongoose");

const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}`);
  console.log("DB connected!")
}