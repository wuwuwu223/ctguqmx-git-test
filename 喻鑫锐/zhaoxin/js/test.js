/*************************设置工作室制度部分的悬浮动画 *******/
var sm_flag1 = false;
var sm_flag2 = false;
var sm_flag3 = false;
var sm_flag4 = false;
/*1 */
document.querySelector("#part6-sm-box1").onmouseover = function (){
    if(sm_flag1 == false){
        document.querySelector("#part6-sm-box1").className = document.querySelector("#part6-sm-box1").className + " animated pulse";
        sm_flag1 = true;
    }
    return;
}
document.querySelector("#part6-sm-box1").onmouseleave = function (){
    if(sm_flag1 == true){
        document.querySelector("#part6-sm-box1").className = "part6-sm-div col-lg-3 col-md-6 col-sm-6 col-xs-12 ";
        sm_flag1 = false;
    }
    return;
}

/**2 */
document.querySelector("#part6-sm-box2").onmouseover = function (){
    if(sm_flag2 == false){
        document.querySelector("#part6-sm-box2").className = document.querySelector("#part6-sm-box2").className + " animated pulse";
        sm_flag2 = true;
    }
    return;
}
document.querySelector("#part6-sm-box2").onmouseleave = function (){
    if(sm_flag2 == true){
        document.querySelector("#part6-sm-box2").className = "part6-sm-div col-lg-3 col-md-6 col-sm-6 col-xs-12";
        sm_flag2 = false;
    }
    return;
}

/*3 */
document.querySelector("#part6-sm-box3").onmouseover = function (){
    if(sm_flag3 == false){
        document.querySelector("#part6-sm-box3").className = document.querySelector("#part6-sm-box3").className + " animated pulse";
        sm_flag3 = true;
    }
    return;
}
document.querySelector("#part6-sm-box3").onmouseleave = function (){
    if(sm_flag3 == true){
        document.querySelector("#part6-sm-box3").className = "part6-sm-div col-lg-3 col-md-6 col-sm-6 col-xs-12 ";
        sm_flag3 = false;
    }
    return;
}

/*4 */
document.querySelector("#part6-sm-box4").onmouseover = function (){
    if(sm_flag4 == false){
        document.querySelector("#part6-sm-box4").className = document.querySelector("#part6-sm-box4").className + " animated pulse";
        sm_flag4 = true;
    }
    return;
}
document.querySelector("#part6-sm-box4").onmouseleave = function (){
    if(sm_flag4 == true){
        document.querySelector("#part6-sm-box4").className = "part6-sm-div col-lg-3 col-md-6 col-sm-6 col-xs-12 ";
        sm_flag4 = false;
    }
    return;
}
/*************************************************************/
$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
});
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView : 1,
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})