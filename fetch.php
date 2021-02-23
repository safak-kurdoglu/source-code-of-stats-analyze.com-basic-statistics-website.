<?php
$country = $_REQUEST["cn"];


$conn = mysqli_connect("localhost", "sthstats_u191", "252462safak", "sthstats_covidDB");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT cases, deaths, reg_date FROM CDbyCountry WHERE country='$country'";
$res = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($res);

	$arr = array($row["cases"], $row["deaths"], $row["reg_date"]);
	echo json_encode($arr);


?>