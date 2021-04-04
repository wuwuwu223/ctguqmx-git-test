id = 1;
function m() {
    const containerStyle = document.querySelector('#menu').style;
    const childs =  document.querySelectorAll('#menu li');
    let totalHeight = 0;
    childs.forEach(child => {
        totalHeight += parseInt(child.offsetHeight);
    });
    if (containerStyle.height == '0px') {
        containerStyle.height = `${totalHeight}px`;
    } else {
        containerStyle.height = '0px';
    }
}
function setting() {
    const containerStyle = document.querySelector('#setting').style;
    const containerStyle2 = document.querySelector('.set .pointer').style;
    const childs =  document.querySelectorAll('#setting .hidden');
    let totalHeight = 60;
    childs.forEach(child => {
        totalHeight += parseInt(child.offsetHeight);
    });
    if (containerStyle.height == '60px') {
        containerStyle.height = `${totalHeight}px`;
        containerStyle2.backgroundPositionY = '0px';
    } else {
        containerStyle.height = '60px';
        containerStyle2.backgroundPositionY = '-11px';
    }
}
function menu(){
    const containerStyle = document.querySelector('#menu').style;
    var childs =  document.querySelectorAll('#setting .hidden');
    let totalHeight = 0;
    childs.forEach(child => {
        totalHeight += parseInt(child.offsetHeight);
    });
    childs =  document.querySelectorAll('#menu li');
    childs.forEach(child => {
        totalHeight += parseInt(child.offsetHeight);
    });
        containerStyle.height = `${totalHeight}px`;
}
function homepage(){
    const containerStyle = document.querySelector('#homepage').style;
    const containerStyle2 = document.querySelector('.temp .pointer').style;
    const childs =  document.querySelectorAll('#homepage .hom');
    let totalHeight = 60;
    childs.forEach(child => {
        totalHeight += parseInt(child.offsetHeight);
    });
    if (containerStyle.height == '60px') {
        containerStyle.height = `${totalHeight}px`;
        containerStyle2.backgroundPositionY = '0px';
    } else {
        containerStyle.height = '60px';
        containerStyle2.backgroundPositionY = '-11px';
    }
}
function on_of_menu(){
    const containerStyle = document.querySelector('.div1').style;
    if(containerStyle.display == 'block'){
        containerStyle.display = 'none';
    }
    else{
        containerStyle.display = 'block';
    }
}
function on_of_background(){
    const containerStyle = document.querySelector('.background').style;
    if(containerStyle.display == 'block'){
        containerStyle.display = 'none';
    }
    else{
        containerStyle.display = 'block';
    }
}
function sleep(sleepTime) {
    for(var start = Date.now(); Date.now() - start <= sleepTime; ) { }
}
function changeBackgroundLeft(){
    const containerStyle = document.querySelector('.background').style;
    if(id == 0){
        id = 1;
        //立春
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E6%A1%8C%E9%9D%A2%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?tn=50000021_hao_pg&ie=utf-8&sc=UWd1pgw-pA7EnHc1FMfqnHmknHnsnWnkrjfYnBuW5y99U1Dznzu9m1Y1n1fsn1m4PH6L&ssl_sample=normal&srcqid=4947799501858455151&H123Tmp=nunew7&word=%E7%AB%8B%E6%98%A5";
    }
    else if(id == 1){
        id = 2;
        //情人节
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E6%A1%8C%E9%9D%A2%E5%A3%81%E7%BA%B8_iCpf18.jpg")';
        document.getElementById("mes").href ="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E6%83%85%E4%BA%BA%E8%8A%82&oq=%25E7%25AB%258B%25E6%2598%25A5&rsv_pq=9b3db42b0003806c&rsv_t=944fbLyVwzSGSESfm57m%2BhV03FDg7f2hR%2BTWAsLH8bnlx10P0mOmUTbTHuqYy%2FAaBOI8Iipg&rqlang=cn&rsv_dl=tb&rsv_enter=0&rsv_sug3=2&rsv_sug1=3&rsv_sug7=100&rsv_btype=t&inputT=2390&rsv_sug4=3346";
    }
    else if(id == 2){
        id = 3;
        //元宵节
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E6%A1%8C%E9%9D%A2%E5%A3%81%E7%BA%B8_nxhmEq.jpg")';
        document.getElementById("mes").href ="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=%E5%85%83%E5%AE%B5%E8%8A%82&fenlei=256&oq=%25E4%25B8%25AD%25E7%25A7%258B%25E8%258A%2582&rsv_pq=cc1a869900036a71&rsv_t=72bfn22%2BjSoF2ud82FQz%2FgmLUgzbAeWxICmKuYwgjW5sHbMLktWfbujr7IM&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&rsv_sug3=89&rsv_sug1=98&rsv_sug7=100&prefixsug=%25E5%2585%2583%25E5%25AE%25B5%25E8%258A%2582&rsp=5&rsv_sug4=3396";
    }
    else if(id == 3){
        id = 4;
        //植树节
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E6%A4%8D%E6%A0%91%E8%8A%82%E6%A1%8C%E9%9D%A2%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E6%A4%8D%E7%89%A9%E8%8A%82&oq=%25E7%25AB%258B%25E6%2598%25A5&rsv_pq=c4c602d90003817b&rsv_t=cf67aITyWkUMNGxSzghv92qKdqOV14OHGWo8tSBbuBmuoRdHiSRFB0%2BYfGsVoIvy6eMZlJdk&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_sug3=2&rsv_sug1=3&rsv_sug7=100&rsv_btype=t&prefixsug=%25E6%25A4%258D%25E7%2589%25A9%25E8%258A%2582&rsp=0&rsv_sug4=11066";
    }
    else if(id == 4){
        id = 5;
        //春分
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/3%E6%9C%8821%E6%97%A5%E6%98%A5%E5%88%86%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E6%98%A5%E5%88%86&oq=%25E6%25A4%258D%25E7%2589%25A9%25E8%258A%2582&rsv_pq=da42d2d60003f177&rsv_t=6651R3sfFDhdCD4xzJ6rFs6S0cDDHFV7VTj%2FG84y%2BxI3BV0hvEnv4NaXJlNwyGLPQanS7V1G&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&rsv_sug3=4&rsv_sug1=7&rsv_sug7=100&rsv_sug2=0&inputT=2&rsv_sug4=3107";
    }
    else if(id == 5){
        id = 6;
        //谷雨
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E8%B0%B7%E9%9B%A8%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E8%B0%B7%E9%9B%A8&oq=%25E6%2598%25A5%25E5%2588%2586&rsv_pq=a37e0a4d00018365&rsv_t=669bqrFlHKWTbAO4zPY%2B3FzGlHNNaoiKBvNZIoDUeCxNfvlMfjZ%2BOaKzP8ULTbDw0L9MuFEi&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&inputT=6&rsv_sug3=6&rsv_sug1=9&rsv_sug7=100&rsv_sug2=0&rsv_sug4=2682";
    }
    else if(id == 6){
        id = 7;
        //立夏
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E7%AB%8B%E5%A4%8F%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E7%AB%8B%E5%A4%8F&oq=%25E8%25B0%25B7%25E9%259B%25A8&rsv_pq=aaad555d0003b7d4&rsv_t=3083fwev7KzUlRjVQyuAICilsITFpgaMOsH%2BXw6WJUI0aZGee12Mu14T8OcCKjwd%2BITL1XnY&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&inputT=3&rsv_sug3=8&rsv_sug1=13&rsv_sug7=100&rsv_sug2=0&rsv_sug4=2052";
    }
    else if(id == 7){
        id = 8;
        //小满
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E5%B0%8F%E6%BB%A1%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E5%B0%8F%E6%BB%A1&oq=%25E5%25B0%258F%25E6%25BB%25A1&rsv_pq=ad4a360b0003bd50&rsv_t=766dTEcQxWNWGPuebRtc7IuIss3ZamFUD%2FoK1sg7YpzZ4G30T08CGt0Mcsv4v3IQQ2X%2FROTb&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&rsv_sug=1";
    }
    else if(id == 8){
        id = 9;
        //芒种
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E8%8A%92%E7%A7%8D%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E8%8A%92%E7%A7%8D&oq=%25E5%25B0%258F%25E6%25BB%25A1&rsv_pq=ff6b26cf0003cb83&rsv_t=e47digjDxGiSGAGlKGbqVN9Jbqc5daqW63RClxzMXil2j6zEs2ShUMO9s1AvvL6fJYsC%2BtHv&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&rsv_sug3=12&rsv_sug1=21&rsv_sug7=100&rsv_sug2=0&inputT=2&rsv_sug4=2743";
    }
    else if(id == 9){
        id = 10;
        //夏至
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/6%E6%9C%8821%E6%97%A5%E5%A4%8F%E8%87%B3%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%EF%BC%88RGB%EF%BC%89.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E5%A4%8F%E8%87%B3&oq=%25E8%258A%2592%25E7%25A7%258D&rsv_pq=b44f8e5a00015a14&rsv_t=cb7cGCAfg3vdS7vR6Rqf4faNOtTV221GMStZvRFQSeP8mt7YUZhUhQS%2FKCXqVys1WHpTlQl4&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&inputT=1&rsv_sug3=14&rsv_sug1=24&rsv_sug7=100&rsv_sug2=0&rsv_sug4=1975";
    }
    else if(id == 10){
        id = 11;
        //小暑
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/7%E6%9C%88%E5%B0%8F%E6%9A%91%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E5%B0%8F%E6%9A%91&oq=%25E5%25A4%258F%25E8%2587%25B3&rsv_pq=d825ecb80000ae8f&rsv_t=a8c2oCqI1JArOwryJAxUmSiSjLV160Moq7n2YjEoMElep16RxUhmB5o%2BlkmqC5mzPWYCZVVw&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&inputT=2&rsv_sug3=16&rsv_sug1=28&rsv_sug7=100&rsv_sug2=0&rsv_sug4=1988";
    }
    else if(id == 11){
        id = 12;
        //愚人节
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E6%A1%8C%E9%9D%A2%E5%A3%81%E7%BA%B8_emgLjh.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E6%84%9A%E4%BA%BA%E8%8A%82&oq=%25E5%25B0%258F%25E6%259A%2591&rsv_pq=b6b00cf100039737&rsv_t=860bbAHgX6D%2B1YuXXwO8E3LHzvcV95CJGhTGnS73l2zolnX7vLNhIvMGkX1myIW6opIriXlW&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&inputT=3&rsv_sug3=18&rsv_sug1=32&rsv_sug7=100&rsv_sug2=0&rsv_sug4=1939";
    }
    else if(id == 12){
        id = 13;
        //清明节
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/4%E6%9C%885%E6%97%A5%E6%B8%85%E6%98%8E%E8%8A%82%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E6%B8%85%E6%98%8E%E8%8A%82&oq=%25E6%2584%259A%25E4%25BA%25BA%25E8%258A%2582&rsv_pq=9be853010003d4f3&rsv_t=2094qae2t4s2VDnSh8c7b7GsDzkxaAYtxCsiz2v4f3Fu%2BPA5LI6Lk96g9qby4XuBi2yMfHCV&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&inputT=2&rsv_sug3=20&rsv_sug1=35&rsv_sug7=100&rsv_sug2=0&rsv_sug4=3462";
    }
    else if(id == 13){
        id = 14;
        //母亲节
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E6%AF%8D%E4%BA%B2%E8%8A%82&oq=%25E6%25B8%2585%25E6%2598%258E%25E8%258A%2582&rsv_pq=fa926c260003d447&rsv_t=2b6foi5sz6fUbZs%2B3jyZlxwNbZ5qbE45vmztq9gm9DEWaSx6eUP1%2BHKNLvExL%2BGKHV2DvdmR&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&inputT=1&rsv_sug3=22&rsv_sug1=39&rsv_sug7=100&rsv_sug2=0&rsv_sug4=2434";
    }
    else if(id == 14){
        id = 15;
        //儿童节
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/6%E6%9C%88%E5%84%BF%E7%AB%A5%E8%8A%82%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%EF%BC%88%E6%9C%89%E6%97%A5%E6%9C%9F%EF%BC%89.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E5%84%BF%E7%AB%A5%E8%8A%82&oq=%25E5%2584%25BF%25E7%25AB%25A5%25E8%258A%2582&rsv_pq=d99249aa0000c894&rsv_t=3210L07oAMgjJMN7k96AytqLBwAYtPfOfiqU9fCGL1A8HOQ9H945SgWA%2FFyx%2Fx3fX%2FT6%2Bp01&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&rsv_sug=1";
    }
    else if(id == 15){
        id = 16;
        //端午节
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/6%E6%9C%88%E7%AB%AF%E5%8D%88%E8%8A%82%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E7%AB%AF%E5%8D%88%E8%8A%82&oq=%25E5%2584%25BF%25E7%25AB%25A5%25E8%258A%2582&rsv_pq=d3e80f93000173ae&rsv_t=2689STt%2BQvnD7a1a9BGOg9QUJHagyz%2FK3WDbVxqTk8VDVVyeRtBaqD8IMy0TR2WyC%2FEJNvH%2B&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&rsv_sug3=26&rsv_sug1=48&rsv_sug7=100&rsv_sug2=0&inputT=2&rsv_sug4=3106";
    }
    else if(id == 16){
        id = 17;
        //春节
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E6%A1%8C%E9%9D%A2%E5%A3%81%E7%BA%B8_FjvG9i.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E6%98%A5%E8%8A%82&oq=%25E7%25AB%25AF%25E5%258D%2588%25E8%258A%2582&rsv_pq=b1e08a520003bde4&rsv_t=490cDN0lK2%2BWqETV65Q6sRtbi6i7eKJ22C1UfMFJSJzqgzbVN5WsYj9%2Be7Htc6gS9h2MSznW&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&inputT=2&rsv_sug3=28&rsv_sug1=52&rsv_sug7=100&rsv_sug2=0&rsv_sug4=2173";
    }
    else if(id == 17){
        id = 0;
        //中秋节
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E7%AC%AC%E4%BA%8C%E7%89%88%E4%B8%AD%E7%A7%8B%E5%A3%81%E7%BA%B8-02.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E4%B8%AD%E7%A7%8B%E8%8A%82&oq=%25E6%2598%25A5%25E8%258A%2582&rsv_pq=dc79243700041ab0&rsv_t=6be3WGqRuRSiwD0taknMsM8l2I6hmIIULZVdC%2F0MKMW8NxE6jqzXQsVLY4xH%2BEO5IzJQnsKe&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&inputT=4&rsv_sug3=30&rsv_sug1=56&rsv_sug7=100&rsv_sug2=0&prefixsug=%25E4%25B8%25AD%25E7%25A7%258B%25E8%258A%2582&rsp=1&rsv_sug4=4420&rsv_sug=1";
    }
    console.log(id);
    containerStyle.opacity = 1;
}
function changeBackgroundRight(){
    const containerStyle = document.querySelector('.background').style;
    if(id == 2){
        id = 1;
        //立春
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E6%A1%8C%E9%9D%A2%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?tn=50000021_hao_pg&ie=utf-8&sc=UWd1pgw-pA7EnHc1FMfqnHmknHnsnWnkrjfYnBuW5y99U1Dznzu9m1Y1n1fsn1m4PH6L&ssl_sample=normal&srcqid=4947799501858455151&H123Tmp=nunew7&word=%E7%AB%8B%E6%98%A5";
    }
    else if(id == 3){
        id = 2;
        //情人节
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E6%A1%8C%E9%9D%A2%E5%A3%81%E7%BA%B8_iCpf18.jpg")';
        document.getElementById("mes").href ="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E6%83%85%E4%BA%BA%E8%8A%82&oq=%25E7%25AB%258B%25E6%2598%25A5&rsv_pq=9b3db42b0003806c&rsv_t=944fbLyVwzSGSESfm57m%2BhV03FDg7f2hR%2BTWAsLH8bnlx10P0mOmUTbTHuqYy%2FAaBOI8Iipg&rqlang=cn&rsv_dl=tb&rsv_enter=0&rsv_sug3=2&rsv_sug1=3&rsv_sug7=100&rsv_btype=t&inputT=2390&rsv_sug4=3346";
    }
    else if(id == 4){
        id = 3;
        //元宵节
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E6%A1%8C%E9%9D%A2%E5%A3%81%E7%BA%B8_nxhmEq.jpg")';
        document.getElementById("mes").href ="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=%E5%85%83%E5%AE%B5%E8%8A%82&fenlei=256&oq=%25E4%25B8%25AD%25E7%25A7%258B%25E8%258A%2582&rsv_pq=cc1a869900036a71&rsv_t=72bfn22%2BjSoF2ud82FQz%2FgmLUgzbAeWxICmKuYwgjW5sHbMLktWfbujr7IM&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&rsv_sug3=89&rsv_sug1=98&rsv_sug7=100&prefixsug=%25E5%2585%2583%25E5%25AE%25B5%25E8%258A%2582&rsp=5&rsv_sug4=3396";
    }
    else if(id == 5){
        id = 4;
        //植树节
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E6%A4%8D%E6%A0%91%E8%8A%82%E6%A1%8C%E9%9D%A2%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E6%A4%8D%E7%89%A9%E8%8A%82&oq=%25E7%25AB%258B%25E6%2598%25A5&rsv_pq=c4c602d90003817b&rsv_t=cf67aITyWkUMNGxSzghv92qKdqOV14OHGWo8tSBbuBmuoRdHiSRFB0%2BYfGsVoIvy6eMZlJdk&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_sug3=2&rsv_sug1=3&rsv_sug7=100&rsv_btype=t&prefixsug=%25E6%25A4%258D%25E7%2589%25A9%25E8%258A%2582&rsp=0&rsv_sug4=11066";
    }
    else if(id == 6){
        id = 5;
        //春分
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/3%E6%9C%8821%E6%97%A5%E6%98%A5%E5%88%86%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E6%98%A5%E5%88%86&oq=%25E6%25A4%258D%25E7%2589%25A9%25E8%258A%2582&rsv_pq=da42d2d60003f177&rsv_t=6651R3sfFDhdCD4xzJ6rFs6S0cDDHFV7VTj%2FG84y%2BxI3BV0hvEnv4NaXJlNwyGLPQanS7V1G&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&rsv_sug3=4&rsv_sug1=7&rsv_sug7=100&rsv_sug2=0&inputT=2&rsv_sug4=3107";
    }
    else if(id == 7){
        id = 6;
        //谷雨
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E8%B0%B7%E9%9B%A8%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E8%B0%B7%E9%9B%A8&oq=%25E6%2598%25A5%25E5%2588%2586&rsv_pq=a37e0a4d00018365&rsv_t=669bqrFlHKWTbAO4zPY%2B3FzGlHNNaoiKBvNZIoDUeCxNfvlMfjZ%2BOaKzP8ULTbDw0L9MuFEi&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&inputT=6&rsv_sug3=6&rsv_sug1=9&rsv_sug7=100&rsv_sug2=0&rsv_sug4=2682";
    }
    else if(id == 8){
        id = 7;
        //立夏
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E7%AB%8B%E5%A4%8F%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E7%AB%8B%E5%A4%8F&oq=%25E8%25B0%25B7%25E9%259B%25A8&rsv_pq=aaad555d0003b7d4&rsv_t=3083fwev7KzUlRjVQyuAICilsITFpgaMOsH%2BXw6WJUI0aZGee12Mu14T8OcCKjwd%2BITL1XnY&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&inputT=3&rsv_sug3=8&rsv_sug1=13&rsv_sug7=100&rsv_sug2=0&rsv_sug4=2052";
    }
    else if(id == 9){
        id = 8;
        //小满
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E5%B0%8F%E6%BB%A1%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E5%B0%8F%E6%BB%A1&oq=%25E5%25B0%258F%25E6%25BB%25A1&rsv_pq=ad4a360b0003bd50&rsv_t=766dTEcQxWNWGPuebRtc7IuIss3ZamFUD%2FoK1sg7YpzZ4G30T08CGt0Mcsv4v3IQQ2X%2FROTb&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&rsv_sug=1";
    }
    else if(id == 10){
        id = 9;
        //芒种
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E8%8A%92%E7%A7%8D%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E8%8A%92%E7%A7%8D&oq=%25E5%25B0%258F%25E6%25BB%25A1&rsv_pq=ff6b26cf0003cb83&rsv_t=e47digjDxGiSGAGlKGbqVN9Jbqc5daqW63RClxzMXil2j6zEs2ShUMO9s1AvvL6fJYsC%2BtHv&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&rsv_sug3=12&rsv_sug1=21&rsv_sug7=100&rsv_sug2=0&inputT=2&rsv_sug4=2743";
    }
    else if(id ==11){
        id = 10;
        //夏至
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/6%E6%9C%8821%E6%97%A5%E5%A4%8F%E8%87%B3%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%EF%BC%88RGB%EF%BC%89.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E5%A4%8F%E8%87%B3&oq=%25E8%258A%2592%25E7%25A7%258D&rsv_pq=b44f8e5a00015a14&rsv_t=cb7cGCAfg3vdS7vR6Rqf4faNOtTV221GMStZvRFQSeP8mt7YUZhUhQS%2FKCXqVys1WHpTlQl4&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&inputT=1&rsv_sug3=14&rsv_sug1=24&rsv_sug7=100&rsv_sug2=0&rsv_sug4=1975";
    }
    else if(id == 12){
        id = 11;
        //小暑
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/7%E6%9C%88%E5%B0%8F%E6%9A%91%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E5%B0%8F%E6%9A%91&oq=%25E5%25A4%258F%25E8%2587%25B3&rsv_pq=d825ecb80000ae8f&rsv_t=a8c2oCqI1JArOwryJAxUmSiSjLV160Moq7n2YjEoMElep16RxUhmB5o%2BlkmqC5mzPWYCZVVw&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&inputT=2&rsv_sug3=16&rsv_sug1=28&rsv_sug7=100&rsv_sug2=0&rsv_sug4=1988";
    }
    else if(id == 13){
        id = 12;
        //愚人节
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E6%A1%8C%E9%9D%A2%E5%A3%81%E7%BA%B8_emgLjh.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E6%84%9A%E4%BA%BA%E8%8A%82&oq=%25E5%25B0%258F%25E6%259A%2591&rsv_pq=b6b00cf100039737&rsv_t=860bbAHgX6D%2B1YuXXwO8E3LHzvcV95CJGhTGnS73l2zolnX7vLNhIvMGkX1myIW6opIriXlW&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&inputT=3&rsv_sug3=18&rsv_sug1=32&rsv_sug7=100&rsv_sug2=0&rsv_sug4=1939";
    }
    else if(id == 14){
        id = 13;
        //清明节
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/4%E6%9C%885%E6%97%A5%E6%B8%85%E6%98%8E%E8%8A%82%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E6%B8%85%E6%98%8E%E8%8A%82&oq=%25E6%2584%259A%25E4%25BA%25BA%25E8%258A%2582&rsv_pq=9be853010003d4f3&rsv_t=2094qae2t4s2VDnSh8c7b7GsDzkxaAYtxCsiz2v4f3Fu%2BPA5LI6Lk96g9qby4XuBi2yMfHCV&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&inputT=2&rsv_sug3=20&rsv_sug1=35&rsv_sug7=100&rsv_sug2=0&rsv_sug4=3462";
    }
    else if(id == 15){
        id = 14;
        //母亲节
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E6%AF%8D%E4%BA%B2%E8%8A%82&oq=%25E6%25B8%2585%25E6%2598%258E%25E8%258A%2582&rsv_pq=fa926c260003d447&rsv_t=2b6foi5sz6fUbZs%2B3jyZlxwNbZ5qbE45vmztq9gm9DEWaSx6eUP1%2BHKNLvExL%2BGKHV2DvdmR&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&inputT=1&rsv_sug3=22&rsv_sug1=39&rsv_sug7=100&rsv_sug2=0&rsv_sug4=2434";
    }
    else if(id == 16){
        id = 15;
        //儿童节
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/6%E6%9C%88%E5%84%BF%E7%AB%A5%E8%8A%82%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%EF%BC%88%E6%9C%89%E6%97%A5%E6%9C%9F%EF%BC%89.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E5%84%BF%E7%AB%A5%E8%8A%82&oq=%25E5%2584%25BF%25E7%25AB%25A5%25E8%258A%2582&rsv_pq=d99249aa0000c894&rsv_t=3210L07oAMgjJMN7k96AytqLBwAYtPfOfiqU9fCGL1A8HOQ9H945SgWA%2FFyx%2Fx3fX%2FT6%2Bp01&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&rsv_sug=1";
    }
    else if(id == 17){
        id = 16;
        //端午节
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/6%E6%9C%88%E7%AB%AF%E5%8D%88%E8%8A%82%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E7%AB%AF%E5%8D%88%E8%8A%82&oq=%25E5%2584%25BF%25E7%25AB%25A5%25E8%258A%2582&rsv_pq=d3e80f93000173ae&rsv_t=2689STt%2BQvnD7a1a9BGOg9QUJHagyz%2FK3WDbVxqTk8VDVVyeRtBaqD8IMy0TR2WyC%2FEJNvH%2B&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&rsv_sug3=26&rsv_sug1=48&rsv_sug7=100&rsv_sug2=0&inputT=2&rsv_sug4=3106";
    }
    else if(id == 0){
        id = 17;
        //春节
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E6%A1%8C%E9%9D%A2%E5%A3%81%E7%BA%B8_FjvG9i.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E6%98%A5%E8%8A%82&oq=%25E7%25AB%25AF%25E5%258D%2588%25E8%258A%2582&rsv_pq=b1e08a520003bde4&rsv_t=490cDN0lK2%2BWqETV65Q6sRtbi6i7eKJ22C1UfMFJSJzqgzbVN5WsYj9%2Be7Htc6gS9h2MSznW&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&inputT=2&rsv_sug3=28&rsv_sug1=52&rsv_sug7=100&rsv_sug2=0&rsv_sug4=2173";
    }
    else if(id == 1){
        id = 0;
        //中秋节
        containerStyle.background = 'url("http://www.idreamcastle.com/Site/Default/Uploads/kindeditor/image/20180914/%E7%AC%AC%E4%BA%8C%E7%89%88%E4%B8%AD%E7%A7%8B%E5%A3%81%E7%BA%B8-02.jpg")';
        document.getElementById("mes").href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=4947799501858455151&tn=50000021_hao_pg&wd=%E4%B8%AD%E7%A7%8B%E8%8A%82&oq=%25E6%2598%25A5%25E8%258A%2582&rsv_pq=dc79243700041ab0&rsv_t=6be3WGqRuRSiwD0taknMsM8l2I6hmIIULZVdC%2F0MKMW8NxE6jqzXQsVLY4xH%2BEO5IzJQnsKe&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&inputT=4&rsv_sug3=30&rsv_sug1=56&rsv_sug7=100&rsv_sug2=0&prefixsug=%25E4%25B8%25AD%25E7%25A7%258B%25E8%258A%2582&rsp=1&rsv_sug4=4420&rsv_sug=1";
    }
    console.log(id);
}