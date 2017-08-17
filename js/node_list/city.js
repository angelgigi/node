/**
 * Created by Administrator on 2017/7/17.
 */
// 全局变量
var list = new Array();
//全局变量
//dom ready
$(document).ready(function () {
    var Request=undefined;
    Request=GetRequest();
    City.id=Request["id"];
    City.citylist();
});
//多实例对象 闭包
//获取路径参数：id
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for ( var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

//DOM 对象 
var  Page={
    content:$("#content")
};
// 单实例对象 闭包
var City=(function () {
     var id=null;
    function getcity() {
        $.ajax({
            type:"post",
            url:"http://localhost:8081/city/showCity",
            async:false,
            data:{ id: City.id},
            success:function(data) {
                  list.push(data);
            }
        });
        return list;
    }
    //渲染 citylist
    function citylist() {
        var tempData = [];
         tempData.list=getcity();
         var html = template('testtm',tempData);
         Page.content.html(html)
    }
    //return 公共方法
    return{
        citylist:citylist,
       getcity:getcity
    }
})();
//单实例对象
var person=(function () {
    var citymodel = new citymodel();
    return {
        citymodel:citymodel
    }
});
