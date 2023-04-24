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
    <link rel="stylesheet" href="my_bookings.css">
    <script src="my_bookings.js"></script>
    <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
    <!-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGsGonLWTkKhOE9xCVlM-N0EFaLHk4DvI&callback=fetchMap"></script> -->

</head>
<body id="home-body">
    <header id="home-header">
        <h2 class="logo">Spare Park</h2>
        <nav class="navbar">
            <a class="btn-driver" href="#">Driver</a>
            <a class="btn-bookings active" href="#">Bookings</a>
            <a class="btn-owner" href="#">Owner</a>
            <a href="#" class="btn-logout">Logout</a>
        </nav>
    </header>
    
    <div class="my-bookings-container">
        <ul id="my-bookings"></ul>
    </div>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>
</html>