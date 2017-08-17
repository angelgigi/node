//express_demo.js
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//定义全局变量
var response = {
    "list": [
        {
            "id": 4097,
            "name": "jkjk",
            "countryCode": "huh",
            "district": "name",
            "population": "7890655"
        },
        {
            "id": 4096,
            "name": "wewe",
            "countryCode": "jij",
            "district": "kokoko",
            "population": "345678"
        },
        {
            "id": 4090,
            "name": "8888",
            "countryCode": "ooo",
            "district": "ret",
            "population": "888888"
        },
        {
            "id": 199,
            "name": "PotosÃ­",
            "countryCode": "BOL",
            "district": "PotosÃ­",
            "population": "140642"
        },
        {
            "id": 198,
            "name": "Sucre",
            "countryCode": "BOL",
            "district": "Chuquisaca",
            "population": "178426"
        },
        {
            "id": 197,
            "name": "Oruro",
            "countryCode": "BOL",
            "district": "Oruro",
            "population": "223553"
        },
        {
            "id": 196,
            "name": "Cochabamba",
            "countryCode": "BOL",
            "district": "Cochabamba",
            "population": "482800"
        },
        {
            "id": 195,
            "name": "El Alto",
            "countryCode": "BOL",
            "district": "La Paz",
            "population": "534466"
        },
        {
            "id": 194,
            "name": "La Paz",
            "countryCode": "BOL",
            "district": "La Paz",
            "population": "758141"
        },
        {
            "id": 193,
            "name": "Santa Cruz de la Sierra",
            "countryCode": "BOL",
            "district": "Santa Cruz",
            "population": "935361"
        },
        {
            "id": 192,
            "name": "Thimphu",
            "countryCode": "BTN",
            "district": "Thimphu",
            "population": "22000"
        },
        {
            "id": 191,
            "name": "Hamilton",
            "countryCode": "BMU",
            "district": "Hamilton",
            "population": "1200"
        },
        {
            "id": 190,
            "name": "Saint George",
            "countryCode": "BMU",
            "district": "Saint GeorgeÂ´s",
            "population": "1800"
        },
        {
            "id": 189,
            "name": "Parakou",
            "countryCode": "BEN",
            "district": "Borgou",
            "population": "103577"
        },
        {
            "id": 188,
            "name": "Djougou",
            "countryCode": "BEN",
            "district": "Atacora",
            "population": "134099"
        },
        {
            "id": 187,
            "name": "Porto-Novo",
            "countryCode": "BEN",
            "district": "OuÃ©mÃ©",
            "population": "194000"
        },
        {
            "id": 186,
            "name": "Cotonou",
            "countryCode": "BEN",
            "district": "Atlantique",
            "population": "536827"
        },
        {
            "id": 185,
            "name": "Belmopan",
            "countryCode": "BLZ",
            "district": "Cayo",
            "population": "7105"
        },
        {
            "id": 184,
            "name": "Belize City",
            "countryCode": "BLZ",
            "district": "Belize City",
            "population": "55810"
        },
        {
            "id": 183,
            "name": "Mons",
            "countryCode": "BEL",
            "district": "Hainaut",
            "population": "90935"
        }
    ]
};

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
    res.end(JSON.stringify(response));


});
// 修改数据
app.post('/city/editCity',function (req,res) {
    var arr=response.list;
});
 //获取一条数据
app.post('/city/showCity',function (req,res) {
       var arr=response.list;
       var city=null;
       for(var i=0 ; i<arr.length; i++){
           if(req.body.id==arr[i].id){
              city=arr[i];
               console.log(req.body.id)
           }
       }
    res.end(JSON.stringify(city)); //返回id的一条数据
});
//添加一条数据
app.post('/city/addCity',function (req,res) {
     var city=req.body;
     var arr=response.list;
     var idList=new Array();
     for(var i=0 ; i<arr.length ; i++){
         idList.push(arr[i].id);
     }
    idList.sort(function (a,b) {
        return b - a;
    });
     var id=null;
    if(idList.length>0){
       // console.log(idList[0]);
        id=idList[0]+1;
    }
    city.id=id;
    result=response.list.push(city);
    res.end(JSON.stringify(result));
});
//删除方法
app.post('/city/deleteCity',function (req,res) {
    var arr=response.list;
    var id=null; //比较后存取的id
    for(var i=0 ;i<arr.length; i++){
        if(req.body.id==arr[i].id) {
              id=arr[i].id;    //将数组的id赋值给id
              arr.splice(i,1); //删除数组元素的id
           }
     }

    res.end(id.toString()); //返回删除后的id
});
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("http://%s:%s", host, port)
});

