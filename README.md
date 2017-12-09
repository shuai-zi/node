存放一些node入门的技术
==========================
# node-express
#### 该文件是存放一个依赖express框架的项目环境搭建，里面有搭建过程的介绍和一个连接mysql数据库的小demo实例，
###### tip:数据库名 world 表名 city 都是安装mysql的初始自带的练习库和表

###### 设置跨域访问
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
