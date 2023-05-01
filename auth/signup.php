<?php
    // Connect to database
    $server = "localhost:3306";
    $username = "root";
    $password = "";
    $db = "spare_park";
        
    // checking connection

    //echo $db
    //echo "Signup action!";
    $connection = mysqli_connect($server, $username, $password, $db) or die ("Not connected!");
     
    // mysqli_connect("servername","username","password","database_name")
  
    // Get all the categories from category table
    $sql = "SELECT * FROM `country`";
    $all_countries = mysqli_query($connection, $sql);
  
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/signin.css" />
    <title>Sign In</title>
</head>
<body>
    <section class="signin-container">
        <form class="signin-form" name="signup" method="post" action="/spare_park/api/auth/signup.php"> 
            <input type="text" id="name" name="name" placeholder="John Smith" ><br><br>
            <input type="email" id="email" name="email" placeholder="john@gmail.com"><br><br>
            <input type="password" id="password" name="password" placeholder="********"><br><br>
            <input type="tel" id="phone" name="phone" placeholder="123-45-678" ><br><br>
            <select name="country">
                <?php
                // use a while loop to fetch data
                // from the $all_categories variable
                // and individually display as an option
                while ($country = mysqli_fetch_array(
                        $all_countries, MYSQLI_ASSOC)):;
                ?>
                    <option value="<?php echo $country["id"];
                        // The value we usually set is the primary key
                    ?>">
                        <?php echo $country["name"];
                            // To show the category name to the user
                        ?>
                    </option>
                <?php
                endwhile;
                // While loop must be terminated
                ?>
            </select>
            <!-- <input type="tel" id="phone" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"><br><br> -->
            <input type="submit" value="Sign Up">
        </form>
        <br>
        <b><a href="signin.php">Sign In</a></b>
    </section>
</body>
</html>