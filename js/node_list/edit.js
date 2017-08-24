/**
 * Created by angelqiqi on 2017/8/17.
 */
// 全局变量
var list = new Array();
//Dom ready
$(document).ready(function () {
   var request=undefined;
    request=GetRequest();
    init.id=request["id"];
    init.initCity();
    init.bindEvent()
});
// 获取Dom对象
var Page={
    content:$("#content"),
    hdid:$("#hdid"),
    ID:$("#ID"),
    Name:$("#Name"),
    District:$("#District"),
    CountryCode:$("#CountryCode"),
    Population:$("#Population")
};
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
//主对象 闭包模式
var init=(function () {
   function getCity() {
       var id=null;
       $.ajax({
           type:"post",
           url:"http://localhost:8081/city/showCity",
           async:false,
           data:{id:init.id},
           success:function (data) {
               list.push(data);
           }
       });
       return list;
   }
    //修改方法
    function UpdateUser(userModel) {
        $.ajax({
           type:"post",
           url:"http://localhost:8081/city/editCity" ,
            async:false,
            data:userModel,
            success:function () {
                window.location.href="citylist.html"
            },
            error:function () {
                alert("error")
            }
        });
    }
   //绑定事件
    function bindEvent() {
        $("#sure").bind('click',function () {
            var txtVal=$("input[type='text']").val();
            if(txtVal!=""&&txtVal!=null){
                userModel={id:null,name:null,countryCode:null,district:null,population:null};
                userModel.id=Page.ID.val();
                userModel.name=Page.Name.val();
                userModel.countryCode=Page.CountryCode.val();
                userModel.district=Page.District.val();
                userModel.population=Page.Population.val();
                UpdateUser(userModel);
            }else {
                alert("内容不能为空")
            }
        });
    }

    //初始化用户信息
    function initCity() {
        list=getCity(Page.hdid.val());
        if(list!=null){
            Page.ID.val(list[0].id);
            Page.Name.val(list[0].name);
            Page.CountryCode.val(list[0].countryCode);
            Page.District.val(list[0].district);
            Page.Population.val(list[0].population);
        }
        else {
            alert("用户名不能为空")
        }
    }
    //return 公共方法
    return{
        bindEvent:bindEvent,
        initCity:initCity,
        getCity:getCity
    }
})();
