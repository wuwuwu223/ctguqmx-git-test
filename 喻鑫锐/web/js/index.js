window.onload = function (){
    let token = localStorage.getItem("token");
    // console.log(token);
    if (token === null){
        window.location.replace("../index.html");
    }
    $.ajax({
        type: "GET",
        url: "https://www.iloveyxr.top:8081/parse?token=" +  token,
        dataType: "json",
        success: res => {
            if(res.name !== "admin"){
                window.location.replace("../index.html");
            }
        }
    });
}

layui.use('element', function(){
    var element = layui.element;

    //一些事件触发
    let myiframe = $("#myiframe");
    element.on('nav(test)', function(data){
        console.log(data);
        var choice = data.context.innerText;
        console.log(choice);
        switch (choice){
            case " 默认展开":
                myiframe.attr('src','./dashboard.html')
                break;
            case " 学生列表":
                console.log("yes");
                myiframe.attr('src',"./studentList.html")
                break;
            case " 评论":
                myiframe.attr('src',"./comments.html")
                break;
            case " 时间线":
                myiframe.attr('src',"./timeLine.html")
                break;
            case " 成果展示":
                myiframe.attr('src',"./show.html")
                break;
            case " 获奖情况":
                myiframe.attr('src',"./reward.html")
                break;
        }
    });
});