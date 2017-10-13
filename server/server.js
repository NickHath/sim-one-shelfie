var express = require("express");
var bodyParser = require("body-parser");
var massive = require("massive");
var cors = require ("cors");

var app = express();

app.use(bodyParser.json());

app.use(cors());

var port = 3000;

app.listen(port, console.log(`listening on port:${port}`));

