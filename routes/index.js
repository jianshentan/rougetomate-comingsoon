var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/mobile', function(req, res, next) {
  res.render('mobile');
});

module.exports = router;
