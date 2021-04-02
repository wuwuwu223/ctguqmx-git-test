var change_sum = 0;
function change_news(){
    if(change_sum == 0){
        $.ajax({
            type: "GET",
            url: "./json/news1.json",
            dataType: "json",
            success: function(data){
                console.log(data.data);
                var _data = data.data;
                var _text = document.getElementsByClassName("text");
                for(var i = 0;i<3;i++){
                    console.log(_data[i]);
                    _text[i].innerHTML = _data[i].text;
                }
                for(var i = 3;i<6;i++){
                    _text[i].innerHTML = _data[i].text;
                }
            },
        })
        change_sum++;
    }
    else if(change_sum == 1){
        $.ajax({
            type: "GET",
            url: "./json/news2.json",
            dataType: "json",
            success: function(data){
                console.log(data.data);
                var _data = data.data;
                var _text = document.getElementsByClassName("text");
                for(var i = 0;i<3;i++){
                    console.log(_data[i]);
                    _text[i].innerHTML = _data[i].text;
                }
                for(var i = 3;i<6;i++){
                    _text[i].innerHTML = _data[i].text;
                }
            },
        })
        change_sum++;
    }
    else if(change_sum == 2){
        $.ajax({
            type: "GET",
            url: "./json/news3.json",
            dataType: "json",
            success: function(data){
                console.log(data.data);
                var _data = data.data;
                var _text = document.getElementsByClassName("text");
                for(var i = 0;i<3;i++){
                    console.log(_data[i]);
                    _text[i].innerHTML = _data[i].text;
                }
                for(var i = 3;i<6;i++){
                    _text[i].innerHTML = _data[i].text;
                }
            },
        })
        change_sum++;
    }
    else if(change_sum == 3){
        $.ajax({
            type: "GET",
            url: "./json/news4.json",
            dataType: "json",
            success: function(data){
                console.log(data.data);
                var _data = data.data;
                var _text = document.getElementsByClassName("text");
                for(var i = 0;i<3;i++){
                    console.log(_data[i]);
                    _text[i].innerHTML = _data[i].text;
                }
                for(var i = 3;i<6;i++){
                    _text[i].innerHTML = _data[i].text;
                }
            },
        })
        change_sum++;
    }
    else if(change_sum == 4){
        $.ajax({
            type: "GET",
            url: "./json/news5.json",
            dataType: "json",
            success: function(data){
                console.log(data.data);
                var _data = data.data;
                var _text = document.getElementsByClassName("text");
                for(var i = 0;i<3;i++){
                    console.log(_data[i]);
                    _text[i].innerHTML = _data[i].text;
                }
                for(var i = 3;i<6;i++){
                    _text[i].innerHTML = _data[i].text;
                }
            },
        })
        change_sum++;
    }
    else if(change_sum == 5){
        change_sum = 0;
    }
}   