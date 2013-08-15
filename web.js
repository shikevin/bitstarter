#!/usr/bin/env node

var express = require("express");
var fs = require ('fs');
var htmlfile="bootstrap/index.html";

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
