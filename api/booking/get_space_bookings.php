

<?php

//include('/spare_park/common/db/db_conn.php');
$server = "localhost:3306";
$username = "root";
$password = "";
$db = "spare_park";
    
$connection = mysqli_connect($server, $username, $password, $db) or die ("Not connected!");

session_start();
$spaceId = $_GET["id"];
//$spaceId = 13;

$sql = "SELECT booking.id, user.name, booking.time_from, 
    booking.time_to, booking.status, booking.rating, booking.review 
    FROM booking INNER JOIN user ON booking.driver_id = user.id WHERE space_id = '$spaceId'";

$cursor = mysqli_query($connection, $sql);
$count = mysqli_num_rows($cursor);

$space_bookings = array();
while ($row = mysqli_fetch_array($cursor, MYSQLI_ASSOC)) {
    $space_bookings[] = array(
        'id' => $row["id"], 
        'username' => $row["name"],
        'time_from' => $row["time_from"],
        'time_to' => $row["time_to"],
        'status' => $row["status"],
        'rating' => $row["rating"],
        'review' => $row["review"]);
}
mysqli_close($connection);

header("Content-Type: application/json");
echo json_encode($space_bookings);
?>