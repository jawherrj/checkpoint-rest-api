const express = require("express");
const { getmon } = require("../middleware/midmon");
const router = express.Router();
const am = require("../models/user");
//post
router.post("/post", async (req, res) => {
  const User = new am({
    monkytype: req.body.monkytype,
    apename: req.body.apename,
    bananas: req.body.bananas,
  });
  try {
    const newuser = await User.save();
    res.status(201).json(newuser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//GET
router.get("/GET", async (req, res) => {
  try {
    const users = await am.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//PUT
router.patch("/:id", getmon, async (req, res) => {
  if (req.body.monkytype != null) {
    res.am.monkytype = req.body.monkytype;
  }
  if (req.body.apename != null) {
    res.am.apename = req.body.apename;
  }
  if (req.body.bananas != null) {
    res.am.bananas = req.body.bananas;
  }
  try {
    const newmonkey = await res.am.save();
    res.json(newmonkey);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//DELETE
router.delete("/:id", getmon, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "User Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
