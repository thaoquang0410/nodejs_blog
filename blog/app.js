var express = require('express');
var config = require('config')
var bodyParser = require('body-parser')

var app = express();
//bodyParser
app.use(bodyParser.json());
app.set('views', __dirname + "/apps/views");
app.set("view engine","ejs");

//static folders
app.use("/static", express.static(__dirname + "/public"))

var controllers = require(__dirname + "/apps/controllers");

app.use(controllers);
var host = config.get("server.host")
var port = config.get("server.port")
app.listen(port,host, function() {
    console.log("Sever is running on port", port);
})