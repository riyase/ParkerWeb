<?php

// declaring varibles
  
$server = "localhost:3306";
$username = "root";
$password = "";
$db = "spare_park";
    
// checking connection
$connection = mysqli_connect($server, $username, $password, $db) or die ("Not connected!");

$spaceId = 16;


$sql = "UPDATE booking SET rating = '$_POST[rating]', review = '$_POST[review]' WHERE id = '$_POST[id]'";

$status = true;
$message = "Success";
if (!mysqli_query($connection, $sql)) {
    $status = false;
    $message = "Error setting review!";
} else {
    $getRatingSql = "SELECT AVG(Cast(rating as Float)) AS avgRating FROM booking WHERE space_id = '$spaceId' AND rating > 0";
    $cursorGetRating = mysqli_query($connection, $getRatingSql);
    $ratingCount = mysqli_num_rows($cursorGetRating);
    if ($ratingCount == 1) {
        $row = mysqli_fetch_array($cursorGetRating, MYSQLI_ASSOC);
        $avgRating = $row["avgRating"];

        $setRatingSql = "UPDATE space SET rating = '$avgRating' WHERE id = '$spaceId'";
        mysqli_query($connection, $setRatingSql);
    }
}

mysqli_close($connection);

$response = array("status" => $status, "message" => $message);
header("Content-Type: application/json");
echo json_encode($response);

?>
