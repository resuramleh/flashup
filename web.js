var express = require('express')
   , fs = require('fs')
   , app = express()
   , port = process.env.PORT || 5000;

app.use(express.logger());

var data = fs.readFileSync("index.html", 'utf-8'));

app.get('/', function(req, res) {
    res.send(data);
});

app.listen(port, function() {
    console.log("Listening on " + port);
});
