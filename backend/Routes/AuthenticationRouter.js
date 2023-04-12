const express = require("express");
const AuthenticationController = require("./../Controllers/AuthenticationController")

const router = express.Router();

router.route("/login")
    .post(AuthenticationController.login)

router.route("/register")
    .post(AuthenticationController.addAuthor)

module.exports=router;