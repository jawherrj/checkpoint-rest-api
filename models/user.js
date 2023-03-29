const mongoose = require("mongoose");
const am = new mongoose.Schema({
  monkytype: String,
  apename: String,
  bananas: String,
});

const usermodule = mongoose.model("am", am);

module.exports = usermodule;
