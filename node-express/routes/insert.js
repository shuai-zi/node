const express = require('express')
const router = express.Router()
const connectSql = require('../mysql/mysql');

router.get('/insertUser',function (req,res) {
	var sql = 'insert into city value('
	+req.query.id+','
	+"'"+req.query.name+"',"
	+"'"+req.query.CountryCode+"',"
	+"'"+req.query.District+"',"
	+req.query.Population
	+')'
	connectSql(sql, function(err, result,next){
		if (err) {
			console.log(err.message);
		}else{
			res.status(200);
			res.json({
				data:[],
				errmsg:'添加成功',
				error:0
			})
		}
	})
})

module.exports = router