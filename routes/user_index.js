var express = require('express');
var router = express.Router();

router.post('/',function(req,res,next){

    var Account = req.params.Account;
    var Passwd = req.params.Passwd;
    /*response = {
        Account = req.params.Account;
        Passwd = req.params.Passwd;
    }*/
    if(Account == '' || Passwd == '' )
    {
        res.send('Please input your account & password');
    }
    res.send('Now I know your account is: ' + Account +"and your Password is" + Passwd);
})




module.exports = router;