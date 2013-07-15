var express = require('express')
   , fs = require('fs')
   , port = process.env.PORT || 5000;

var app = express.createServer(express.logger());

var data = fs.readFileSync('index.html', 'utf-8'));

app.get('/', function(req, res) {
    res.send(data);
});

app.listen(port, function() {
    console.log("Listening on " + port);
});
