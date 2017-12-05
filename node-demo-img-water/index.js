//引入文件系统模块
const fs = require('fs');
//
function readFileList (path, filesList) {
	var files = fs.readdirSync(path);//同步读取path目录 下的所有文件名称，返回一个数组
	files.forEach(function(item, index){
		var stat = fs.statSync(path + item);
		if (stat.isDirectory()) {//true则为文件夹
			//递归读取文件，读取下一级目录
			readFileList(path + item + '/', filesList)
		}else {
			filesList.push({	//存放路径和名字
				path: path,
				filename: item,
			});
		}
	})
} 

//获取文件夹下的所有文件
function getFileList (path) {
	var filesList = [];
	readFileList(path, filesList);
	return filesList;
}
function getImageFiles (path) {
	var imageList = [];
	var imageInfo = require('imageInfo');
	getFileList(path).forEach(function(item){
		var ms = imageInfo(fs.readFileSync(item.path + item.filename))//同步读取图片不是图片的返回false
		//筛选出文件夹下的所有图片并保存图片名字存入数组
		ms.mimeType && (imageList.push(item.filename))
	})
	return imageList;
}
//获取文件夹下的所有图片
var photos = getImageFiles("./img/");//返回'./img/'目录下的所有图片的名称数据
//var photos = fs.readdirSync('./img/') //返回一个'./img/'目录下的所有文件名称数据

var images = require('images');//引入图片编辑依赖模块
for(var i = 0; i<photos.length; i++){
	var img = images('./img/' + photos[i]);
	console.log(img)
	var newImgName = photos[i];
	var W = img.width();
	var H = img.height();
	var watermarkImg = images('water_logo.png')//引入水印图片
	var mW = watermarkImg.width();
	var mH = watermarkImg.height();

	images(img)
	//设置水印的坐标位置，右下角距离 10px
	.draw(watermarkImg,W - mW - 10, H - mH - 10)
	//保存新图片
	.save('./saveImg/' + newImgName + '');
	console.log('%s 保存成功', newImgName);
}
