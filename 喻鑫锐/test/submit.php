<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="swiper/swiper-master/package/swiper-bundle.min.css">
    <link rel="stylesheet" href="./Bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/animate.min.css">
    <link rel="stylesheet" href="./css/icofont.min.css">
    <link rel="stylesheet" href="./css/remixicon/remixicon.css">
    <link rel="stylesheet" href="./css/test.css">
    <link rel="stylesheet" href="./css/php.css">
    <link rel="stylesheet" href="./css/animate.min.css">
    <link rel="stylesheet" href="./css/style.css">
    <style>
    </style>
    <title>报名成功!</title>
</head>
<body>
    <div class="main" id="particles-js">
        <div class="container">
            <div class="main-title">
                <h1 class="animated bounceInDown">报名成功</h1>
                <h3 class="animated bounceInLeft">
                    请于xx年xx月xx日参加启明星宣讲会！
                </h3>
            </div>
        </div>
    </div>
    <div id="footer">
        <div class="container">
            <div class="footer-title">
                <h3>三峡大学启明星工作室</h3>
                <h4>To Make a Difference</h4>
            </div>
        </div>
    </div>
    <canvas width="100%"></canvas>
</body>
<script type="text/javascript" src="./js/particles.min.js"></script>
<script type="text/javascript" src="./js/app.js"></script>
</html>
<?php
$name = $_POST['name'];
$gender = $_POST['sex_choice'];
$class = $_POST['class_choice'];
$year = $_POST['year_choice'];
$phone = $_POST['phone'];
$number = $_POST['qnumber'];
$job = $_POST['college'];
$innerjob = $_POST['major'];
$connect = new mysqli("47.102.198.114","join","yu020506","join");
$sqlstr ="insert into myqmx values('$name', '$gender', '$class', '$year', '$phone', '$number', '$job', '$innerjob')";
$connect->query($sqlstr);
?>