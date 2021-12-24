const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/users');
    console.log("Connect database success!!!");
  } catch (error) {
      console.log(error)
    console.log("Connect database failure!!!");
  }
}

module.exports = { connect };
