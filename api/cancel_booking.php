<?php

// declaring varibles
  
$server = "localhost:3306";
$username = "root";
$password = "";
$db = "spare_park";
    
// checking connection
$connection = mysqli_connect($server, $username, $password, $db) or die ("Not connected!");

$sql = "DELETE FROM booking WHERE id = '$_POST[id]'";

if (!mysqli_query($connection, $sql)) {
    die ('query error'.mysqli_error($connection));
}

mysqli_close($connection);

$response = array("status" => "success");
header("Content-Type: application/json");
echo json_encode($response);

?>
