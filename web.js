#!/usr/bin/env node

var express = require("express");
var fs = require ('fs');
<<<<<<< HEAD
var htmlfile="index1.html";
=======
var htmlfile="bootstrap/index1.html";
>>>>>>> 8e55aa8cc93e4e38b1ca2419ed6fd9a7ee9bd557

var app = express(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World!')
	var html = fs.readFileSync(htmlfile).toString();
	response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
