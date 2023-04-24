$(document).ready(function() {
    
    $(".btn-owner").hide();
    $(".btn-driver").hide();
    $(".btn-login").hide();
    $(".btn-logout").hide();
    $(".login-popup").hide();
    $(".register-popup").hide();

    console.log("home window location:" + window.location.href);
    if (window.location.href == "http://localhost/spare_park/home.php") {
        $("#driver-layout").load("/spare_park/driver/driver.php"); 
        console.log("We are in home!");
    }

    $.ajax({ url: "/spare_park/auth/login_status.php",
        context: document.body,
        success: function(response) {
            //Response is already parsed to json because 'application/json' is set on php side!
            //var parsedRespose = jQuery.parseJSON(response);
            if (response.logged_in) {
                $(".btn-owner").show();
                $(".btn-driver").show();
                $(".btn-logout").show();
            } else {
                console.log("show logIn!");
                $(".btn-login").show();
            }
            console.log("loggedIn:" + response.logged_in);
        }
    });
    
    $(".logo").click(function() {
        window.location = "/spare_park/home.php";
    });
    $(".btn-bookings").click(function() {
        window.location = "/spare_park/bookings/my_bookings.php";
    });
    $(".btn-owner").click(function() {
        //add owner html
        //https://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file
        //generate list
        //https://stackoverflow.com/questions/5881033/how-to-generate-ul-li-list-from-string-array-using-jquery
        //$("#owner-layout").load("/spare_park/owner/owner.php"); 
        window.location = "/spare_park/owner/owner.php";
    });
    $(".btn-login").click(function() {
        $(".login-popup").show();
        console.log("show login popup!");
    });
    $(".btn-logout").click(function() {
        console.log("logging out");
        $.ajax({ url: "/spare_park/auth/signout_action.php",
            context: document.body,
            success: function(response) {
                console.log("logging out success!");
                if (response.logged_out) {
                    $(".btn-owner").hide();
                    $(".btn-driver").hide();
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

        $.ajax({ url: "/spare_park/auth/signin_action.php",
            type: 'POST',
            data: jQuery.param({ email: emailVal, password: passwordVal }),
            context: document.body,
            success: function(response) {
                console.log("loggedIn:" + response.logged_in);
                console.log("loggedIn data:" + response.data);
                if (response.logged_in) {
                    console.log("login success");
                    $(".login-popup").hide();
                    $(".btn-login").hide();
                    $(".btn-owner").show();
                    $(".btn-driver").show();
                    $(".btn-logout").show();
                    window.location ="/spare_park/home.php";
                } else {
                    console.log("login failed!");
                    alert("Invalid User name or Password!");
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

        $.ajax({ url: "/spare_park/auth/signup_action.php",
            type: 'POST',
            data: jQuery.param({ name: nameVal, email: emailVal, phone: phoneVal, password: passwordVal }),
            context: document.body,
            success: function(response) {
                console.log("register:" + response.logged_in);
                if (response.logged_in) {
                    console.log("register success");
                    $(".register-popup").hide();
                    $(".login-popup").hide();
                    $(".btn-login").hide();
                    $(".btn-owner").show();
                    $(".btn-driver").show();
                    $(".btn-logout").show();
                } else {
                    console.log("register failed!");
                    alert("register failed!");
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("register error!");
            }
        });
    });

});