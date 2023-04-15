<?php
// declaring varibles
  
$db_server = "localhost:3306";
$db_username = "root";
$db_password = "";
$db_name = "spare_park";
    
// checking connection
$connection = mysqli_connect($db_server, $db_username, $db_password, $db_name) or die ("Not connected!");

?>