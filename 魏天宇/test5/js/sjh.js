function btn() {
    $.ajax({
        url: "https://api.66mz8.com/api/quotation.php?format=json",
        type: 'get',
        dataType: 'json',
        contentType: "multipart/form-data",
        success: function(res) {
            var data = res.quotation;
            console.log(res)
            alert(data);
            let html = "";
            html += '<div class="jumbotron well">' +
                '<h3 style="margin-top: 20px;">Good luck!</h3>' +
                '<p style="color: rgb(83, 72, 247);font-weight: 500;font-family: kaiti;">' +
                data +
                '</p>' +
                '<p style="font-family: kaiti;color:rgb(178, 74, 248);">' +
                ' <button type="button" class="btn btn-success" onclick="btn()"><span class="glyphicon glyphicon-ok" ></span></button>' +
                '再来一句！' + '</p>' +
                '</div>';
            $('#top').html(html);
        },
        error: function(data) {
            console.log(data)
            alert(data);
        }
    });
}