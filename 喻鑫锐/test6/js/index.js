var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    speed: 1000,
    // 如果需要分页器
    pagination: {
        // bulletClass:".pageButton",
        // bulletActiveClass: ".pageActiveButton",
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

itemList = document.querySelectorAll(".col3 .col3-item");
urlList = [
    "",
    "",
    "",
    ""
]
