var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/sync', function(req, res) {

});

// List entries in a section
// TODO: add paging
app.get('/section/:sectionId', function(req, res) {

});

app.get('/', function(req, res) {
  res.redirect('index.html');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});