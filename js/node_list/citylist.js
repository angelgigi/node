/**
 * Created by Administrator on 2017/6/27.
 */
//全局变量
var isShow = false;
var list = new Array();

//dom ready
$(document).ready(function () {
    City.showList();
    City.bindEvent();
});


//多实例对象  闭包
var cityModel=function () {
    var cityName="";
    function setCityName(cityname) {
        this.cityName=cityname;
    }
    return{
        cityName:cityName,
        setCityName:setCityName
    }
};

//单实例对象  普通模式创建
var PageEl={
    cityul:$("#cityul"),
    btn_cityList:$("#btn_cityList"),
    content:$("#content"),
    btn_update:$("#btn_update"),
    country:$("#country"),
    country_text:$("#country_text"),
    myform:$("#myform"),
    btn:$("#btn")
};

//单实例对象  闭包
var City = (function () {

    //实例化对象
    var  citymodel=new cityModel();
    citymodel.setCityName("sdd");

    //ajax 获取数据对象
    function getCityList() {

        $.ajax({
            type: "post",
            url: "http://localhost:8081/city/getcitylist",
            async: false,
            success: function (data) {
              list = data.list;
            }
        });
        return list;
    }

    //循环输出html 渲染页面
    function forTest(cityList) {
        if (!isShow) {
            for (var i = 0; i < cityList.length; i++) {
                alert(cityList[i].id);
                PageEl.cityul.append("<li>" + i + "</li>")
            }
            isShow = true;
        }
        else {
            PageEl.cityul.html("");
            isShow = false;
        }
    }
    //删除方法
    function delCity(id){
         $.ajax({
             type:"post",
             url:"http://localhost:8081/city/deleteCity",
             async:false,
             data:{id:id},
             success:function(data) {
                 if(data==1){
                     showList();
                     bindEvent();
                 }
                 else {
                     alert("删除失败")
                 }
             }
         })
     }
    //绑定页面元素事件
    function bindEvent() {
         $(".del").each(function (i) {
            $(this).bind('click',function () {
                if(confirm("确认删除这条记录？")){
                    delCity($(this).attr("cityid"));

                }
                else {
                    return false;
                }
            }) 
         });
    }

    //渲染citylist
    function showList() {
        var tempData = [];
        tempData.list = getCityList();
        var html = template('testtm', tempData);
        PageEl.content.html(html);

    }
    //return 公共方法
    return{
        getCityList:getCityList,
        bindEvent:bindEvent,
        showList:showList,
        cityModel:citymodel,
        delCity:delCity
        //updateCity:updateCity,
        //add:add,
        //addCheckbox:addCheckbox
    }

})();


//单实例对象
var person =(function () {

    var  citymodel=new cityModel();

    return{
        citymodel:citymodel
    }

})();
