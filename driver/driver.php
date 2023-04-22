<?php
    session_start();
    $logged_in = isset($_SESSION["logged_in"]) && $_SESSION["logged_in"] === true;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="/spare_park/driver/driver.css">
    <script src="/spare_park/driver/driver.js"></script>
    <!-- DatePicker library start -->
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="//code.jquery.com/jquery-1.12.4.js"></script>
    <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <!-- DatePicker library end -->
    <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
    <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBeEeKz4H-KQTFABe1UTs9h5KUlpqsZ10Q&sensor=false&callback=initMap"></script>
</head>
<body id="driver-body">
    <div id="driver-root-container">
        <div id="driver-container">
            <div id="driver-master">
                <div class="input-box">
                    <input id="input-driver-location" type="text" placeholder="Location" required>
                    <ion-icon class="search-form-button" name="location-outline"></ion-icon>
                </div>
                <div class="input-box">
                    <input id="input-driver-time-from" type="datetime-local" value="<?php echo date('Y-m-d\TH:i'); ?>">
                    <!-- <input id="input-driver-time-from" type="datetime-local" placeholder="From" required> -->
                    <!-- <ion-icon id="icon-time-from" class="search-form-button" name="time-outline"></ion-icon> -->
                </div>
                <div class="input-box">
                    <input id="input-driver-time-to" type="datetime-local" value="<?php echo date('Y-m-d\TH:i'); ?>">
                    <!-- <input id="input-driver-time-to" type="datetime-local" placeholder="To" required> -->
                    <!-- <ion-icon id="icon-time-to" class="search-form-button" name="time-outline"></ion-icon> -->
                </div>
                <button id="btn-driver-search">Search</button>
                
                <ul id="list-search-result"></ul>
            </div>
            <div id="driver-detail">
            </div>
        </div>
    </div>
    

    
    
</body>
</html>