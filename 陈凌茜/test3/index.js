var items =document.getElementsByClassName('hot-item');
var points= document.getElementsByClassName('item');
var texts = document.getElementsByClassName('itemtext');
var fanjus = document.getElementsByClassName('fanjuitem');
var datas = document.getElementsByClassName('dataliebiao');
var videombs = document.getElementsByClassName('videomb');
var index = 0;
var index1 = 0;

var clearActive = function(){
    for(var i=0; i<items.length; i++){
        items[i].className='hot-item';
    }
    for(var i=0; i<points.length; i++){
        points[i].className='item';
    }
    for(var i=0; i<texts.length; i++){
        texts[i].className='itemtext';
    }

}
var goIndex = function(){
    clearActive();
    items[index].className='hot-item active';
    points[index].className='item active';
    texts[index].className='itemtext active';
}
var data = function(){
    for(var i=0; i<fanjus.length; i++){
        fanjus[i].className='fanjuitem';
    }
    for(var i=0; i<datas.length; i++){
        datas[i].className='dataliebiao';
    }
    fanjus[index1].className='fanjuitem active';
    datas[index1].className='dataliebiao active';
}

var goNext = function(){
    if(index<4)
        index++;
    else
        index=0;
    goIndex();
}

var goPre = function(){
    if(index==0)
    index=4;
    else 
    index--;
    goIndex();
}

function select(className){
        index= className.getAttribute('data-index');
        goIndex();  
    }
function change(className){
        index1= className.getAttribute('data-i');
       data();  
     
    }

setInterval(function(){
goNext();
},4000)


function mOver(obj){
    obj.children[1].className='videomb active';
    }
    function mOut(obj){
        obj.children[1].className='videomb';
        }

const shell = document.querySelector(".shell");
const video = document.querySelector(".video");
shell.addEventListener('mouseenter',function(e){
    this.x=e.clientX
    video.style.transition = 'none'
})
shell.addEventListener('mousemove',function(e){
   this._x=e.clientX
   const disx = this.x-this._x
   const move = -150-disx/-25
   video.style.transform = `translate(${move}px,-8px)`
})
shell.addEventListener('mouseleave',function(e){
   video.style.transition = .3+'s'
   video.style.transform = 'translate(-150px,-8px)'
})

