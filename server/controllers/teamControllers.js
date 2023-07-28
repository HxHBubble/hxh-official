const Team = require('../models/Team');

exports.getAllTeams = async (req, res , next) =>{

    try {
        const [teams] = await Team.findAll();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({teams});
    } catch (error) {
        console.log(error);
        next(error);
    }
    
};

exports.createNewTeam = async (req, res , next) =>{
    try {
        let {teamName, discordId, player1, player2, player3, player4, player5, teamRank} = req.body;
    let team = new Team(teamName, discordId, player1, player2, player3, player4, player5, teamRank);

    team = await team.save();
    res.setHeader('Content-Type', 'application/json');
   res.status(201).json({message:"Team Created", status: 201});
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.getTeamById = async (req, res , next) =>{
    try {
        const teamId = req.params.id;
        const [team] = await Team.findById(teamId);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({team: team[0]})
    } catch (error) {
        console.log(error);
        next(error);
    }
};