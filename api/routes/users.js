var express = require('express');
var router = express.Router();
var User = require('../model/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/*router.post('/api/login',function(req,res){

    User.find({
        username:req.body.username,
        password:req.body.password
    }).then(function(result) {
        if(result){
          res.send(result)
        }else{
          res.send("没有该用户名")
        }
    })
})*/
module.exports = router;
