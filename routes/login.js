var express = require("express");
var router = express.Router();
const { User, Item } = require("../database/models");
const uuid = require("uuid/v4");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");

router.post("/", async (req, res, next) => {
  console.log("You are now at POST login");

  try {
    const user = await User.findOne({
      where: { userName: req.body.userName, password: req.body.password }
    });
    if (!user) {
      res.status(400).send("Wrong username and/or password.");
    } else {
      req.login(user, err => (err ? next(err) : res.redirect("../")));
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
