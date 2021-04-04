<?php
$name = $_POST['name'];
$number = $_POST['number'];
$phone = $_POST['phone'];

echo "名字:", $name, "\n", "编号:", $number, "\n", "电话:", $phone;
$connect = new mysqli("47.102.198.114","join","yu020506","join");
$sqlstr ="insert into mytest values('$number', '$phone', '$name')";
$connect->query($sqlstr);
?>