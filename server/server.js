var express = require("express");
var bodyParser = require("body-parser");
var massive = require("massive");
var cors = require ("cors");
var shelfcontrol = require ("./controllers");
require("dotenv").config();

var app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set("db", db)
    })


app.get("/api/test", function(req, res) {
    (app.get("db").test().then(test => {
        res.send(test)
    })
)})


app.get("/api/shelf", shelfcontrol.getBins)

app.get("/api/bin", shelfcontrol.getBin)

app.put("/api/bin", shelfcontrol.updateBin)

app.delete("/api/bin", shelfcontrol.deleteBin)

app.post("/api/bin", shelfcontrol.createBin)


var port = 3000;

app.listen(port, console.log(`listening on port:${port}`));

