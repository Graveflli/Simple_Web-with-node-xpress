var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/*
router.get('/:id',function(req,res,next){
  if(res.params.id == 0 )//look ata here you put req to res!!!
    {next('route');}
  else next();
},function(req,res,next){
  res.render('regular');
});

router.get('/:id',function(req,res,next){
  res.render('special');
});*/
// 一个中间件栈，处理指向 /user/:id 的 GET 请求
router.get('/:id', function (req, res, next) {
  // 如果 user id 为 0, 跳到下一个路由
  if (req.params.id == 0) next('route');
  // 负责将控制权交给栈中下一个中间件
  else next(); //
}, function (req, res, next) {
  // 渲染常规页面
  res.render('regular');
});

// 处理 /user/:id， 渲染一个特殊页面
router.get('/:id', function (req, res, next) {
  console.log(req.params.id);
  res.render('special');
});


module.exports = router;
