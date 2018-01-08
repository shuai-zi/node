const express = require('express')
const router = express.Router()
const connectSql = require('../mysql/mysql');
router.get('/info', function (req, res) {
	//查信息
	var sql = ''
	if(req.query.name&&req.query.CountryCode){
		sql = "select * from city where name = '" + req.query.name +"' and CountryCode = " + "'" + req.query.CountryCode +"'"
	} else if (req.query.name) {
		sql = "select * from city where name like '" + req.query.name +"%'"
	} else if(req.query.CountryCode) {
		sql = "select * from city where CountryCode like '%" +  req.query.CountryCode +"%'"
	} else{
		sql = "select * from city where id <= " +  req.query.id
	}
	connectSql(sql, function(err, result, next) {
		if(err) {
			console.log(err.message);
		} else {
			res.status(200);
// 			res.send('hello, express')
			res.json({
				data:result,
				error:0,
				errmsg:'查询成功',
			})
		}
	})
})
router.get('/CountryCodelist', function (req, res) {
	//查信息
	var sql = "select Code from country"
	connectSql(sql, function(err, result, next) {
		if(err) {
			console.log(err.message);
		} else {
			res.status(200);
// 			res.send('hello, express')
			res.json({
				data:result,
				error:0,
				errmsg:'获取成功',
			})
		}
	})
})
module.exports = router