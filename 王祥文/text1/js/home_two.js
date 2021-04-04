window.onload = function(){
    var last_a = document.getElementById("last_a");
    var web_menu = document.getElementsByClassName("web_menu")[0];
    last_a.onmousemove = function (){
        web_menu.style.display = "block";
    }
    last_a.onmouseout = function (){
        web_menu.style.display = "none";
    }
    web_menu.onmousemove = function (){
        web_menu.style.display = "block";
    }
    web_menu.onmouseout = function (){
        web_menu.style.display = "none";
    }







    var li_set = document.getElementById("li_set");
    var set = document.getElementsByClassName("set")[0];
    li_set.onmousemove = function (){
        set.style.display = "block";
    }
    li_set.onmouseout = function (){
        set.style.display = "none";
    }
    set.onmousemove = function (){
        set.style.display = "block";
    }
    set.onmouseout = function (){
        set.style.display = "none";
    }
}