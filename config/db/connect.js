require("dotenv").config();

const mongoose = require("mongoose");

const connection_string = process.env.CONNECTION_STRING;
async function connect() {
  try {
    await mongoose.connect(connection_string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect database success!!!");
  } catch (error) {
    console.log(`Connect database failure!!!
     ${error}`);
    console.log("Connection String: " + connection_string);
  }
}

module.exports = { connect };
