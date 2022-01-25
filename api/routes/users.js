const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    !user && res.status(400).json("Technical Error! Logout and Login Again.");

    const validated = await bcrypt.compare(
      req.body.currentPassword,
      user.password
    );
    !validated && res.status(400).json("Wrong Current Password!");

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        fullName: req.body.newName,
        email: req.body.newEmail,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE PASSWORD
router.put("/password/:id", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);

    const user = await User.findById(req.params.id);
    !user && res.status(400).json("Technical Error! Logout and Login Again.");

    // const currentHashedPassword = req.body.currentHashedPassword;
    // const currentPassword = req.body.currentPassword;
    const validated = await bcrypt.compare(
      req.body.currentPassword,
      user.password
    );
    !validated && res.status(400).json("Wrong Current Password!");

    const hashedPassword = await bcrypt.hash(req.body.newPassword, salt);
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { password: hashedPassword },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json("err", err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User not found!");
    }
  } else {
    res.status(401).json("You can delete only your account!");
  }
});

//GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
