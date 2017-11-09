var express = require('express');
var router = express.Router();

/* GET home page. */

router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
