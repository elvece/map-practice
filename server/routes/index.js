var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Google Maps Practice' });
});

router.get('/translate', function(req, res, next) {
  res.render('translate', { title: 'Form' });
});

module.exports = router;
