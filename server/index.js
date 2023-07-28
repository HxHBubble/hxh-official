require("dotenv").config();

const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// All routes should be mention here##############################
app.use("/teams", require("./routes/teamRoutes"));

app.use("/api/users/", require("./routes/userRoutes"));

app.use("/", (req,res) =>{
    res.send("Welcome to HxH Official API");
})

app.use( (err, req, res, next) =>{
    console.log(err);

    res.status(500).json({
        message:'Something Went Wrong'
    });
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Server running port: ${PORT}`);
});