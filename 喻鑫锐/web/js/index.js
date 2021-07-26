layui.use('element', function(){
    var element = layui.element;

    //一些事件触发
    let myiframe = $("#myiframe");
    element.on('nav(test)', function(data){
        // console.log(data);
        var choice = data.context.innerText;
        console.log(choice);
        console.log(typeof(choice));
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
        }
    });
});