
node-express 
==============

# 入门node+express环境搭建

## 项目初始化

#### 创建项目文件 node-express 在cmd控制台输入命令
```
mkdir node-express
```
#### 进入项目
cd node-express
#### 创建一个配置文件
```
npm init
```
#### 安装express依赖
```
npm install express --save
```
###### 提示：express 4.0以上需要额外安装express命令工具 npm install express-generator -g

#### 生成express项目的模版结构
```
express appName
```
##### 生成目录结构如下
```
appName/
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade
```
###### 提示：public是放置静态文件的目录，routes是放置路由文件的目录，view是放置模板引擎的目录


#### 安装项目依赖模块
```
npm install
```
#### 运行项目
```
npm start
```
#### 在浏览器输入 http://localhost:3000 ,能看到欢迎界面表示成功。






