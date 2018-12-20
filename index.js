var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
const dgram = require('dgram');
const serverUdp = dgram.createSocket('udp4');
var dateFormat = require('dateformat');
var port = process.env.PORT || 8800;
var mysql = require('mysql');

// <<======================  UDP SERVER HANDLER  ========================>>
serverUdp.on('message', (msg, info) => {
	// UDP MESSAGE HANDLER !
  
});

serverUdp.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
    serverUdp.close();
});

serverUdp.bind(41234);

// <<========================  HTTP SERVER HANDLER  ===========================>>
http.listen(port, function() {
    console.log('Server Started. Listening on *:' + port);
});

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next){
	console.log("New Client");
	res.status(200).send();
});