const express = require("express");
const userControllers = require('../controllers/userControllers')
const router = express.Router();

router.route("/").post(userControllers.RegisterNewUser)

router.route("/:userid").get(userControllers.CheckUserId);

module.exports = router;