imageList = $(".imageList");
itemText = $(".itemText");

imageSrc= [
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg",
    "./img/5.jpg",
    "./img/6.jpg",
];
/*imageSrc= [
    "http://i2.hdslb.com/bfs/archive/28abc39401def448ef446e9b35a94cc359fa78d2.jpg", // 1
    "http://i0.hdslb.com/bfs/archive/59f9b5fd5a130d5b16106dcf8ab34b156c18b48e.jpg", // 2
    "http://i0.hdslb.com/bfs/archive/75ea333059e40097db48838afbf239f44ab92932.jpg",// 3
    "http://i1.hdslb.com/bfs/archive/9abb1b3c804d0104653bcfdbe8d888aa6b3709a8.jpg", // 4
    "http://i0.hdslb.com/bfs/archive/c2d31e366cc0150357a100bf32171448fc1e9794.jpg", //5
    "http://i1.hdslb.com/bfs/archive/91d5c92b02d42a758765003cb957b3f58707b388.jpg"// 6
]*/
innerTextList = [
  "CSS骰子",
  "流光标签",
  "打字机",
  "bilibili头图",
  "input输入动画",
  "macOS Dock效果",
];
console.log(imageList.length);
for(var i = 0;i < imageList.length;i++){
    imageList[i].src = imageSrc[i];
    itemText[i].innerText = innerTextList[i];
}