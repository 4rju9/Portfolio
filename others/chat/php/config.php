<?php
  $hostname = "fdb32.awardspace.net";
  $username = "3901241_messenger";
  $password = "Lord@3550";
  $dbname = "3901241_messenger";

  $conn = mysqli_connect($hostname, $username, $password, $dbname);
  if(!$conn){
    echo "Database connection error".mysqli_connect_error();
  }
?>
