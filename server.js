var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// make '/app' default route
app.get('/', function (req, res) {
    return res.redirect('/app');
});

app.get('/join', function (req, res) {
	console.log("Got yo storage request ;)");
});

app.get('/book', function (req, res) {
	console.log("Got yo booking ;)");
});

app.post('/join', function (req, res) {
	console.log(req.body);
});

app.listen(9000);
console.log("Server running on port 9000");