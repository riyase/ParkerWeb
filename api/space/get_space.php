<?php

//include('/spare_park/common/db/db_conn.php');
$server = "localhost:3306";
$username = "root";
$password = "";
$db = "spare_park";
    
$connection = mysqli_connect($server, $username, $password, $db) or die ("Not connected!");

//$spaceId = $_GET['id'];
$spaceId = 16;
$sql = "SELECT * FROM space WHERE id = '$spaceId'";

$cursor = mysqli_query($connection, $sql);
$count = mysqli_num_rows($cursor);

$space = array();
if ($count == 1) {
    $row = mysqli_fetch_array($cursor, MYSQLI_ASSOC);
    $space = array(
        'id' => $row["id"], 
        'name' => $row["name"],
        'status' => $row["status"],
        'hour_rate' => $row["hour_rate"],
        'type' => $row["type"],
        'address' => $row["address"],
        'latitude' => $row["latitude"],
        'longitude' => $row["longitude"],
        'post_code' => $row["post_code"],
        'description' => $row["description"],
        'rating' => $row["rating"]);
}
mysqli_close($connection);
//GET SPACE and return it to show space details
header("Content-Type: application/json");
echo json_encode($space);
?>