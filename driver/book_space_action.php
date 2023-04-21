<?php

//include('/spare_park/common/db/db_conn.php');

$server = "localhost:3306";
$username = "root";
$password = "";
$db = "spare_park";
    
$connection = mysqli_connect($server, $username, $password, $db) or die ("Not connected!");

//$sql = "SELECT * FROM space";
$spaceId = $_POST['spaceId'];
$timeFrom = $_POST['timeFrom'];
$timeTo = $_POST['timeTo'];




//$spaceId = 16;
//$formatedDate = date("Y-m-d H:i:s", strtotime("2023-04-20T02:41"));
//$newTimeFrom = "2023-04-20 11:00:00";
//$newTimeTo = "2023-04-20 12:19:00";
$newTimeFrom = date("Y-m-d H:i:s", strtotime($timeFrom));
$newTimeTo = date("Y-m-d H:i:s", strtotime($timeTo));

/*

CHECKING WHETHER NEW BOOKING OVERLAPS DB BOOKING

case 1      userTime overlapping dbStartTime.
dbTime      ........|.........|........
userTime    ....^........^.............
query       db_time_start < '$userTimeEnd' >  AND '$userTimeEnd' <= db_time_end'

case 2      userTime overlapping dbEndTime.
dbTime      ........|.........|........
userTime    .............^........^....
query       db_time_start <= '$userTimeStart' AND '$userTimeStart' < db_time_end'
        
case 3      dbTime and userTime are same.
dbTime      ........|.........|........
userTime    ........^.........^........
query       already covered in case 1 & 2.

case 4      dbTime inside of userTime.
dbTime      ........|.........|........
userTime    ....^.................^....
query       '$userTimeStart' <= db_time_start AND db_time_end <= '$userTimeEnd'

case 5      userTime inside of dbTime.
dbTime      ........|.........|........
userTime    ...........^...^...........
query       already covered in case 1 & 2.

*/

$sqlTimeCheck = "SELECT * FROM `booking` 
    WHERE space_id = '$spaceId' 
    AND (
        (time_from < '$newTimeTo' AND '$newTimeTo' <= time_to)
        OR (time_from <= '$newTimeFrom' AND '$newTimeFrom' < time_to) 
        OR ('$newTimeFrom' <= time_from AND time_to <= '$newTimeTo')
    )";
$sqlTimeCheckResult = mysqli_query($connection, $sqlTimeCheck);
$sqlTimeCheckResultCount = mysqli_num_rows($sqlTimeCheckResult);

if ($sqlTimeCheckResultCount > 0) {
    $response = array("status" => ("not_available from " . $newTimeFrom . " - " . $newTimeTo));
    header("Content-Type: application/json");
    echo json_encode($response);
    return;
}

session_start();

$user_id = $_SESSION["user_id"];
//$user_id = 13;

$sql = "INSERT INTO booking(driver_id, space_id, time_from, time_to, status)
        VALUES('$user_id', '$spaceId', '$newTimeFrom', '$newTimeTo', 'requested')";

$cursor = mysqli_query($connection, $sql);
//$count = mysqli_num_rows($cursor);

mysqli_close($connection);
$response = array("status" => "success");
header("Content-Type: application/json");
echo json_encode($response);
?>