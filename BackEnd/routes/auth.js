const express = require("express");
const User = require("../Models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Create a User using : POST "/api/auth/createuser" . No login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 5 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // If there are errors,return BAD request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check whether the user with this email already exists

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }
      //   Create a new User
      user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });
      res.json({ user });
      //   Catch Error
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);

module.exports = router;
