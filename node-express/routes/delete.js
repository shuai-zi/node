const express  = require('express');
const router = express.Router();
const connectSql = require('../mysql/mysql');

router.get('/deleteUser',function(req,res){
	var sql = "delete from city where id = " + req.query.id
	connectSql(sql,function(err,result,next){
		if (err) {
			console.log(err.message)
		}else {
			res.status(200)
			res.json({
				data:'',
				error:0,
				errmsg:'删除成功'
			})
		}
	})
})
module.exports = router