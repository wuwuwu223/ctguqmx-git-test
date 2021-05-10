// 方块的宽，高，行数，列数
var sw = 20,sh=20,tr=30,td=30;
var snake = null,food=null,game=null;
// 创建 构造函数 square
function Square(x,y,calssname){
    this.x = x * sw;
    this.y = y * sh;
    this.class = calssname;
    this.viewcontent = document.createElement('div');
    this.viewcontent.className = this.class;
    this.parent = document.querySelector('#snakewrap');
}
// 将方法放到原型对象中
Square.prototype.create = function(){
    this.viewcontent.style.position = 'absolute';
    this.viewcontent.style.width = sw+'px';
    this.viewcontent.style.height = sh+'px';
    this.viewcontent.style.left = this.x+'px';
    this.viewcontent.style.top = this.y+'px';
    // 创建的方块放置到页面中
    this.parent.appendChild(this.viewcontent);
}
// 删除方块
Square.prototype.remove = function(){
    this.parent.removeChild(this.viewcontent);
}
// 创建蛇构造函数
function Snake(){
    this.head = null;
    this.tail = null;
    // 存储蛇身每一个方块的位置
    this.pos = [];
    // 蛇运动的位置
    this.diretionNum = {
        left:{
            x:-1,
            y:0,
            rotate:180
        },
        right:{
            x:1,
            y:0,
            rotate:0
        },
        up:{
            x:0,
            y:-1,
            rotate:-90
        },
        down:{
            x:0,
            y:1,
            rotate:90
        }
    }
}
// 初始化方法
Snake.prototype.init = function(){
    // 创建蛇头
    var snakeHead = new Square(2,0,'snakehead');
    snakeHead.create();
    this.head = snakeHead;// 存储蛇头的信息
    this.pos.push([2,0]);// 存储蛇头的位置利用push方法
    // 创建蛇身1
    var snakebody1 = new Square(1,0,'snakebody');
    snakebody1.create();
    this.pos.push([1,0]);
    // 创建蛇身2
    var snakebody2 = new Square(0,0,'snakebody');
    snakebody2.create();
    this.tail = snakebody2;// 存储蛇尾的信息
    this.pos.push([0,0]);
    // 链表关系
    snakeHead.last = null;
    snakeHead.next = snakebody1;

    snakebody1.last = snakeHead;
    snakebody1.next = snakebody2;

    snakebody2.last = snakebody1;
    snakebody2.next = null;
    // 默认蛇走的方向
    this.diretion = this.diretionNum.right;
};

//这个方法用来获取蛇头下一个位置对应的元素，根据元素进行下一步
Snake.prototype.getNextPos = function(){
    // 蛇头要走的下一个坐标
    var postNext = [
        this.head.x/sw+this.diretion.x,
        this.head.y/sh+this.diretion.y
    ]
    
    // 自己，游戏结束
    var self = false;
    this.pos.forEach(function(v){
        if(v[0]==postNext[0]&&v[1]==postNext[1])
        {
            self=true;
        }
    });
    if(self)
    {
        // console.log("撞到自己");
        this.strategies.die.call(this);
        return;
    }
    // 墙，游戏结束
    if(postNext[0]<0||postNext[1]<0||postNext[0]>td-1||postNext[1]>tr-1)
    {
        this.strategies.die.call(this);
        return;
    }
    // 苹果，吃
    if(food && food.pos[0]==postNext[0]&&food.pos[1]==postNext[1])
    {
        console.log("吃到了");
        this.strategies.eat.call(this);
        return;
    }
    // 什么都没有，走
    this.strategies.move.call(this);
}
// 处理碰撞后的事情
Snake.prototype.strategies = {
     move:function(format){//format用来判断要不要删蛇尾
        // 创建新身体
        var newBody = new Square(this.head.x/sw,this.head.y/sh,'snakebody')
        // 更新链表关系
        newBody.next = this.head.next;
        newBody.next.last = newBody;
        newBody.last = null;
        // 删除旧蛇头
        this.head.remove();
        newBody.create();
        // 创建新蛇头
        var newHead = new Square(this.head.x/sw+this.diretion.x,this.head.y/sh+this.diretion.y,'snakehead')
        newHead.next = newBody;
        newHead.last = null;
        newBody.last = newHead;
        newHead.viewcontent.style.transform = 'rotate('+this.diretion.rotate+'deg)';
        newHead.create();
        // 更新蛇头坐标
        this.pos.splice(0,0,[this.head.x/sw+this.diretion.x,this.head.y/sh+this.diretion.y]);
        this.head = newHead;
        // 删除蛇尾
        if(!format)
        {
            this.tail.remove();
            this.tail= this.tail.last;
            this.pos.pop();
        }
    },
    eat:function(){
        this.strategies.move.call(this,true);
        creatFood();
        game.score++;
        if(game.score>20)
        {
            game.time = setInterval(function(){
                snake.getNextPos();
            },500);
        }else if(game.score>40){
            game.time = setInterval(function(){
                snake.getNextPos();
            },400);
        }else if(game.score>60){
            game.time = setInterval(function(){
                snake.getNextPos();
            },300);
        }else if(game.score>80){
            game.time = setInterval(function(){
                snake.getNextPos();
            },200);
        }else if(game.score>100){
            game.time = setInterval(function(){
                snake.getNextPos();
            },100);
        }
    },
    die:function(){
        game.over();
    }
}
snake = new Snake();


