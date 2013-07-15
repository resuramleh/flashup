var express = require('express')
   ,fs = require('fs')
   ,app = express()
   ,port = process.env.PORT || 5000;

app.use(express.logger());

var data = new Buffer(fs.readFileSync('index.html'));

app.get('/', function(req, res){
    res.send(data.toString('utf-8'));
});

app.listen(port, function() {
    console.log("Listening on " + port);
});
