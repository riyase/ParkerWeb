

<?php

//include('/spare_park/common/db/db_conn.php');
$server = "localhost:3306";
$username = "root";
$password = "";
$db = "spare_park";
    
$connection = mysqli_connect($server, $username, $password, $db) or die ("Not connected!");

session_start();
$user_id = $_SESSION["user_id"];
if (!isset($_SESSION["user_id"])) {
    $user_id = $_GET["userId"];
}
//$user_id = 13;

$sql = "SELECT 
booking.id, booking.driver_id, booking.space_id, booking.time_from, booking.time_to,
booking.status AS status, booking.rating, booking.review, space.id AS space_id, space.name, space.status AS space_status, space.hour_rate, 
space.type, space.address, space.latitude, space.longitude, space.post_code, space.description
 FROM booking INNER JOIN space ON booking.space_id = space.id WHERE booking.driver_id = '$user_id'";

$cursor = mysqli_query($connection, $sql);
$count = mysqli_num_rows($cursor);

$bookings = array();
while ($row = mysqli_fetch_array($cursor, MYSQLI_ASSOC)) {
    $bookings[] = array(
        'id' => $row["id"], 
        'spaceId' => $row["space_id"], 
        'spaceName' => $row["name"],
        'status' => $row["status"],
        'hourRate' => $row["hour_rate"],
        'timeFrom' => $row["time_from"],
        'timeTo' => $row["time_to"],
        'type' => $row["type"],
        'latitude' => $row["latitude"],
        'longitude' => $row["longitude"],
        'postCode' => $row["post_code"],
        'description' => $row["description"]);
}
mysqli_close($connection);
$response = array("status" => true, "bookings" => $bookings);
header("Content-Type: application/json");
echo json_encode($response);
?>