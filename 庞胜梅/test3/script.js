
/* 鼠标移动 */ 
/* 获取 ID */
const banner = document.getElementById('banner')
let intX

/* css 选择器 */
let imgs = document.querySelectorAll('.view img')
imgs = [...imgs]

/* 返回该对象在应用活动样式表并解析这些值可能包含的任何
   基本计算后，报告元素的所有CSS属性的值。 */
   let imgs_styles = imgs.map(el => {
    let s = window.getComputedStyle(el, null).getPropertyValue('transform')
    return `transform: ${s}`
  })
  
  let imgs_opacitys = imgs.map(el => {
    let o = window.getComputedStyle(el, null).getPropertyValue('opacity')
    return `opacity: ${0}`
  })
  
  /* 定义 */
  function getTranslateVal(str) {
    let s = 'translate', e = ')'
    let si = str.indexOf(s)
    let ei
  }
  
  /* 通过 onmouseenter 监听鼠标开始放上时的 X 轴坐标 */
  banner.onmouseenter = function({ x }) {
    intX = x
  }
  
  /* 通过 onmousemove 监听鼠标移动的距离 */
  banner.onmousemove = function({ x }) {
    imgs.forEach((el, i) => {
      const dm = el.dataset.moveMultiple
      const dis = (intX - x) / Number(dm)
      const transform_arr = imgs_styles[i].split(',')
      let translate_x = Number(transform_arr[4])
      let new_translate_x = translate_x + dis
      transform_arr.splice(4, 1, String(new_translate_x))
      let transform_str = transform_arr.join(',')
  
      if(el.dataset.isOpacity) {
        const o_arr = imgs_opacitys[i].split(':')
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
  
  /* 通过 onmouseleave 监听鼠标离开状态，恢复 css 原本样式 */
  banner.onmouseleave = function() {
    imgs.forEach((el, i) => {
      el.setAttribute('style', imgs_styles[i])
    })
  }

/* canvas 樱花飘落 */
const c = document.getElementById('canvas')
const ctx = c.getContext('2d')//2d表示2维
const _w = c.width, _h = c.height;
const scales = [0.03, 0.04, 0.05, 0.06, 0.07, 0.08];//表示花瓣尺寸
const slen = scales.length - 1;
const speedX = 2, speedY = 3;//speedX表示花瓣沿横向下落速度，speedY表示花瓣垂直下落速度
class flower {
  constructor(){//创造变量
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
    const f = Math.random() * 10 > 5 ? 1 : 0//控制哪一种花瓣
    const si = Math.floor(Math.random() * slen)
    this.speedX = Math.random() * speedX
    this.speedY = Math.random() * speedY
    this.scale = scales[si]//随机选取尺寸
    this.width = this.height = 250 * this.scale//
    const src = f ? "img/bilibili-spring-flow-1.png" : 'img/bilibili-spring-flow-2.png';//根据随机数选择为花瓣1还是花瓣2
    this.img.src = src
  }
  draw(ctx) {
    this.img.onload = () => {//在页面或图像加载完成后立即发生
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
  const max = 100;//控制花瓣数目
  for(let i = 0; i < max; i++) {
    const f = new flower()
    f.init()
    f.draw(ctx)
    flowers.push(f)
  } 
}
function move() {
  ctx.clearRect(0,0,_w,_h)//清除花瓣落下的轨迹，每次只显示每瓣花瓣一瓣的轨迹
  for(let i=0; i<flowers.length; i++) {
    flowers[i].move(ctx)
  }
  window.requestAnimationFrame(move)//按帧进行重绘
}
start()
move()