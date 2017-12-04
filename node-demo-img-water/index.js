//引入文件系统模块
const fs = require('fs');
const imageInfo = require('imageInfo');
const images = require('images');
const watermarkImg = images('water_logo.png')
//
function readFileList (path, filesList) {
	var files = fs.readdirSync(path);//同步读取path目录下的所有文件，返回一个数组
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
	getFileList(path).forEach(function(item){
		var ms = imageInfo(fs.readFileSync(item.path + item.filename))
		ms.mimeType && (imageList.push(item.filename))
	})
	return imageList;
}
//获取文件夹下的所有图片
var photos = getImageFiles("./img/");
for(var i = 0; i<photos.length; i++){
	var img = images('./img/' + photos[i]);
	var newImgName = photos[i];
	var W = img.width();
	var H = img.height();
	var mW = watermarkImg.width();
	var mH = watermarkImg.height();

	images(img)
	//设置水印的坐标位置，右下角距离 10px
	.draw(watermarkImg,W - mW - 10, H - mH - 10)
	//保存新图片
	.save('./saveImg/' + newImgName + '');
	console.log('%s 保存成功', newImgName);
}
