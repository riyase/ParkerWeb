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
    <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
</head>
<body id="owner-body">
    <div id="owner-root-container">
        <div id="owner-container">
            <div id="owner-master">
                <button id="btn-new-space">Add Space +</button>
                <ul id="my-spaces"></ul>
            </div>
            <div id="owner-detail">
                <div id="owner-space-details">
                    <img id="space-detail-map-image" src="" alt="" >
                    </br>
                    <div id="space-detail-name-edit">
                        <h3 id="space-detail-name">Space name</h3>
                        <ion-icon class="ion-icon" id="btn-update-space" name="pencil-outline"></ion-icon>
                    </div>
                    <p id="space-detail-description">Space description</p>
                    <p id="space-detail-address">Space address</p>
                    <p >Space address</p>
                    <p >Space address</p>
                    <p >Space address</p>
                    <p >Space address</p>
                    <p >Space address</p>

                </div>
                <ul id="space-bookings">
                </ul>
            </div>
        </div>
        <div id="popup-add-space">
            <span class="icon-close-space">
                <ion-icon name="close"></ion-icon>
            </span>
            <div class="form-box">
                <h2 id="popup-add-space-title">Add Space</h2>
                <form id="form-add-space" action="#">
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input id="popup-space-name" type="text" required>
                        <label for="">Space name</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input id="popup-space-type" type="text" required>
                        <label for="">Space type</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input id="popup-space-rate" type="text" required>
                        <label for="">Hourly rate</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input id="popup-space-address" type="text" required>
                        <label for="">Address</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input id="popup-space-postcode" type="text" required>
                        <label for="">Post code</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input id="popup-space-latitude" type="text" required>
                        <label for="">Latitude</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input id="popup-space-longitude" type="text" required>
                        <label for="">Longitude</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input id="popup-space-description" type="text" required>
                        <label for="">Description</label>
                    </div>
                    
                    <button type="submit" class="popup-btn" id="popup-btn-add-space">Add Space</button>
                </form>
            </div>
        </div>
    </div>
    

    
    
</body>
</html>