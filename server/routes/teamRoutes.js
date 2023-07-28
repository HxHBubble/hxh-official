const express = require("express");
const teamControllers = require('../controllers/teamControllers')
const router = express.Router();

router.route("/").get(teamControllers.getAllTeams).post(teamControllers.createNewTeam)

router.route("/:id").get(teamControllers.getTeamById);

module.exports = router;