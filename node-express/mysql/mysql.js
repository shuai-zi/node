//删
// var  sql = "delete from city where id > 4079";
//增
// var  sql = "insert into city values(1,'sw','AFG','SH',023213)";
//改
// var  sql = "update city set id=0 where id=1";
//查
//var  sql = "select id from city where id >= 0";
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'world' //数据库名称,
});
connection.connect();
const Connectsql = function(sql, callblack) {
	connection.query(sql, callblack)
//	connection.end(function(err){
//		if (err) {
//			return
//		}else{
//			console.log('关闭成功')
//		}
//	})
}
module.exports = Connectsql