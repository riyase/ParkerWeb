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
    <link rel="stylesheet" href="/spare_park/owner/owner.css">
    <script src="owner.js"></script>
    <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
    <!-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGsGonLWTkKhOE9xCVlM-N0EFaLHk4DvI&callback=fetchMap"></script> -->

</head>
<body id="home-body">
    <header id="home-header">
        <h2 class="logo">Spare Park</h2>
        <nav class="navbar">
            <a class="btn-driver active" href="#">Driver</a>
            <a class="btn-owner" href="#">Owner</a>
            <button class="btn-login">Login</button>
            <a href="#" class="btn-logout">Logout</a>
        </nav>
    </header>
    <!-- <div id="google-map" style="width:300px; height:300px;"> -->

    </div>
    <div class="popup-group">
        <div class="login-popup">
            <span class="icon-close-login">
                <ion-icon name="close"></ion-icon>
            </span>
            <div class="form-box">
                <h2>Login</h2>
                <form action="#">
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input class="login-email" type="email" required>
                        <label for="">Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                        <input class="login-password" type="password" required>
                        <label for="">Password</label>
                    </div>
                    <button type="submit" class="btn-login-submit">Login</button>
                    <div class="login-register">
                        <p>Don't have an account?
                            <a href="#" class="register-link">Register</a>
                        </p>    
                    </div>
                </form>
            </div>
        </div>

        <div class="register-popup">
            <span class="icon-close-register">
                <ion-icon name="close"></ion-icon>
            </span>
            <div class="form-box">
                <h2>Register</h2>
                <form action="#">
                    <div class="input-box">
                        <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                        <input class="register-name" type="text" required>
                        <label for="">User name</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input class="register-email" type="email" required>
                        <label for="">Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input class="register-phone" type="phone" required>
                        <label for="">Phone</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                        <input class="register-password" type="password" required>
                        <label for="">Password</label>
                    </div>
                    <div class="terms">
                        <label for=""><input class="terms-checkbox" type="checkbox" >I agree to the terms & conditions</label>
                    </div>
                    <button type="submit" class="btn-register-submit">Register</button>
                    <div class="login-register">
                        <p>Already have an account?
                            <a href="#" class="login-link">Login</a>
                        </p>    
                    </div>
                </form>
            </div>
        </div>
    </div>
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
                        <input id="popup-space-name" type="text" placeholder="Space name" required>
                    </div>
                    <div class="input-box">
                        
                        <select name="popup-space-type" id="popup-space-type" place>
                            <option value="" disabled selected>Select Space type</option>
                            <!-- <option hidden>Select Space type</option> -->
                            <option value="car">Car</option>
                            <option value="motor_cycle">Motor Cycle</option>
                            <option value="truck">Truck</option>
                            <option value="van">Van</option>
                            <option value="bus">Bus</option>
                        </select>
                        <!-- <input id="popup-space-type" type="text" placeholder="Space type" required> -->
                    </div>
                    <div class="input-box">
                        <!-- <span class="icon"><ion-icon name="mail-outline"></ion-icon></span> -->
                        <input id="popup-space-rate" type="number" placeholder="Hourly rate" required>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input id="popup-space-address" type="text" placeholder="Address" required>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input id="popup-space-postcode" type="text" placeholder="Post code" required>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input id="popup-space-latitude" type="text" placeholder="Latitude" required>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input id="popup-space-longitude" type="text" placeholder="Longitude" required>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
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