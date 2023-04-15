<?php

//include('/spare_park/common/db/db_conn.php');
$server = "localhost:3306";
$username = "root";
$password = "";
$db = "spare_park";
    
$connection = mysqli_connect($server, $username, $password, $db) or die ("Not connected!");

$sql = "SELECT FROM space WHERE id = '$_POST[id]'";

$cursor = mysqli_query($connection, $sql);
$count = mysqli_num_rows($cursor);

$space = array();
if ($count == 1) {
    $row = mysqli_fetch_array($cursor, MYSQLI_ASSOC);
    $space = array(
        'id' => $spacePointer["id"], 
        'name' => $spacePointer["name"],
        'status' => $spacePointer["status"],
        'hour_rate' => $spacePointer["hour_rate"],
        'type' => $spacePointer["type"],
        'latitude' => $spacePointer["latitude"],
        'longitude' => $spacePointer["longitude"],
        'post_code' => $spacePointer["post_code"],
        'description' => $spacePointer["description"]);
}
mysqli_close($connection);
//GET SPACE and return it to show space details
header("Content-Type: application/json");
echo json_encode($space);
?>