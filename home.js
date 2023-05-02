$(document).ready(function() {
    
    $(".btn-driver").hide();
    $(".btn-bookings").hide();
    $(".btn-owner").hide();
    $(".btn-login").hide();
    $(".btn-logout").hide();
    $(".login-popup").hide();
    $(".register-popup").hide();

    console.log("home window location:" + window.location.href);
    //if (window.location.href == "http://localhost/spare_park/home.php") {
        $("#driver-layout").load("/spare_park/driver/driver.php"); 
        console.log("We are in home!");
    //}

    $.ajax({ url: "/spare_park/api/auth/login_status.php",
        context: document.body,
        success: function(response) {
            //Response is already parsed to json because 'application/json' is set on php side!
            //var parsedRespose = jQuery.parseJSON(response);
            if (response.status) {
                $(".btn-driver").show();
                $(".btn-owner").show();
                $(".btn-bookings").show();
                $(".btn-logout").show();
            } else {
                $(".btn-login").show();
            }
            console.log("loggedIn:" + response.status);
        }
    });
    
    $(".logo").click(function() {
        window.location = "/spare_park/home.php";
    });
    $(".btn-bookings").click(function() {
        window.location = "/spare_park/bookings/my_bookings.php";
    });
    $(".btn-owner").click(function() {
        window.location = "/spare_park/owner/owner.php";
    });
    $(".btn-login").click(function() {
        $(".login-popup").show();
        console.log("show login popup!");
    });
    $(".btn-logout").click(function() {
        console.log("logging out");
        $.ajax({ url: "/spare_park/api/auth/signout.php",
            context: document.body,
            success: function(response) {
                console.log("logging out success!");
                if (response.status) {
                    $(".btn-driver").hide();
                    $(".btn-bookings").hide();
                    $(".btn-owner").hide();
                    $(".btn-logout").hide();
                    $(".login-popup").hide();
                    $(".register-popup").hide();
                    $(".btn-login").show();
                } else {
                    alert("Failed signing out!");
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("logging out error!");
            }
        });
    });

    $(".register-link").click(function() {
        $(".login-popup").hide();
        $(".register-popup").show();
    });
    $(".icon-close-login").click(function() {
        $(".login-popup").hide();
    });
    $(".btn-login-submit").click(function() {
        console.log("click login");
        var emailVal = $(".login-email").val();
        var passwordVal = $(".login-password").val();

        $.ajax({ url: "/spare_park/api/auth/signin.php",
            type: 'POST',
            data: jQuery.param({ email: emailVal, password: passwordVal }),
            context: document.body,
            success: function(response) {
                console.log("status:" + response.status);
                if (response.status) {
                    $(".login-popup").hide();
                    $(".btn-login").hide();
                    $(".btn-owner").show();
                    $(".btn-bookings").show();
                    $(".btn-driver").show();
                    $(".btn-logout").show();
                    //window.location ="/spare_park/home.php";
                } else {
                    console.log(response.message);
                    alert(response.message);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("logging in error!, xhr.status:" . xhr.status);
            }
        });
    });


    $(".login-link").click(function() {
        $(".register-popup").hide();
        $(".login-popup").show();   
    });
    $(".icon-close-register").click(function() {
        $(".register-popup").hide();
    });
    $(".btn-register-submit").click(function() {
        console.log("click register");
        var nameVal = $(".register-name").val();
        var emailVal = $(".register-email").val();
        var phoneVal = $(".register-phone").val();
        var passwordVal = $(".register-password").val();

        $.ajax({ url: "/spare_park/api/auth/signup.php",
            type: 'POST',
            data: jQuery.param({ name: nameVal, email: emailVal, phone: phoneVal, password: passwordVal }),
            context: document.body,
            success: function(response) {
                console.log("register:" + response.status);
                if (response.status) {
                    console.log("register success");
                    $(".register-popup").hide();
                    $(".login-popup").hide();
                    $(".btn-login").hide();
                    $(".btn-owner").show();
                    $(".btn-driver").show();
                    $(".btn-logout").show();
                } else {
                    console.log(response.message);
                    alert(response.message);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("register error!");
            }
        });
    });

});