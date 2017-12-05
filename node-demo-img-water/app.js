var fs = require('fs')
//var imagesInfo = require('imagesinfo')
var images = require('images');
var watermarkImg = images('water_logo.png');
var img = images('./img/afajr_r0.png');
//放置右下角
var W = img.width();
var H = img.height();
var mW = watermarkImg.width();
var mH = watermarkImg.height();

images(img)
    //设置绘制的坐标位置，右下角距离 10px
    .draw(watermarkImg, W - mW - 10, H - mH - 10)
    //保存
    .save('./saveImg/saveimg.png');