const db = require('../config/db');
class Team{
    constructor(teamName, discordId, player1, player2, player3, player4, player5, teamRank){
        this.teamName = teamName;
        this.discordId = discordId;
        this.player1 = player1;
        this.player2 = player2;
        this.player3 = player3;
        this.player4 = player4;
        this.player5 = player5;
        this.teamRank = teamRank;
    }

    async save(){

    let d= new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() +1;
    let dd = d.getDate();

    let createdAtDate = `${dd}-${mm}-${yyyy}`;

    let sql = "INSERT INTO teams (teamName, discordId, player1, player2, player3, player4, player5, teamRank, createdAtDate) VALUES (?,?,?,?,?,?,?,?,?);"

    return db.query(sql, [ this.teamName, this.discordId, this.player1, this.player2, this.player3, this.player4, this.player5, this.teamRank, createdAtDate ]);

    }

    static findAll(){
        let sql ="select * from teams;"

        return db.query(sql);
         
    }

    static findById(id){
        let sql = `SELECT * FROM teams WHERE id = ${id};`

        return db.query(sql);
    }
}

module.exports = Team;