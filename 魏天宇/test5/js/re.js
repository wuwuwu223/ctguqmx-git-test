function re() {
    $.ajax({
        url: "https://v1.alapi.cn/api/tophub/get?type=weibo",
        type: 'get',
        dataType: 'json',
        contentType: "application/json",
        success: function(res, status) {
            console.log(res)
            var data = res.data.list;
            alert(data);
            let html = "";
            for (var j = 0; j < data.length; j++) {
                html += '<div class="jumbotron wbrs">' +
                    '<h2  class="text-center">' +
                    data[j].title +
                    '<p class="text-right">' + data[j].other +
                    '</p>' +
                    '<p>' +
                    ' <a class="btn btn-success btn-large" href="' + data[j].link + '" target="_blank">Learn more <span class="glyphicon glyphicon-fire" style="color: rgb(247, 47, 87);"></span></a>' +
                    '</p>' +
                    '</h2>' +
                    '</div>';
            }
            $('#wbrs1').html(html);

        },
        error: function(data) {
            console.log(data)
            alert(data);
        }
    })
}