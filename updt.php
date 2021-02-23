<?php

$file = fopen("https://covid.ourworldindata.org/data/owid-covid-data.csv", "r");


$conn = mysqli_connect("localhost", "sthstats_u191", "252462safak", "sthstats_covidDB");
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$country = "";
$date = "";
$cases = "";
$deaths = "";

while(! feof($file)){
    $row = fgetcsv($file);
    if ($date !== $row[3]){
        $sql = "UPDATE CDbyCountry SET cases='$cases', deaths='$deaths', reg_date='$date' WHERE country='$country'";
        $conn->query($sql);
    }
    $country = $row[2];
    $date = $row[3];
    $cases = $row[4];
    $deaths = $row[7];
}

print_r(fgetcsv($file)) . "<br>"."<br>"."<br>";
print_r(fgetcsv($file)) . "<br>";
fclose($file);

?>	