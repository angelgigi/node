
var http = require('http');
var request=require('request');
exports.find = function( success){
    var options={
        hostname:'localhost',
        port: '8080',
        path:'/city/getcitylist',
        method:'POST'

    };
   var req = http.request(options, function(res) {  //http请求
        res.setEncoding('utf8');
        res.on('data', function (data) {  //接受请求回来的数据
            console.log('>>> ', data);
            success(data);

        });
    });
    req.on('error', function(e){
        console.log("auth_user error: " + e.message);
    });

    req.end();
};


exports.getCity = function (id,success) {
    var options={
        url: 'http://localhost:8080/city/getcityInfo',
        method:'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(id),
        encoding: 'utf8'
    };
    function callback(error, response, data) {
        if (!error && response.statusCode == 200) {
         //   console.log('>>>',data);
            success(data);
        }
        else
        {
          //  console.log('>>>error>>>',error);
        }
    }
    request(options, callback);
};

exports.delCity = function (id,success) {
    var options={
        url: 'http://localhost:8080/city/deleteCity',
        method:'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(id),
        encoding: 'utf8'
    };
    function callback(error, response, data) {
        if (!error && response.statusCode == 200) {
            //console.log('>>>',data);
            success(data);
        }
        else
        {
            console.log('>>>error>>>',error);
        }
    }
    request(options, callback);
};
exports.addCity = function (city,success) {
    var options={
        url: 'http://localhost:8080/city/addCity',
        method:'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(city),
        encoding: 'utf8'
    };
    function callback(error, response, data) {
        if (!error && response.statusCode == 200) {
           // console.log('>>>',data);
            success(data);
        }
        else
        {
            console.log('>>>error>>>',error);
        }
    }
    request(options, callback);
};
exports.editCity = function (city,success) {
    var options={
        url: 'http://localhost:8080/city/updateCity',
        method:'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(city),
        encoding: 'utf8'
    };
    function callback(error, response, data) {
        if (!error && response.statusCode == 200) {
            console.log('>>>',data);
            success(data);
        }
        else
        {
            console.log('>>>error>>>',error);
        }
    }
    request(options, callback);
};

