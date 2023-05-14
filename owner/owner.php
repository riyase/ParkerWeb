<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/spare_park/common/css/common.css">
    <link rel="stylesheet" href="/spare_park/home.css">
    <link rel="stylesheet" href="/spare_park/owner/owner.css">
    
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    
    <script src="owner.js"></script>
    <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
    

</head>
<body id="home-body">
    <header id="home-header">
        <h2 class="logo">Spare Park</h2>
        <nav class="navbar">
            <a class="btn-driver active" href="#">Driver</a>
            <a class="btn-owner" href="#">Owner</a>
            <a class="btn-bookings" href="#">Bookings</a>
            <a href="#" class="btn-logout">Logout</a>
        </nav>
    </header>
    <!-- <div id="google-map" style="width:300px; height:300px;"> -->

    </div>
    
    <div id="owner-root-container">
        <div id="owner-container">
            <div id="owner-master">
                <button id="btn-new-space">Add Space +</button>
                <!-- <div class="my-spaces-container"> -->
                    <ul id="my-spaces"></ul>
                <!-- </div>  -->
            </div>
            <div id="owner-detail">
                <div id="owner-space-details">
                    <div id="space-map-view"></div>
                    <div id="rate-type-box">
                        <h4 id="space-rate">Space rate</h4>
                        <div id="type-box">
                            <img id="space-type-icon" src=""></img>
                            <h4 id="space-type-name"></h4>
                        </div>
                    </div>
                    <div id="space-detail">
                        <div id="space-detail-name-edit">
                            <h3 id="space-detail-name">Space name</h3>
                            <ion-icon class="ion-icon" id="btn-update-space" name="pencil-outline"></ion-icon>
                        </div>
                        <!-- <h4 id="space-name">Space name</h4> -->
                        <h4 id="space-address">Space address</h4>
                        <h4 id="space-postcode">Space postcode</h4>
                        <h4 id="space-description">Space description</h4>
                    </div>
                </div>
                <ul id="space-bookings">
                </ul>
            </div>
            <div id="owner-detail-empty">
                <h4>No Space selected!</h4>
            </div>
        </div>
        
    </div>
    <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBeEeKz4H-KQTFABe1UTs9h5KUlpqsZ10Q&callback=initMap"></script>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>
</html>