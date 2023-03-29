const mongoose = require("mongoose");
const user = new mongoose.Schema({
  firstname: String,
  lastname: String,
  age: String,
});

const usermodule = mongoose.model("user", user);

module.exports = usermodule;
