<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/spare_park/common/css/common.css">
    <!-- <link rel="stylesheet" href="/spare_park/home.css"> -->
    <link rel="stylesheet" href="space_booking.css">
    <link rel="stylesheet" href="/spare_park/common/css/star_rating_disabled.css">
    <!-- <link rel="stylesheet" href="/spare_park/owner/owner.css"> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="space_booking.js"></script>
    

</head>
<body id="space-booking-body">
    <header id="home-header">
        <h2 class="logo">Spare Park</h2>
        <nav class="navbar">
            <a class="btn-driver active" href="#">Driver</a>
            <a class="btn-owner" href="#">Owner</a>
            <a class="btn-bookings" href="#">Bookings</a>
            <button class="btn-login">Login</button>
            <a href="#" class="btn-logout">Logout</a>
        </nav>
    </header>
    <!-- <div id="space-booking-container"> -->
        <div id="space-booking-layout">
            <div id="space-map-view"></div>
            <div id="rate-type-box">
                <h4 id="space-rate">Space rate</h4>
                <div id="type-box">
                    <img id="space-type-icon" src=""></img>
                    <h4 id="space-type-name"></h4>
                </div>
            </div>
            <div id="space-detail">
                <div class="rate">
                        <input type="radio" id="star5" name="rate" value="5" disabled/><label for="star5" title="text" disabled>5 stars</label>
                        <input type="radio" id="star4" name="rate" value="4" disabled/><label for="star4" title="text" disabled>4 stars</label>
                        <input type="radio" id="star3" name="rate" value="3" disabled/><label for="star3" title="text" disabled>3 stars</label>
                        <input type="radio" id="star2" name="rate" value="2" disabled/><label for="star2" title="text" disabled>2 stars</label>
                        <input type="radio" id="star1" name="rate" value="1" disabled/><label for="star1" title="text" disabled>1 star</label>
                </div>
                <h4 id="space-name">Space name</h4>
                <h4 id="space-address">Space address</h4>
                <h4 id="space-postcode">Space postcode</h4>
                <h4 id="space-description">Space description</h4>
                <div class="input-box">
                    <label>From</label>
                    <input id="input-driver-time-from" type="datetime-local">
                </div>
                <div class="input-box">
                    <label>To</label>
                    <input id="input-driver-time-to" type="datetime-local">
                </div>
                <button id="btn-book-space">Book Space</button>
            </div>
        </div>
    <!-- </div> -->
    <!-- Google maps -->
    <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBeEeKz4H-KQTFABe1UTs9h5KUlpqsZ10Q&callback=initMap"></script>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>
</html>