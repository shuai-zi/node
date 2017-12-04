const express = require('express')
const router = express.Router()
const connectSql = require('../mysql/mysql');
router.get('/info', function (req, res) {
 	//用用户name去查信息
 	var sql = 'select * from city where name = ' +  ["'",req.query.name,"'"].join('')
	connectSql(sql, function(err, result, next) {
		if(err) {
			console.log(err.message);
		} else {
//			res.status(200);
// 			res.send('hello, express')
			res.json({
				data:result,
				error:0,
				errmsg:'查询成功',
			})
		}
	})
})
module.exports = router