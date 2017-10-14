var express = require("express");
var bodyParser = require("body-parser");
var massive = require("massive");
var cors = require("cors");
var shelfCtrl = require("./controllers");
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

app.get("/api/:shelf", shelfCtrl.getBins)

app.get("/api/:shelf/:bin", shelfCtrl.getBin)

app.put("/api/:shelf/:bin", shelfCtrl.updateBin)

app.delete("/api/:shelf/:bin", shelfCtrl.deleteBin)

app.post("/api/:shelf", shelfCtrl.createBin)


var port = 3000;

app.listen(port, console.log(`listening on port:${port}`));

