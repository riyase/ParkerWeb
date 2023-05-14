

<?php

//include('/spare_park/common/db/db_conn.php');
$server = "localhost:3306";
$username = "root";
$password = "";
$db = "spare_park";
    
$connection = mysqli_connect($server, $username, $password, $db) or die ("Not connected!");

$location = $_GET['location'];
$timeFrom = $_GET['timeFrom'];
$timeTo = $_GET['timeTo'];
//$timeFrom = '2023-04-22T19:05';
//$timeTo = '2023-04-22T19:05';

$newTimeFrom = date("Y-m-d H:i:s", strtotime($timeFrom));
$newTimeTo = date("Y-m-d H:i:s", strtotime($timeTo));
//$newTimeFrom = "2023-05-20 11:00:00";
//$newTimeTo = "2023-05-20 12:19:00";

$sqlOverlapSpacesQuery = "SELECT DISTINCT (space_id) FROM `booking` 
    WHERE (
        (time_from < '$newTimeTo' AND '$newTimeTo' <= time_to)
        OR (time_from <= '$newTimeFrom' AND '$newTimeFrom' < time_to) 
        OR ('$newTimeFrom' <= time_from AND time_to <= '$newTimeTo')
    )";
$sqlOverlapSpaces = mysqli_query($connection, $sqlOverlapSpacesQuery);
$sqlOverlapSpacesCount = mysqli_num_rows($sqlOverlapSpaces);

$excludeSpaces = array();
while ($rows = mysqli_fetch_array($sqlOverlapSpaces, MYSQLI_ASSOC)) {
    array_push($excludeSpaces, $rows['space_id']);
}
$excludeSpaceIds = join(',', $excludeSpaces);
//Exclude all spaces that inculdes the above 

$sql = "SELECT * FROM `space` WHERE id NOT IN ('$excludeSpaceIds') 
AND (`name` LIKE '%{$location}%' OR `post_code` LIKE '%{$location}%' OR `address` LIKE '%{$location}%')";

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
        'latitude' => $spacePointer["latitude"],
        'longitude' => $spacePointer["longitude"],
        'address' => $spacePointer["address"],
        'postCode' => $spacePointer["post_code"],
        'description' => $spacePointer["description"],
        'rating' => $spacePointer["rating"],
        'review' => $spacePointer["review"]);
}
mysqli_close($connection);
$response = array("status" => true, "len" => $count, "spaces" => $spaces);
header("Content-Type: application/json");
echo json_encode($response);
?>