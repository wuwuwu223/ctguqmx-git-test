function btn(){
    $.ajax({
        url: "https://v1.alapi.cn/api/new/wbtop?num=10",
        type: 'get',
        dataType: 'json',
        contentType: "application/json",
        success: function (res, status) {
            var data = res.data;
            alert(data);
            var html = "";
            for(var i = 0; i < data.length; i++){
                html += 
                    '<div class="container">'+
                        '<h1>'+data[i].hot_word+'</h1>'+
                        '<p>'+data[i].hot_word_num+'</p>'+
                        '<p>'+
                            '<a class="btn btn-primary btn-lg" href="#" role="button" >Learn more</a>'+
                        '</p>'+
                    '</div>'
            }
            $('#top').html(html);
            $('#top').html(html);
        },
        error:function(data){
            alert(data);
        }
    })
}