// 创建食物实例
function creatFood(){
    // 食物的坐标
    var x = null;
    var y = null;
    // 判断坐标是否在蛇身上
    var include = true;
    while(include)
    {
        x = Math.round(Math.random()*(td-1));
        y = Math.round(Math.random()*(tr-1));
        snake.pos.forEach(function(v){
            if(x!=v[0]&&y!=v[1]){
                include = false;
            }
        })
    }
    food = new Square(x,y,'food');
    // 储存食物的随机坐标
    food.pos=[x,y];
    var foodDom = document.querySelector(".food");
    if(foodDom){
        foodDom.style.left = x*sw +'px';
        foodDom.style.top= y*sh +'px';
    }else {
        food.create();
    }
}


// 游戏的实例
function Game(){
    this.time = null;
    this.score = 0;
}
Game.prototype.init = function(){
    snake.init();
    creatFood();
    document.onkeydown = function(event){
        if(event.keyCode == 37 && snake.diretion!=snake.diretionNum.right)
        {
            snake.diretion = snake.diretionNum.left;
        }else if(event.keyCode == 38 && snake.diretion!=snake.diretionNum.down)
        {
            snake.diretion = snake.diretionNum.up;
        }else if (event.keyCode == 39 && snake.diretion!=snake.diretionNum.left)
        {
            snake.diretion = snake.diretionNum.right;
        }else if (event.keyCode == 40 && snake.diretion!=snake.diretionNum.up)
        {
            snake.diretion = snake.diretionNum.down;
        }
    }
    this.start();
}
// 蛇运动
Game.prototype.start = function(){
    this.time = setInterval(function(){
        snake.getNextPos();
    },600);
}
// 结束游戏
Game.prototype.over = function(){
    clearInterval(this.time);
    alert('你的得分:'+game.score);
    // 游戏回到最初状态
    var snakewrap = document.querySelector("#snakewrap");
    snakewrap.innerHTML = "";
    snake = new Snake();
    game = new Game();
    var starbtnwrap = document.querySelector(".starbtn");
    starbtnwrap.style.display = 'block';
}
// 开启游戏
game = new Game();
var starbtn = document.querySelector(".starbtn button");
console.log(starbtn.parentNode);
starbtn.onclick = function(){
    starbtn.parentNode.style.display = 'none';
    game.init();
}

// 暂停游戏
Game.prototype.pause = function(){
    clearInterval(this.time);
}
var snakewrap = document.querySelector("#snakewrap");
var pushbtn = document.querySelector(".pusebtn button");
snakewrap.onclick = function(){
    game.pause();
    pushbtn.parentNode.style.display = 'block';
}
pushbtn.onclick = function(){
    game.start();
    pushbtn.parentNode.style.display = 'none';
}
