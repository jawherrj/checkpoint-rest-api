const express = require("express");
const router = express.Router();
const user = require("../models/user");
//post
router.post("/post", async (req, res) => {
  const User = new user({
    ...req,
  });
  console.log(req.body);
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
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//PUT
router.patch("/:id", getUser, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.last_name != null) {
    res.user.last_name = req.body.last_name;
  }
  if (req.body.age != null) {
    res.user.age = req.body.age;
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//DELETE
router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "User Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//ID middleware
async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
}
module.exports = router;
