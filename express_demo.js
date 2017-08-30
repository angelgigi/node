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
//getList();
//getID();
//delID();
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
    var arr=response.list;
    var city=null;
    for(var i=0 ; i<arr.length; i++){
        if(req.body.id==arr[i].id){
            arr[i]=req.body;
            console.log(arr[i]);
            city=arr[i];
        }
    }
    res.end(JSON.stringify(city)); //返回id的一条数据
});
 //获取一条数据
app.post('/city/showCity',function (req,res) {
       // var arr=response.list;
       // var city=null;
       // for(var i=0 ; i<arr.length; i++){
       //     if(req.body.id==arr[i].id){
       //        city=arr[i];
       //        // console.log(req.body.id)
       //     }
       // }
    getID(req.body.id,function (data) {
        res.end(JSON.stringify(data)); //返回id的一条数据
    })


});
//添加一条数据
app.post('/city/addCity',function (req,res) {
    //  var city=req.body;
    //  var arr=response.list;
    //  var idList=new Array();
    //  for(var i=0 ; i<arr.length ; i++){
    //      idList.push(arr[i].id);
    //  }
    // idList.sort(function (a,b) {
    //     return b - a;
    // });
    //  var id=null;
    // if(idList.length>0){
    //    // console.log(idList[0]);
    //     id=idList[0]+1;
    // }
    // city.id=id;
    // result=response.list.push(city);
    // res.end(JSON.stringify(result));
    
});
//删除方法
app.post('/city/deleteCity',function (req,res) {
/*  var arr=response.list;
    var id=null; //比较后存取的id
    for(var i=0 ;i<arr.length; i++){
        if(req.body.id==arr[i].id) {
              id=arr[i].id;    //将数组的id赋值给id
              arr.splice(i,1); //删除数组元素的id
           }
     }
    res.end(id.toString()); //返回删除后的id*/
   delID(req.body.id,function (data) {
       res.end(data);
    })
});
//获取数据列表
/*function getList() {
    datalist.find(function(data){
        response=JSON.parse(data);
    })
}*/
//获取id
function getID(id,success) {
    datalist.getCity(id,function (data) {
        success(data);
        //console.log(data)
    })
}
//删除一条数据
function delID(id,success) {
       datalist.delCity(id,function (data) {
            success(data);
          // console.log(data)
       })
}
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("http://%s:%s", host, port)
});

