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
    <!-- <link rel="stylesheet" href="/spare_park/owner/owner.css"> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <link rel="stylesheet" href="add_space.css">
    <script src="add_space.js"></script>
    <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
    <!-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGsGonLWTkKhOE9xCVlM-N0EFaLHk4DvI&callback=fetchMap"></script> -->

</head>
<body id="home-body">
    <header id="home-header">
        <h2 class="logo">Spare Park</h2>
        <nav class="navbar">
            <a class="btn-driver" href="#">Driver</a>
            <a class="btn-bookings" href="#">Bookings</a>
            <a class="btn-owner active" href="#">Owner</a>
            <a href="#" class="btn-logout">Logout</a>
        </nav>
    </header>
    <!-- <div id="google-map" style="width:300px; height:300px;"> -->

    </div>
    
    <div id="add-space-root-container">
        
        <div id="add-space-container">
            
            <div class="form-box">
                <h2 id="popup-add-space-title">Add Space</h2>
                <form id="form-add-space" action="#">
                    <div class="input-box">
                        <input id="popup-space-name" type="text" placeholder="Space name" required>
                    </div>
                    <div class="input-box">
                        
                        <select name="popup-space-type" id="popup-space-type" place>
                            <option value="" disabled selected>Select Space type</option>
                            <option value="car">Car</option>
                            <option value="motor_cycle">Motor Cycle</option>
                            <option value="truck">Truck</option>
                            <option value="van">Van</option>
                            <option value="bus">Bus</option>
                        </select>
                    </div>
                    <div class="input-box">
                        <input id="popup-space-rate" type="number" placeholder="Hourly rate" required>
                    </div>
                    <div class="input-box">
                        <input id="popup-space-address" type="text" placeholder="Address" required>
                    </div>
                    <div class="input-box">
                        <input id="popup-space-postcode" type="text" placeholder="Post code" required>
                    </div>
                    <div class="input-box">
                        <input id="popup-space-latitude" type="text" placeholder="Latitude" required>
                    </div>
                    <div class="input-box">
                        <input id="popup-space-longitude" type="text" placeholder="Longitude" required>
                    </div>
                    <div class="input-box">
                        <input id="popup-space-description" type="text" placeholder="Description" required>
                    </div>
                    
                    <button type="submit" class="popup-btn" id="popup-btn-add-space">Add Space</button>
                </form>
            </div>
        </div>
    </div>
    
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>
</html>