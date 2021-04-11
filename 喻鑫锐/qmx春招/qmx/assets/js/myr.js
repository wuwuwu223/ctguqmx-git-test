//轮播图

//学院，专业
var arr_college = [
    '计算机与信息学院',
    '土木与建筑学院',
    '机械与动力学院',
    '材料与化工学院',
    '电气与新能源学院',
    '经济与管理学院',
    '医学院',
    '文学与传媒学院',
    '法学与公共管理学院',
    '理学院',
    '生物与制药学院',
    '艺术学院',
    '其他',
];
var arr_major = [
    [
        '计算机大类',
        '电子信息大类',
        '计算机科学与技术',
        '数字媒体技术',
        '物联网工程',
        '数字科学与大数据技术',
        '电子信息类',
        '信息管理与信息系统',
        '其他',
    ],
    ['土木工程', '地质工程', '建筑学', '城乡规划', '其他'],
    [
        '机械设计制造及其自动化',
        '材料成型及控制工程',
        '机械电子工程',
        '能源与动力工程',
        '核工程与核技术',
        '工业工程',
        '其他',
    ],
    ['金属材料工程', '新能源材料与器件', '化学工程与工艺', '其他'],
    ['电气工程及其自动化', '智能电网信息工程', '自动化', '其他'],
    [
        '金融学',
        '国际经济与贸易',
        '工商管理',
        '市场营销',
        '财务管理',
        '人力资源管理',
        '旅游管理',
        '物流管理',
        '其他',
    ],
    ['临床医学', '医学影像学', '中医学', '药学', '护理学', '其他'],
    ['汉语言文学', '汉语国际教育', '广播电视学', '播音与主持艺术', '其他'],
    ['法学', '公共事业管理', '行政管理', '其他'],
    ['数学与应用数学', '信息与计算科学', '物理学', '光电信息科学与工程', '其他'],
    ['化学', '化学生物学', '生物科学', '生态学', '其他'],
    ['音乐表演', '音乐学', '舞蹈学', '美术学', '视觉传达设计', '环境设计', '其他'],
    ['其他'],
];
window.onload = init();
function init() {
    var college = document.form1.college;
    var major = document.form1.major;

    college.length = arr_college.length;
    //循环将数组中的数据写入<options>标记中
    for (var i = 0; i < arr_college.length; i++) {
        college.options[i].text = arr_college[i];
        college.options[i].value = arr_college[i];
    }
    //修改学院列表默认选项
    var index = 0;
    college.selectedIndex = index;
    //循环将数组中的数据写入<options>标记中
    major.length = arr_major[index].length;
    for (var j = 0; j < arr_major[index].length; j++) {
        major.options[j].text = arr_major[index][j];
        major.options[j].value = arr_major[index][j];
    }
}
function changeSelect(index) {
    //找到当前元素
    var major = document.form1.major;
    college.selectedIndex = index;
    //指定学院中<option>标记的个数
    major.length = arr_major[index].length;
    //循环将数组中的数据写入<options>标记中
    for (var j = 0; j < arr_major[index].length; j++) {
        major.options[j].text = arr_major[index][j];
        major.options[j].value = arr_major[index][j];
    }
}
//表单验证
function summitform(params) {
    console.log('$("form").serialize(),: ', $('form').serialize());
    if (nameCheck() && telCheck() && qqCheck() && stu_idCheck())
    {
        $(".loading")[0].style.display="block"
        $.ajax({
            url: 'http://47.113.203.60:8081/form',
            type: 'POST',
            data: $('form').serialize(),
            success: function (result) {
                /**
                 * 执行成功时,调用的回调函数
                 * 其中返回值result的类型由上面的dataType决定,像这就是一个json类型
                 */
                console.log('成功');
                $(".loading")[0].style.display = "none"
                $(".sent-message")[0].style.display = "block"
                $(".error-message")[0].style.display = "none"
            },
            error: function (params) {
                $(".loading")[0].style.display = "none"
                $(".error-message")[0].style.display = "block"
                $(".sent-message")[0].style.display = "none"
            }
        });
        }
    
}
//验证姓名字段
function nameCheck() {
    let reg = /^[\u4e00-\u9fa5]{2,6}$/;
    let name = $('#real_name').val();
    if (!reg.test(name) || name == '') {
        $('.real_name').html(
            "<div class='text-danger alert alert-danger' style='margin:0'>输入错误,请输入2-6个中文</div>"
        );
        return false;
    } else {
        $('.real_name').html("<div class='text-danger'></div>");
        return true;
    }
}
function telCheck(str) {
    let reg = /^\d{11}$/;
    let tel = $('#phone').val();
    if (!reg.test(tel) || tel == '') {
        $('.tel').html( "<div class='text-danger alert alert-danger' style='margin:0'>输入错误,请重新输入</div>");
        return false;
    } else {
        $('.tel').html("<div class='text-danger'></div>");
        return true;
    }
}
function qqCheck(str) {
    let reg = /^[1-9][0-9]{4,9}$/;
    let qq = $('#qq').val();
    if (!reg.test(qq) || qq == '') {
        $('.qq').html( "<div class='text-danger alert alert-danger' style='margin:0'>输入错误,请重新输入</div>");
        return false;
    } else {
        $('.qq').html("<div class='text-danger'></div>");
        return true;
    }
}
function stu_idCheck(str) {
    let reg = /^(2019|2020)(\d{6})+$/;
    let stu_id = $('#stu_id').val();
    if (!reg.test(stu_id) || stu_id == '') {
        $('.stu_id').html( "<div class='text-danger alert alert-danger' style='margin:0'>输入错误,学号是10位哦!</div>");
        return false;
    } else {
        $('.stu_id').html("<div class='text-danger'></div>");
        return true;
    }
}