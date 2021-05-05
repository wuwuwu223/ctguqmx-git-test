window.onload = function (){
    var shows = document.getElementsByClassName("new_six");
    var btn = document.getElementsByClassName("head_two")[0];
    btn.onclick = function(){
        for(var i=0;i<shows.length;i++)
        {
            if(shows[i].style.display=="block")
            {
                shows[i].style.display="none";
                i++;
                if(i==shows.length)
                {
                    i=0;
                }
                shows[i].style.display="block";
                return;
            }
        }
    }
} 

