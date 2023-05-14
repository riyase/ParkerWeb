<?php

// declaring varibles
  
$server = "localhost:3306";
$username = "root";
$password = "";
$db = "spare_park";
    
// checking connection
$connection = mysqli_connect($server, $username, $password, $db) or die ("Not connected!");

// $_POST['id'] = 10;
// $_POST['name'] = "Truck 2";
// $_POST['type'] = "truck";
// $_POST['hour_rate'] = 10.1;
//$_POST['address'] = "address 2";
// $_POST['post_code'] = "12345";
// $_POST['latitude'] = 10.1;
// $_POST['longitude'] = 10.2;
// $_POST['description'] = "abcabc";


$sql = "";
if (isset($_POST['id'])) {
    $sql = "UPDATE space
        SET name = '$_POST[name]', type = '$_POST[type]', hour_rate = '$_POST[hour_rate]', address = '$_POST[address]',
        post_code = '$_POST[postcode]', latitude = '$_POST[latitude]', longitude = '$_POST[longitude]', description = '$_POST[description]'
        WHERE id = '$_POST[id]'";
} else {
    session_start();
    $user_id = $_SESSION["user_id"];
    if (!isset($_SESSION["user_id"])) {
        $user_id = $_POST["userId"];
    }
    $sql = "INSERT INTO space(name, status, type, hour_rate, address, post_code, latitude, longitude, user_id, description)
        VALUES('$_POST[name]', 'open', '$_POST[type]', '$_POST[hour_rate]', '$_POST[address]', '$_POST[postcode]', '$_POST[latitude]', 
            '$_POST[longitude]', $user_id, '$_POST[description]')";
}


$status = true;
$message = "Success";
if (!mysqli_query($connection, $sql)) {
    $status = false;
    $message = "Error adding space!";
}

$response = array("status" => true, "message" => $sql);
header("Content-Type: application/json");
echo json_encode($response);
return;

mysqli_close($connection);

$response = array("status" => $status, "message" => $message);
header("Content-Type: application/json");
echo json_encode($response);

?>
