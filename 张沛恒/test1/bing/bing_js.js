var PhotoNum = 1;
var flag = true;
var set_flag = true;
var mypage = document.getElementsByClassName(".mypage");
function ShowMenu()
{
    var mmenu = document.getElementById("mmenu");
    if (flag)
    {
        mmenu.style.display = "block";
        mmenu.style.backgroundColor = "grey";
        flag = false;
    }
    else
    {
        mmenu.style.display = "none";
        flag = true;
    }
}
function ShowSettings()
{
    var setting = document.getElementById("setting");
    if(set_flag)
    {
        setting.style.display = "block";
        setting.style.backgroundColor = "grey";
        set_flag = false;
    }
    else
    {
        setting.style.display = "none";
        set_flag = true;
    }
}
var page_flag = true;
function ShowMyPage()
{
    var page = document.getElementById("page");
    if(page_flag)
    {
        page.style.display = "block";
        page.style.backgroundColor = "grey";
        page_flag = false;
    }
    else
    {
        page.style.display = "none";
        page_flag = true;
    }
}
function ChangePhoto()
{
    var bg = document.getElementById("backgroud");
    var btn = document.getElementById("aboutbutton");
    if(PhotoNum == 1)
    {
        bg.style.backgroundImage = "url(bg2.jpg)";
        PhotoNum++;
        return;
    }
    if(PhotoNum == 2)
    {
        bg.style.backgroundImage = "url(bg3.jpg)";
        PhotoNum++;
        return;
    }
    if(PhotoNum == 3)
    {
        bg.style.backgroundImage = "url(bg4.jpg)";
        PhotoNum++;
        return;
    }
    if(PhotoNum == 4)
    {
        bg.style.backgroundImage = "url(bg1.jpg)";
        PhotoNum = 1;
        return;
    }
}
function ChangeInformation()
{
    var ButtonInformation = document.getElementById("aboutbutton");
    if(PhotoNum == 1)
        ButtonInformation.href = "https://baike.baidu.com/item/Undertale/19391003";
    if(PhotoNum == 2)
        ButtonInformation.href = "https://baike.baidu.com/item/%E8%BF%9C%E6%98%9F%E7%89%A9%E8%AF%AD";
    if(PhotoNum == 3)
        ButtonInformation.href = "https://baike.baidu.com/item/%E5%9C%B0%E7%8B%B1%E6%8A%8A%E5%A6%B9%E7%8E%8B";
    if(PhotoNum == 4)
        ButtonInformation.href = "https://baike.baidu.com/item/%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F/4615671";
}