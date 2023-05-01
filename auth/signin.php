<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/signin.css" />
    <title>Sign In</title>
    <script>
        function showError(show) {
            var errorText = document.getElementById("error_message");
            if (show) {
                errorText.style.visibility = "visible" ;
            } else {
                errorText.style.visibility = "visible" ;
            }
        }
    </script>
</head>
<body>
    <section class="signin-container">
        <form class="signin-form" method="post" action="/spare_park/api/auth/signin.php"> 
            <input type="email" id="email" name="email" placeholder="john@gmail.com"><br><br>
            <input type="password" id="password" name="password" placeholder="********"><br><br>
            <input type="submit" text="Sign Up">
            <p id="error_message" >Login failed. Invalid username or password!</p>
        </form>
        <script type="text/javascript">
            $(document).ready(function () {
                if (window.location.href.indexOf("signin=incorrect") > -1) {
                    alert("Login failed. Invalid username or password!");
                }
                else if (window.location.href.indexOf("text=success") > -1) {
                    alert("A SMS has been sent!");
                }
            });
        </script>
        <a href="signup.php">Sign Up</a><br />
    </section>
</body>
</html>