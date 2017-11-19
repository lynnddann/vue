var express = require('express');
var router = express.Router();
var User = require('../model/user')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/api/register',function(req,res){
	// console.log(req)
	// console.log(req.body.password)
	// User.find({
	// 	username:req.query.username
	// }).then(result=>{
     //    console.log('222222222')
	// 	if(result.length==0){
    //
	// 		console.log(req.query.username)
	// 		console.log(req.query.password)
	// 		console.log('1111111')
	// 			User.create({
	// 				username:req.body.username,
	// 				password:req.body.password
	// 			})
	// 	}else{
	// 		res.send(result)
	// 	}
	// })
    User.findOne({
        username:req.body.username
	},function (err, data) {
		if(data){
            var result = {
                code:'-1',
                msg: '有数据',
                data: data,
                success: false
            };
            return res.json(result)
		}else{
			User.create({
                username:req.body.username,
                password:req.body.password

			},function (err,data) {
				if(!err){
                    var result = {
                        code:'2',
                        msg: '存储成功',
                        data: "success",
                        success: true
                    };
                    res.send(result)
				}
            })
		}
    } )
})

router.post('/api/login',function(req,res){

    User.find({
        username:req.body.username,
        password:req.body.password
    }).then(function(result) {
        if(result.length==0){
            res.send(result)
        }else{
            res.send(result)
        }
    })
})
module.exports = router;
