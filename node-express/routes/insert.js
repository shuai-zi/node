const express = require('express')
const router = express.Router()
const connectSql = require('../mysql/mysql');
 
router.get("/user", function(req, res) {
	//更新用户名称
	var sql = "insert into city values(" + [req.query.id,"'"+req.query.name+"'","'"+req.query.CountryCode+"'","'"+req.query.District+"'",req.query.Population].join(',') + ")"
	console.log(sql)
	connectSql(sql, function(err, result, next) {
		if(err) {
			return
		} else {
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