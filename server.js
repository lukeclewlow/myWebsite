var express = require('express');
var app = express();
var port = process.env.PORT || 9999;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

app.get('/', function (request, response) {
	response.render('index');
});

app.listen(port, function () {
	console.log('running on http://localhost:' + port);
});