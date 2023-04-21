<?php

//session_start();

//if user is not logged in redirect him to the login page
/*if (!isset($_SESSION["logged_in"]) || $_SESSION["logged_in"] !== true) {
    header("location: /spare_park/auth/signin.php");
    exit;
}*/
$logged_in = isset($_SESSION["logged_in"]) && $_SESSION["logged_in"] === true;
$yoyo = '{"name": "riyas"}';
?>

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
    <script src="home.js"></script>
    <script src="/spare_park/owner/owner.js"></script>
    <script src="/spare_park/driver/driver.js"></script>
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
            <!-- <?php if ($logged_in): ?> -->
                
            <!-- <?php else: ?> -->
                <!-- <button class="btn-login">Login</button> -->
                
            <!-- <?php endif; ?> -->
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
    <div id="owner-layout">
        <!-- <p>Owner Layout!</p> -->
    </div>
    <div id="driver-layout">
        <!-- <p>Driver Layout!</p> -->
    </div>
    
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>
</html>