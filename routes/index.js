'use strict';

const express = require('express'),
      router = express.Router();

module.exports = (function() {
  router.get('/', function(req, res) {
    res.render('index/index');
  });
  
  router.get('/hire', function(req, res) {
    res.render('index/hire');
  });
  
  router.get('/demos', function(req, res) {
    res.render('index/demos');
  });
  
  router.get('/stack', function(req, res) {
    res.render('index/stack');
  });
  
  router.get('/ideas', function(req, res) {
    res.render('index/ideas');
  });

  router.get('/perfil', function(req, res) {
    res.render('index/perfil');
  });
  
  router.post('/request', function(req, res) {
    new Prospect(req.body)
      .save()
      .then(prospect => {
        res.flash('info_msg', 'Solicitação cadastrada');
  
        res.redirect('/');
      })
      .catch(err => {
        console.log(`Error: ${err}`);
  
        res.flash('error_msg', err);
  
        res.render('index/hire');
      });
  });

  return router;
})();