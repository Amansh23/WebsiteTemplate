var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/About', function(req, res, next) {
  res.render('about');
});

router.get('/Services', function(req, res, next) {
  res.render('services');
});

router.get('/Contact', function(req, res, next) {
  res.render('contact');
});


router.get('/Blog', function(req, res, next) {
  res.render('blog');
});


router.get('/Portfolio', function(req, res, next) {
  res.render('portfolio');
});






module.exports = router;
