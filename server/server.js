var express = require("express");
var bodyParser = require("body-parser");
var massive = require("massive");
var cors = require("cors");
var shelfcontrol = require("./controllers");
require("dotenv").config();

var app = express();

app.use(bodyParser.json());
// set Postman to urlencoded, too
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

massive(process.env.CONNECTION_STRING)
    .then(db => {
        console.log('connected to postgres')
        app.set("db", db)
    })
    .catch((err) => console.log(err));


app.get("/api/test", function(req, res) {
    (app.get("db").test().then(test => {
        res.send(test)
    })
)})


app.get("/api/:shelf", shelfcontrol.getBins)

app.get("/api/:shelf/:bin", shelfcontrol.getBin)

app.put("/api/:shelf/:bin", shelfcontrol.updateBin)

app.delete("/api/:shelf/:bin", shelfcontrol.deleteBin)

app.post("/api/:shelf", shelfcontrol.createBin)


var port = 3000;

app.listen(port, console.log(`listening on port:${port}`));

