<?php

//include('/spare_park/common/db/db_conn.php');
$server = "localhost:3306";
$username = "root";
$password = "";
$db = "spare_park";
    
$connection = mysqli_connect($server, $username, $password, $db) or die ("Not connected!");
    
$email = $_POST['email'];
$password = $_POST['password'];

//query
$sql = "SELECT * FROM user WHERE email = '$email' and password = '$password'";

$result = mysqli_query($connection, $sql);
$count = mysqli_num_rows($result);
$logged_in = false;
$username = '';
if ($count == 1) {
    $rows = mysqli_fetch_array($result, MYSQLI_ASSOC);
    $username = $rows['name'];
    session_start();
    $logged_in = true;
    $_SESSION["logged_in"] = $logged_in;
    $_SESSION["user_id"] = $rows['id'];
    $_SESSION["username"] = $username;
    //header("location: /spare_park/home/home.php");
}

mysqli_close($connection);
$response = array("logged_in" => $logged_in, "user_name" => $username);
header("Content-Type: application/json");
echo json_encode($response);
?>
