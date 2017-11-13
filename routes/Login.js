var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    

    res.sendFile(path.resolve(__dirname, '../public/html/loginin.html'));
  /* 
    var Account = req.params.Account;
    var Passwd = req.params.Passwd;
    if(Account == '' || Passwd == '' )
    {
        res.send('Please input your account & password');
    }

    res.send('Now I know your account is: ' + Account +"and your Password is" + Passwd);*/
  });


module.exports = router;
