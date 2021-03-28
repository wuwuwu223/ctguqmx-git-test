window.onload = function(){
    var bdNews = document.getElementById("baidu_news_web");
    // startChangeOpacity(100);
    startMove(50);
    //     startMove(30);
}
var timer = null;
var movement = 0;
var alpha = 0;
var speed = 10;
function startMove(moveTarget) {
    clearInterval(timer);
    var bdNews = document.getElementById("baidu_news_web");
    timer = setInterval(function () {
        if(movement>=moveTarget)
            clearInterval(timer);
        else{
            movement += speed;
            alpha += speed;
            bdNews.style.opacity = alpha/50;
            bdNews.style.top = movement + "px";
        }
    },50)
}
// 废旧代码，不过可以让透明度再次变回来，适合鼠标mouseover
// function startChangeOpacity(opTarget){
//     alert("hello");
//     clearInterval(timer);
//     var bdNews = document.getElementById("baidu_news_web");
//     timer = setInterval(function(){
//
//         if(alpha<opTarget){
//             speed = 10;
//         }
//         else if(alpha>opTarget){
//             speed = -10;
//         }
//
//         if(alpha==opTarget){
//
//             clearInterval(timer);
//         }
//         else{
//
//             alpha += speed;
//             bdNews.style.opacity = alpha/100;
//             bdNews.style.filter = 'alpha(opacity='+alpha+')';
//         }
//     },50);
// }