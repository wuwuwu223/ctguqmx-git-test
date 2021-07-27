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
                myiframe.attr('src','./pages/dashboard.html')
                break;
            case " 学生列表":
                console.log("yes");
                myiframe.attr('src',"./pages/studentList.html")
                break;
            case " 评论":
                myiframe.attr('src',"./pages/comments.html")
                break;
            case " 时间线":
                myiframe.attr('src',"./pages/timeLine.html")
                break;
            case " 成果展示":
                myiframe.attr('src',"./pages/show.html")
                break;
            case " 获奖情况":
                myiframe.attr('src',"./pages/reward.html")
                break;
        }
    });
});