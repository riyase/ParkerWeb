<?php

$server = "localhost:3306";
$username = "root";
$password = "";
$db = "spare_park";
    
$connection = mysqli_connect($server, $username, $password, $db) or die ("Not connected!");

$sql = "INSERT INTO user(name, email, phone, password, country_id, is_admin)
        VALUES('$_POST[name]', '$_POST[email]', '$_POST[phone]', '$_POST[password]', 10, 0)";

$status = true;
$userId = -1;
$message = "success";
if (!mysqli_query($connection, $sql)) {
    $status = false;
    $message = "Error signin up!";
} else {
    $userId = mysqli_insert_id($connection);
}
mysqli_close($connection);

$response = array("status" => $status, 
    "message" => $message,
    "userId" => $userId,
    "userName" => $_POST['name']);
header("Content-Type: application/json");
echo json_encode($response);

?>
