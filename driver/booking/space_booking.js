$(document).ready(function() {



    //Implement book space by passing space id to space details screen
    const spaceId = localStorage.getItem("spaceId");
    const bookingStartTime = localStorage.getItem("bookingStartTime");
    const bookingEndTime = localStorage.getItem("bookingEndTime");
    $("#input-driver-time-from").val(bookingStartTime);
    $("#input-driver-time-to").val(bookingEndTime);
    console.log("space details js. spaceId:" + spaceId + ", start:" + bookingStartTime + ", end:" + bookingEndTime);
    
    $(".btn-driver").hide();
    $(".btn-bookings").hide();
    $(".btn-owner").hide();
    $(".btn-login").hide();
    $(".btn-logout").hide();

    
    
    $.ajax({ url: "/spare_park/auth/login_status.php",
        context: document.body,
        success: function(response) {
            if (response.logged_in) {
                $(".btn-driver").show();
                $(".btn-bookings").show();
                $(".btn-owner").show();
                $(".btn-logout").show();
            } else {
                console.log("show logIn!");
                $(".btn-login").show();
            }
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

    $.ajax({ url: "/spare_park/api/space/get_space.php",
        type: 'GET',
        data: jQuery.param({id: spaceId}),
        context: document.body,
        success: function(space) {
            
            let typeSrc = "/spare_park/img/vehicle-car.png";
            switch(space.type) {
                case "motor_cycle":
                    typeSrc = "/spare_park/img/vehicle-motor-cycle.png";
                    break;
                case "bus":
                    typeSrc = "/spare_park/img/vehicle-bus.png";
                    break;
                case "van":
                    typeSrc = "/spare_park/img/vehicle-van.png";
                    break;    
                case "truck":
                    typeSrc = "/spare_park/img/vehicle-truck.png";
                    break;        
                default:
                    typeSrc = "/spare_park/img/vehicle-car.png";
            }
            $("#space-type-name").text(space.type);
            $("#space-type-icon").attr("src", typeSrc);

            $("#space-name").text(space.name);
            $("#space-rate").text("£" + space.hour_rate + "/HR");
            $("#space-type").text(space.type);
            $("#space-address").text(space.address);
            $("#space-postcode").text(space.post_code);
            $("#space-description").text(space.description);
            showMarker(space);
            
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("get_space_action error!");
        }
    });

    $(".btn-driver").click(function() {
        window.location = "/spare_park/home.php";
    });

    $(".btn-owner").click(function() {
        window.location = "/spare_park/owner/owner.php";
    });
    $("#btn-book-space").click(function() {
        const timeFrom = $("#input-driver-time-from").val();
        const timeTo = $("#input-driver-time-to").val();
        
        console.log("Call booking api id:"+ spaceId + ", timeFrom:" + timeFrom + ", timeTo:" + timeTo);
        
        //book_space_action method is not getting triggered!
        $.ajax({ url: "/spare_park/driver/book_space_action.php",
            type: 'POST',
            data: jQuery.param({spaceId: spaceId, timeFrom: timeFrom, timeTo: timeTo}),
            context: document.body,
            success: function(response) {
                console.log("space booking status:" + response.status);
                if (response.status === "success") {
                    console.log("Space booked!");
                    window.location = "/spare_park/home.php";
                    //spaceElement.remove();
                    //$("#popup-add-space").hide();
                } else {
                    console.log("Booking space failed!: status:" + response.status);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("Booking space error!, xhr.status:" . xhr.status);
            }
        });
    });
});    

var map;
        
async function initMap() {
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("space-map-view"), {
        //center: { lat: latitude, lng:  longitude},
        center: { lat: 51.507904, lng: -0.075226},
        zoom: 14
    });
    
}

function showMarker(space) {
    console.log("showMarker()");
    
    const latitude = parseFloat(space.latitude);
    const longitude = parseFloat(space.longitude);
    
    
    var marker = new google.maps.Marker({
        position: { lat: latitude, lng:  longitude},
        map: map
    });
    
    map.setCenter(marker.getPosition());
}