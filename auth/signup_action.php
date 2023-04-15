<?php

// declaring varibles
  
$server = "localhost:3306";
$username = "root";
$password = "";
$db = "spare_park";
    
$connection = mysqli_connect($server, $username, $password, $db) or die ("Not connected!");

//echo "Connected!";
     
//query
        
//echo "'$_POST[name]'";
//$country_name = "'$_POST[country]'";
//$country_id = "SELECT country_id FROM country WHERE name = '$country_name'";


$sql = "INSERT INTO user(name, email, phone, password, country_id, is_admin)
        VALUES('$_POST[name]', '$_POST[email]', '$_POST[phone]', '$_POST[password]', 10, 0)";

//echo $sql;

if (!mysqli_query($connection, $sql)) {
    echo("{status: 'sss'}");
    die ('query error'.mysqli_error($connection));
}
mysqli_close($connection);

$response = array("logged_in" => true, "user_name" => $username);
header("Content-Type: application/json");
echo json_encode($response);

?>
