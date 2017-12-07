'use strict';

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      viewEngine = require('./config/handlebars'),
      port = process.env.PORT
;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine(viewEngine.name, viewEngine.config());
app.set('view engine', viewEngine.name);

app.get('/', function(req, res) {
  res.render('index/index');
});

app.get('/hire', function(req, res) {
  res.render('index/hire');
});

app.get('/demos', function(req, res) {
  res.render('index/demos');
});

app.get('/stack', function(req, res) {
  res.render('index/stack');
});

app.get('/ideas', function(req, res) {
  res.render('index/ideas');
});

app.post('/request', function(req, res) {
  
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});