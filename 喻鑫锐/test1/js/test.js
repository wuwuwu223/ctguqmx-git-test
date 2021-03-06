document.addEventListener("drop",function(e){  //拖离   
    e.preventDefault();      
})  
document.addEventListener("dragleave",function(e){  //拖后放   
    e.preventDefault();      
})  
document.addEventListener("dragenter",function(e){  //拖进  
    e.preventDefault();      
})  
document.addEventListener("dragover",function(e){  //拖来拖去    
    e.preventDefault();      
}) 


var box = document.getElementById('drop_area'); //拖拽区域     
box.addEventListener("drop",function(e){           
    var fileList = e.dataTransfer.files; //获取文件对象    
    //检测是否是拖拽文件到页面的操作            
    if(fileList.length == 0){                
        return false;            
    }             
    //拖拉图片到浏览器，可以实现预览功能    
    //规定视频格式  
    Array.prototype.S=String.fromCharCode(2);  
    Array.prototype.in_array=function(e){  
        var r=new RegExp(this.S+e+this.S);  
        return (r.test(this.S+this.join(this.S)+this.S));  
    };  
    var video_type=["video/mp4","video/ogg"];  
      
    //创建一个url连接,供src属性引用  
    var fileurl = window.URL.createObjectURL(fileList[0]);
    if(fileList[0].type.indexOf('image') === 0){  //如果是图片  
        var str="<img width='200px' height='200px' src='"+fileurl+"'>";  
        document.getElementById('drop_area').innerHTML=str;                   
    }else if(video_type.in_array(fileList[0].type)){   //如果是规定格式内的视频                    
        var str="<video width='200px' height='200px' controls='controls' src='"+fileurl+"'></video>";  
        document.getElementById('drop_area').innerHTML=str;        
    }else{ //其他格式，输出文件名  
        //alert("不预览");  
        var str="文件名字:"+fileList[0].name;  
        document.getElementById('drop_area').innerHTML=str;      
    }         
    resultfile = fileList[0];             
},false);


$("#btn-loading").click(function (){
    console.log("success");
    var img = $("#FileUpload")[0].files[0];
    console.log(img);
    var formData = new FormData();
    formData.append('upload',img);
    console.log(formData.upload);

    // formFile.append("action", "UploadVMKImagePath");
    //formFile.append("upload", fileObj); //加入文件对象

    $.ajax({
        url: "http://47.102.198.114:9090/upload/one",
        data: formData,
        type: "POST",
        //dataType: "json",
        processData: false,//用于对data参数进行序列化处理 这里必须false
        contentType: false, //必须
        success: function (result) {
            alert("上传完成!");
        },
        error: function (xhr){
            console.log(xhr.status);
        }
    });
});