'use strict';

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      viewEngine = require('./config/handlebars'),
      Prospect = require('./models/prospect'),
      session = require('./config/session'),
      flash = require('express-flash-2'),
      routes = require('./config/routes'),
      port = process.env.PORT
;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine(viewEngine.name, viewEngine.config());
app.set('view engine', viewEngine.name);

app.use(session);

app.use(function(req, res, next) {
  res.locals.session = req.session;

  next();
});

app.use(flash());

for(const name in routes) {
  app.use(routes[name].path, routes[name].router);
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});