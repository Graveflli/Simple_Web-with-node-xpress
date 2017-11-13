var express = require('express');
var router = express.Router();

var path = require('path');
/* GET home page. */

router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
});

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile(path.resolve(__dirname, '../public/html/index.html'));
  console.log(path.resolve(__dirname, '../index.html'));
  console.log(__dirname + '/../public/html/index.html');
  console.log(__dirname + '../public/html/index.html');
  console.log(path.resolve(__dirname, '../public/html/index.html'));
  
});



router.get('/index', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  
  res.sendFile(path.resolve(__dirname, '../index.html'));

 /* res.sendFile(__dirname + '/../public/html/index.html');*/
});

module.exports = router;
