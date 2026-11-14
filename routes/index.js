var express = require('express');
var router = express.Router();

/* GET Home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Clinton's Portfolio" });
});

/* GET About page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: "About Me" });
});

/* GET Projects page */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: "My Projects" });
});

/* GET Contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: "Contact Me" });
});

module.exports = router;