var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/licht', function(request, response) {
  response.render('pages/licht');
});
app.get('/stativ', function(request, response) {
  response.render('pages/stativ');
});
app.get('/cam', function(request, response) {
  response.render('pages/cam');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


