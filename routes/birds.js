var express = require('express');
var router = express.Router();

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// 定义网站主页的路由
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// 定义 about 页面的路由
router.get('/about', function(req, res) {
  res.send('About birds');
});


router.get('/about/:id',function(req,res,next){
  res.render('special');
  res.send('hahahahahaah');
});
router.get('/:id',function(req,res,next){
  res.send("xome");
});
module.exports = router;