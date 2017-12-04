const express = require('express')
const router = express.Router()
const connectSql = require('../mysql/mysql');
 
router.get("/name", function(req, res) {
	//更新用户名称
	var sql = "update city set name=" + ["'",req.query.name,"'"].join('') + " where id = " + req.query.id
	connectSql(sql, function(err, result, next) {
		if(err) {
			return
		} else {
			res.status(200);
			res.json({
				data:[],
				errmsg:'修改成功',
				error:0
			})
		}
	})
})
module.exports = router