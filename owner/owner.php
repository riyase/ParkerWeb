<?php
    session_start();
    $logged_in = isset($_SESSION["logged_in"]) && $_SESSION["logged_in"] === true;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
    
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script> -->
    <!-- Master detail layout -->
    <!-- https://www.youtube.com/watch?v=cZ6HB6pv23M&ab_channel=JamesQQuick -->
    <!-- FlexBox - Aligning items vertically or horizontally. -->
    <!-- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox -->
    <link rel="stylesheet" href="/spare_park/owner/owner.css">
    <script src="/spare_park/owner/owner.js"></script>
</head>
<body id="owner-body">
    <div id="owner-root-container">
        <div id="owner-container">
            <div id="owner-master">
                <button id="btn-new-space">Add Space +</button>
                <ul id="my-spaces"></ul>
            </div>
            <div id="owner-detail">
                <div>
                    
                </div>
                <div id="space-bookings">
                </div>
            </div>
        </div>
        <div class="popup-add-space">
            <span class="icon-close-space">
                <ion-icon name="close"></ion-icon>
            </span>
            <div class="form-box">
                <h2>Add Space</h2>
                <form action="#">
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input class="space-name" type="text" required>
                        <label for="">Space name</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input class="space-type" type="text" required>
                        <label for="">Space type</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input class="space-rate" type="text" required>
                        <label for="">Hourly rate</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input class="space-address" type="text" required>
                        <label for="">Address</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input class="space-postcode" type="text" required>
                        <label for="">Post code</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input class="space-latitude" type="text" required>
                        <label for="">Latitude</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input class="space-longitude" type="text" required>
                        <label for="">Longitude</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input class="space-description" type="text" required>
                        <label for="">Description</label>
                    </div>
                    
                    <button type="submit" class="btn-add-space">Add Space</button> 
                </form>
            </div>
        </div>
    </div>
    

    
    
</body>
</html>