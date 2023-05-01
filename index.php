<?php

//session_start();

//if user is not logged in redirect him to the login page
/*if (!isset($_SESSION["logged_in"]) || $_SESSION["logged_in"] == false) {
    header("location: /spare_park/api/auth/signout.php");
    exit;
}*/
header("location: /spare_park/home.php");
//echo phpinfo();
?>

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=chrome">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spare Park</title>
</head>
<body>
    <h1>Hello Spare park user!
    </h1>
</body>
</html> -->