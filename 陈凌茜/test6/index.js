var items =document.getElementsByClassName('hot-item');
var points= document.getElementsByClassName('item');
var index = 0;

var clearActive = function(){
    for(var i=0; i<items.length; i++){
        items[i].className='hot-item';
    }
    for(var i=0; i<points.length; i++){
        points[i].className='item';
    }

}
var goIndex = function(){
    clearActive();
    items[index].className='hot-item active';
    points[index].className='item active';
}
var data = function(){
    for(var i=0; i<fanjus.length; i++){
        fanjus[i].className='fanjuitem';
    }
}

var goNext = function(){
    if(index<2)
        index++;
    else
        index=0;
    goIndex();
}

var goPre = function(){
    if(index==0)
    index=2;
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

