<?php

// declaring varibles
  
$server = "localhost:3306";
$username = "root";
$password = "";
$db = "spare_park";
    
// checking connection
$connection = mysqli_connect($server, $username, $password, $db) or die ("Not connected!");

//$sql = "DELETE FROM booking WHERE id = '$_POST[id]'";
$sql = "UPDATE booking SET status = '$_POST[status]' WHERE id = '$_POST[id]'";

$status = true;
$message = "Success";
if (!mysqli_query($connection, $sql)) {
    $status = false;
    $message = "Error cancelling booking!";
}

mysqli_close($connection);

$response = array("status" => $status, "message" => $message);
header("Content-Type: application/json");
echo json_encode($response);

?>
