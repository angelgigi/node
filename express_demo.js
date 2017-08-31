//express_demo.js
var express = require('express');
var bodyParser = require('body-parser');
var http=require('http');
var datalist = require('./getData');
var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//定义全局变量
var response = null;
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.post('/city/getcitylist',function (req,res) {
        datalist.find(function(data){
            response=JSON.parse(data);
            res.end(JSON.stringify(response));
        });
});
// 修改数据
app.post('/city/editCity',function (req,res) {
    var city=req.body;
    editID(city,function (data) {
        res.end(data);
        console.log(data)
    })
});
 //获取一条数据
app.post('/city/showCity',function (req,res) {
    getID(req.body.id,function (data) {
        res.end(JSON.stringify(data)); //返回id的一条数据
    })


});
//添加一条数据
app.post('/city/addCity',function (req,res) {
    var city=req.body;
    addID(city,function (data) {
        res.end(JSON.stringify(data));
    })
});
//删除方法
app.post('/city/deleteCity',function (req,res) {
   delID(req.body.id,function (data) {
       res.end(data);
    })
});
//获取id
function getID(id,success) {
    datalist.getCity(id,function (data) {
        success(data);
    })
}
//删除一条数据
function delID(id,success) {
       datalist.delCity(id,function (data) {
            success(data);
       })
}
//增加一条数据
function addID(city,success) {
    datalist.addCity(city,function (data) {
        success(data);
    })
}
//修改一条数据
function editID(city,success) {
   datalist.editCity(city,function (data) {
       success(data);
      // console.log(data);
   })
}
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("http://%s:%s", host, port)
});

