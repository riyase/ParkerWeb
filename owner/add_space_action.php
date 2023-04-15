<?php

// declaring varibles
  
$server = "localhost:3306";
$username = "root";
$password = "";
$db = "spare_park";
    
// checking connection
$connection = mysqli_connect($server, $username, $password, $db) or die ("Not connected!");
     
session_start();
$user_id = $_SESSION["user_id"];
//query

$sql = "INSERT INTO space(name, status, type, hour_rate, address, post_code, latitude, longitude, user_id, description)
        VALUES('$_POST[name]', 'open', '$_POST[type]', '$_POST[rate]', '$_POST[address]', '$_POST[postcode]', '$_POST[latitude]', 
            '$_POST[longitude]', $user_id, '$_POST[description]')";

//echo $sql;

if (!mysqli_query($connection, $sql)) {
    die ('query error'.mysqli_error($connection));
}

mysqli_close($connection);

$response = array("status" => "success");
header("Content-Type: application/json");
echo json_encode($response);

?>
