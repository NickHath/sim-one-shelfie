var express = require("express");
var bodyParser = require("body-parser");
var massive = require("massive");
var cors = require ("cors");
require("dotenv").config();

var app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set("db", db)
    })


app.get("/api/test", function(req, res){
    (app.get("db").test().then(test => {
        res.send(test)
    })
    )})




var port = 3000;

app.listen(port, console.log(`listening on port:${port}`));

