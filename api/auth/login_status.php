<?php
session_start();
$logged_in = isset($_SESSION["logged_in"]) && $_SESSION["logged_in"] === true;
$response = array("status" => $logged_in);
header("Content-Type: application/json");
echo json_encode($response);
//exit();
?>