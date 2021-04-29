//轮播图
$(function(){
	var i = 0;//定义索引，图片和小圆点共用
	var timer;//定义定时函数
	$('.m1-left .img a').eq(0).show().siblings().hide();//定义默认的显示图片，也就是索引为0的那张图片
	start();//开始实现图片轮播，用到了定时器
	$('b').click(function(){//当鼠标运动到某个小圆点是，切换图片
		clearInterval(timer);//并且清除定时
		i=$(this).index();//获取当前鼠标运动到的小圆点的索引
		change();//执行切换图片的函数
	});
    $('b').mouseup(function(){
		start();//定义当鼠标离开小圆点时继续执行定时函数，轮播开始
	});
	function start(){//轮播开始函数
		timer = setInterval(function(){//自动轮播定时函数
			i++;//索引进行累加，防止图片只显示一张
			if(i==5){
				i=0;//我这里是用的8张图片，当索引为8时，图片没有了，将索引清零
			}
			change();//继续执行图片轮播
		},2000)//2000是多久切换一次图片，表示两秒
	};
	function change(){//图片显示函数，这里的fadeOut和fadeIn是图片显示方式是淡入淡出
		$('.m1-left .img a').eq(i).fadeIn(300).siblings().stop().fadeOut(300);//eq选择当前图片，siblings表示排除其他图片，stop表示其他图片停止切换，只切换当前图片
		$('b').eq(i).addClass('rudis').siblings().removeClass('rudis');//这里是设置小圆点的背景颜色改变，用的是添加类名的方法，因为我们在css文件里设置了当类名为‘rudis’时设置背景颜色为白色，其他的圆点设置为移除类名，所以其他的没有添加背景颜色
	}
})


//bilibili春
 // 鼠标移动
 const mb = document.getElementById('animate-banner')
 let intX
 let imgs = document.querySelectorAll('.layer img')
 imgs = [...imgs]
 
 let o_imgs_styles = imgs.map(el => {
   let s = window.getComputedStyle(el, null).getPropertyValue('transform')
   return `transform: ${s}`
 })

 let o_imgs_opacitys = imgs.map(el => {
   let o = window.getComputedStyle(el, null).getPropertyValue('opacity')
   return `opacity: ${0}`
 })

 function getTranslateVal(str) {
   let s = 'translate', e = ')'
   let si = str.indexOf(s)
   let ei
 }

 mb.onmouseenter = function({ x }) {
   intX = x
 }
 mb.onmousemove = function({ x }) {
   imgs.forEach((el, i) => {
	 const dm = el.dataset.moveMultiple
	 const dis = (intX - x) / Number(dm)
	 const transform_arr = o_imgs_styles[i].split(',')
	 let translate_x = Number(transform_arr[4])
	 let new_translate_x = translate_x + dis
	 transform_arr.splice(4, 1, String(new_translate_x))
	 let transform_str = transform_arr.join(',')

	 if(el.dataset.isOpacity) {
	   const o_arr = o_imgs_opacitys[i].split(':')
	   const o_value = Number(o_arr[1])
	   let href_w = window.screen.width / 2

	   const o_dis = Number(el.dataset.isOpacity) ? intX - x : x - intX

	   let new_o_value = o_dis / href_w
	   o_arr.splice(1, 1, new_o_value)
	   let o_str = o_arr.join(':')
	   transform_str += `; ${o_str}`
	 }

	 el.setAttribute('style', transform_str)
   })
 }
 mb.onmouseleave = function() {
   imgs.forEach((el, i) => {
	 el.setAttribute('style', o_imgs_styles[i])
   })
 }

 // 樱花飘落canvas 
 const c = document.getElementById('canvas')
 const ctx = c.getContext('2d')
 const _w = c.width, _h = c.height;
 const scales = [0.03, 0.04, 0.05, 0.06, 0.07, 0.08];
 const slen = scales.length - 1;
 const speedX = 2, speedY = 3;
 class flower {
   constructor(){
	 this.x = Math.random() * _w;
	 this.y = 0;
	 this.speedX = 0;
	 this.speedY = 0;
	 this.scale = 0;
	 this.width = 0;
	 this.height = 0;
	 this.img = null
   }
   init() {
	 this.img = new Image()
	 const f = Math.random() * 10 > 5 ? 1 : 0
	 const si = Math.floor(Math.random() * slen)
	 this.speedX = Math.random() * speedX
	 this.speedY = Math.random() * speedY
	 this.scale = scales[si]
	 this.width = this.height = 250 * this.scale
	 const src = f ? "./imgs/flow1.png" : './imgs/flow2.png';
	 this.img.src = src
   }
   draw(ctx) {
	 this.img.onload = () => {
	   ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
	 }
   }
   move(ctx) {
	 this.x = this.x + this.speedX >= _w ? Math.random() * _w : this.x + this.speedX;
	 this.y = this.y >= _h ? 0 : this.y + this.speedY;
	 ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
   }
 }
 const flowers = []
 function start() {
   const max = 50;
   for(let i = 0; i < max; i++) {
	 const f = new flower()
	 f.init()
	 f.draw(ctx)
	 flowers.push(f)
   } 
 }
 function move() {
   ctx.clearRect(0,0,_w,_h)
   for(let i=0; i<flowers.length; i++) {
	 flowers[i].move(ctx)
   }
   window.requestAnimationFrame(move)
 }
 start()
 move()