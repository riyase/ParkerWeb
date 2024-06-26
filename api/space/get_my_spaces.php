

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

$sql = "SELECT * FROM space WHERE user_id = '$user_id'";

$cursor = mysqli_query($connection, $sql);
$count = mysqli_num_rows($cursor);

$spaces = array();
while ($spacePointer = mysqli_fetch_array($cursor, MYSQLI_ASSOC)) {
    $spaces[] = array(
        'id' => $spacePointer["id"], 
        'name' => $spacePointer["name"],
        'status' => $spacePointer["status"],
        'hourRate' => $spacePointer["hour_rate"],
        'type' => $spacePointer["type"],
        'address' => $spacePointer["address"],
        'latitude' => $spacePointer["latitude"],
        'longitude' => $spacePointer["longitude"],
        'postCode' => $spacePointer["post_code"],
        'description' => $spacePointer["description"]);
}
mysqli_close($connection);

$response = array("status" => true, "spaces" => $spaces);
header("Content-Type: application/json");
echo json_encode($response);
?>