<?php
    require('db_conn.php');
    session_start();
    $showPage = false;
    if (isset($_POST['username'])) {
        $username = stripslashes($_REQUEST['username']);    // removes backslashes
        $username = mysqli_real_escape_string($conn, $username);
        $password = stripslashes($_REQUEST['password']);
        $password = mysqli_real_escape_string($conn, $password);
        // Check user is exist in the database
        $query    = "SELECT * FROM `users` WHERE username='$username'
                    AND password='$password'";
        $result = mysqli_query($conn, $query) or die("error connecting!");
        $rows = mysqli_num_rows($result);
        $conn = 0;
        if ($rows == 1) {
            $_SESSION['username'] = $username;
            $_SESSION["LOGGEDIN"] = true;
            $_SESSION["id"] = $id;
            // Redirect to user dashboard page
            header("Location: index.php");
        } else {
            echo "<div class='form'>
                <h3>Incorrect Username/password.</h3><br/>
                <p class='link'>Click here to <a href='login.php'>Login</a> again.</p>
                </div>";
        }
    } else {
        $showPage = true;
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Login</title>
        <link rel="stylesheet" href="css/main.css"/>
        <link rel="stylesheet" type="text/css" href="css/style.css">

    </head>
    <body>
    <?php
        require('db_conn.php');
        session_start();
        // When form submitted, check and create user session.
        if (isset($_POST['username'])) {
            $username = stripslashes($_REQUEST['username']);    // removes backslashes
            $username = mysqli_real_escape_string($conn, $username);
            $password = stripslashes($_REQUEST['password']);
            $password = mysqli_real_escape_string($conn, $password);
            // Check user is exist in the database
            $query    = "SELECT * FROM `users` WHERE username='$username'
                        AND password='$password'";
            $result = mysqli_query($conn, $query) or die("error connecting!");
            $rows = mysqli_num_rows($result);
            $conn = 0;
            if ($rows == 1) {
                $_SESSION['username'] = $username;
                $_SESSION["LOGGEDIN"] = true;
                $_SESSION["id"] = $id;
                // Redirect to user dashboard page
                header("Location: index.php");
            } else {
                echo "<div class='form'>
                    <h3>Incorrect Username/password.</h3><br/>
                    <p class='link'>Click here to <a href='login.php'>Login</a> again.</p>
                    </div>";
            }
        } else {
    ?>
    <form class="form" method="post" name="login" action="index.php">
        <h1 class="login-title">Login</h1>
        <label>Username:</label>
        <input type="text" class="login-input" name="username" placeholder="Username" autofocus="true"/>
        <label>Password:</label>
        <input type="password" class="login-input" name="password" placeholder="Password"/>
        <input type="submit" value="Login" name="submit" class="login-button"/>
        <p class="link">Don't have an account? <a href="registration.php">Registration Now</a></p>
    </form>
    <?php
        }
    ?>
</body>
</html>