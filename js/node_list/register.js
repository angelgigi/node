/**
 * Created by angelqiqi on 2017/8/17.
 */
//Dom ready
$(document).ready(function () {
    init.bindEvent()
});
//获取Dom对象
var Page={
    Name:$("#Name"),
    District:$("#District"),
    CountryCode:$("#CountryCode"),
    Population:$("#Population"),
};
//主对象 闭包形式
var init=(function () {
    function register(user) {
       $.ajax({
           type:"post",
           url:"http://localhost:8081/city/addCity",
           //data:JSON.stringify(user),
           data:user,
           async:false, //同步请求
           success:function (data) {
               if(data==1){
                   window.location.href="citylist.html"
               }
              else {
                   alert("添加失败")
               }
           },
           error:function () {
               alert("error")
           }
       })
    }
    //绑定元素事件
     function bindEvent() {
         $("#btn").bind("click",function () {
             if(Page.Name.val()!="" && Page.District.val()!="" && Page.CountryCode.val()!="" && Page.Population.val()!="" ){
                 var user={
                     name:Page.Name.val(),
                     district:Page.District.val(),
                     countryCode:Page.CountryCode.val(),
                     population:Page.Population.val()
                 };
                 register(user)
             }
             else {
                 alert("内容不能为空")
             }
         })
     }
    //return 公共方法
    return{
        bindEvent:bindEvent
    }
})();
