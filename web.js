var express = require('express');
var fs = require('fs');
var port = process.env.PORT || 5000;
var app = express.createServer(express.logger());

var data = fs.readFileSync('index.html', 'utf-8'));

app.get('/', function(request, response) {
    response.send(data);
});

app.listen(port, function() {
    console.log("Listening on " + port);
});
