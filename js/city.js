/**
 * Created by Administrator on 2017/7/17.
 */
// 全局变量
var list = new Array();
//全局变量
//dom ready
$(document).ready(function () {
    City.citylist()
});
//多实例对象 闭包

//DOM 对象 
var  Page={
    content:$("#content")
};
// 单实例对象 闭包
var City=(function () {

    //ajax  获取数据对象
    function getcity() {
        $.ajax({
            type:"post",
            url:"http://localhost:8081/city/getcitylist",
            async:false,
            success:function (data) {
                list = data.list
            }

        });
        return list
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
        citylist:citylist
    }
})();
//单实例对象
var person=(function () {
    var citymodel = new citymodel();
    return {
        citymodel:citymodel
    }
});
