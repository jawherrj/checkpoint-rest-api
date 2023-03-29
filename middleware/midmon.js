const express = require("express");
const router = express.Router();
const am = require("../models/user");

module.exports.getmon = async (req, res, next) => {
  let user;
  try {
    user = await am.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find monkey" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
};
