$(document).ready(function() {

    console.log("Owner js executed!");

    $("#owner-detail").hide();
    $("#owner-detail-empty").show();

    $(".logo").click(function() {
        window.location = "/spare_park/home.php";
    });
    $(".btn-driver").click(function() {
        window.location = "/spare_park/home.php";
    });
    $(".btn-bookings").click(function() {
        window.location = "/spare_park/bookings/my_bookings.php";
    });

    //Populate spaces
    $.ajax({ url: "/spare_park/api/space/get_my_spaces.php",
        type: 'GET',
        context: document.body,
        success: function(spaceArray) {//spaceArray
            for (let i=0; i<spaceArray.length; i++) {
                const space = spaceArray[i];
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
                const spaceType = $("<img>")
                    .attr("class", "space-item-type")
                    .attr("src", typeSrc);

                const spaceName = $("<p>")
                    .attr("class", "space-name")
                    .append(space.name);
                const spaceAddress = $("<p>")
                    .attr("class", "space-address")
                    .append(space.post_code);
                const spaceNameAddress = $("<div>")
                    .attr("class", "space-name-address")
                    .append(spaceName)
                    .append(spaceAddress);

                var spaceId = '' + space.id;
                var spaceDeleteIcon = $("<ion-icon>")
                    .attr("class", "ion-icon btn-remove-space")
                    .attr("id", spaceId)
                    .attr("position", i)
                    .attr("name", "trash-outline");
                
                /*var spaceDeleteSpan = $("<span>")
                    .attr("class", "icon btn-remove-space")
                    .attr("id", spaceId)
                    .append(spaceDeleteIcon);*/
                var item = $("<div>")
                    .attr("class", "space-item")
                    .attr("id", spaceId)
                    .attr("position", i)
                    .attr("space-name", space.name)
                    .attr("space-status", space.status)
                    .attr("space-type", space.type)
                    .attr("space-hour-rate", space.hour_rate)
                    .attr("space-postcode", space.post_code)
                    .attr("space-address", space.address)
                    .attr("space-latitude", space.latitude)
                    .attr("space-longitude", space.longitude)
                    .attr("space-description", space.description)
                    .append(spaceType)
                    .append(spaceNameAddress)
                    .append(spaceDeleteIcon);
                var liItem = $("<li>")
                    .attr("class", "li-space-item")
                    .append(item);
                    
                //var item = $("<p>").append(spaceArray[i].name);
                $("#my-spaces").append(liItem);
            }
            console.log("get spaces response:" + spaceArray);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("Get spaces error!, xhr.status:" . xhr.status);
        }
    });

    $(".btn-logout").click(function() {
        console.log("logging out");
        $.ajax({ url: "/spare_park/api/auth/signout.php",
            context: document.body,
            success: function(response) {
                console.log("logging out success!");
                if (response.status) {
                    window.location = "/spare_park/home.php"
                } else {
                    alert("Failed signing out!");
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("logging out error!");
            }
        });
    });

    $("#btn-new-space").click(function() {
        console.log("btn-add-space is clicked!");
        localStorage.removeItem("spaceId");
        window.location = "/spare_park/owner/space/add_space.php"
    });

    $("#btn-update-space").click(function() {
        console.log("btn-update-space is clicked!, id:" + $(this).attr("id"));
        localStorage.setItem("spaceId", $(this).attr("id"));
        localStorage.setItem("space-name", $(this).attr("space-name"));
        localStorage.setItem("space-type", $(this).attr("space-type"));
        localStorage.setItem("space-hour-rate", $(this).attr("space-hour-rate"));
        localStorage.setItem("space-postcode", $(this).attr("space-postcode"));
        localStorage.setItem("space-address", $(this).attr("space-address"));
        localStorage.setItem("space-latitude", $(this).attr("space-latitude"));
        localStorage.setItem("space-longitude", $(this).attr("space-longitude"));
        localStorage.setItem("space-description", $(this).attr("space-description"));
        
        window.location = "/spare_park/owner/space/add_space.php";
    });
    $(".icon-close-space").click(function() {
        $("#popup-add-space").hide();
    });
    $("#popup-btn-add-space").click(function() {

        const spaceId = $(this).attr("id");
        console.log("Call Add space API! id:" +spaceId);
        console.log("Call Add space API! btn text:" + $(this).text());

        if ($(this).text() === "Update Space") {
            addSpace(spaceId);
        } else {
            addSpace();
        }
    });

    $('#my-spaces').on('click', '.space-item', function() {
        const spaceId = $(this).attr("id");
        const itemPos = $(this).attr("position");
        const spaceName = $(this).attr("space-name");
        const spaceStatus = $(this).attr("space-status");
        const spaceType = $(this).attr("space-type");
        const spaceHourRate = $(this).attr("space-hour-rate");
        const spacePostcode = $(this).attr("space-postcode");
        const spaceAddress = $(this).attr("space-address");
        const spaceLatitude = $(this).attr("space-latitude");
        const spaceLongitude = $(this).attr("space-longitude");
        const spaceDescription = $(this).attr("space-description");

        $("#owner-detail").show();
        $("#owner-detail-empty").hide();
        //var spaceLatitude = -33.712206;
        //var spaceLongitude = 150.311941;
        console.log("space details with position:"+ itemPos + ", id:" + spaceId +" clicked!");
        var spaceMapUrl = "https://www.google.com/maps/@?api=1&map_action=map&center=" 
        + spaceLatitude + "%2C" + spaceLongitude + "&zoom=12&basemap=terrain";
        spaceMapUrl = "https://picsum.photos/500/300";
        $("#space-detail-map-image").attr("src", spaceMapUrl);

        $("#btn-update-space")
            .attr("id", spaceId)
            .attr("space-name", spaceName)
            .attr("space-type", spaceType)
            .attr("space-hour-rate", spaceHourRate)
            .attr("space-postcode", spacePostcode)
            .attr("space-address", spaceAddress)
            .attr("space-latitude", spaceLatitude)
            .attr("space-longitude", spaceLongitude)
            .attr("space-description", spaceDescription);

        let typeSrc = "/spare_park/img/vehicle-car.png";
        switch(spaceType) {
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
        $("#space-type-name").text(spaceType);
        $("#space-type-icon").attr("src", typeSrc);    
        $("#space-detail-name").text(spaceName);
        $("#space-rate").text("£" + spaceHourRate + "/HR");

        $("#space-detail-name").text(spaceName);
        $("#space-address").text(spaceAddress);
        $("#space-postcode").text(spacePostcode);
        $("#space-description").text(spaceDescription);
        showMap(spaceLatitude, spaceLongitude);
        getSpaceBookings(spaceId);
    });

    $('#my-spaces').on('click', '.btn-remove-space', function() {
        var spaceId = $(this).attr("id");
        var itemPos = $(this).attr("position");
        console.log("btn-remove-space with position:"+ itemPos + ", id:" + spaceId +" clicked!");

        var spaceElement = $(this).parent();
        $.ajax({ url: "/spare_park/api/space/remove_space.php",
            type: 'POST',
            data: jQuery.param({id: spaceId}),
            context: document.body,
            success: function(response) {
                console.log("space added status:" + response.status);
                if (response.status) {
                    console.log("Space deleted!");
                    spaceElement.remove();
                    //$("#popup-add-space").hide();
                } else {
                    console.log(response.message);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("Remove space error!, xhr.status:" . xhr.status);
            }
        });
    });

    $('#space-bookings').on('click', '.btn-status-action', function() {
        const bookingId = $(this).attr("id");
        const bookingStatus = $(this).attr("status");
        const action = $(this).attr("action");
        console.log("btn-remove-booking with id:"+ bookingId + ", status:" + bookingStatus +" clicked!");
  
        var newStatus;
        if (bookingStatus === 'requested') {
            if (action === "accept") {
                newStatus = "accepted";
            } else if (action === "reject") {
                newStatus = "rejected";
            }
        } else if (bookingStatus === 'accepted') {
            newStatus = "completed";
        }
        if (newStatus !== undefined) {
            $.ajax({ url: "/spare_park/api/booking/update_booking_status.php",
                type: 'POST',
                data: jQuery.param({id: bookingId, status: newStatus}),
                context: document.body,
                success: function(response) {
                    
                    if (response.status) {
                        console.log("Booking status changed to:" + newStatus);
                    } else {
                        console.log(response.message);
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log("Remove space error!, xhr.status:" . xhr.status);
                }
            });
        } else {
            console.log("ignore click!");
        }
    });
    
});

function addSpace(id) {

    var form = $( "#form-add-space" );
    console.log("Updating space!, id:" + id);
    $('#form-add-space').submit(function () {
        form.validate();
        if(form.valid()) {
            let data = {
                name: $("#popup-space-name").val(),
                type: $("#popup-space-type").val(),
                hour_rate: $("#popup-space-rate").val(),
                address: $("#popup-space-address").val(),
                postcode: $("#popup-space-postcode").val(),
                latitude: $("#popup-space-latitude").val(),
                longitude: $("#popup-space-longitude").val(),
                description: $("#popup-space-description").val()
            };

            console.log("Add space! id:" + id);
            if (id !== undefined) {
                data['id'] = id;
                console.log("Updating space! name:" + ($(".space-name").val()));
            }
            $.ajax({ url: "/spare_park/api/add_space.php",
                type: 'POST',
                data: jQuery.param(data),
                context: document.body,
                success: function(response) {
                    console.log("Space added status:" + response.status);
                    if (response.status) {
                        console.log("New space added!, id:" + response.id);
                        console.log("New space added!, log:" + response.log);
                        $("#popup-add-space").hide();
                    } else {
                        console.log(response.message);
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log("Add space error!");
                }
            });
        }
    });
    
}

var map;
        
async function initMap() {
    //@ts-ignore
    console.log("initMap()");
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("space-map-view"), {
        center: { lat: 51.507904, lng: -0.075226 },
        zoom: 14,
    });
}

//SHOW ADD SPACE in seperate html page and pick location from popup

function showMap(lat, lng) {
    console.log("showMap()");

    
        var myLatLng = {
            lat: parseFloat(lat),
            lng: parseFloat(lng)
        };
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map
        });
        
        map.setCenter(marker.getPosition());    
}

function getSpaceBookings(spaceId) {

    //DISPLAY SPACE BOOKINGS PROPERLY
    $(".booking-item").empty();
    console.log("getSpaceBookings() spaceId:" + spaceId);
    $.ajax({ url: "/spare_park/api/booking/get_space_bookings.php",
            type: 'GET',
            data: jQuery.param({ id: spaceId }),
            context: document.body,
            success: function(bookings) {
                //$(".booking-item").empty();
                for (let i=0; i<bookings.length; i++) {
                    const booking = bookings[i];

                    const bookingNameTime = $("<div>")
                        .attr("class", "booking-name-time")

                    const bookingUserName = $("<p>")
                        .attr("class", "booking-driver-name")
                        .append(booking.username + " - " + booking.id)
                    const bookingTime = $("<p>")
                        .attr("class", "booking-time")    
                        .append(booking.time_from)
                        .append("<br>")
                        .append(booking.time_to);

                    bookingNameTime.append(bookingUserName)
                        .append(bookingTime);

                    var bookingId = '' + booking.id;
                    
                    var item = $("<div>")
                        .attr("class", "booking-item")
                        .attr("id", bookingId)
                        .attr("position", i)
                        .attr("space-name", booking.name)
                        .attr("space-status", booking.status)
                        .attr("space-type", booking.type)
                        .attr("space-hour-rate", booking.hour_rate)
                        .attr("space-postcode", booking.post_code)
                        .attr("space-address", booking.address)
                        .attr("space-latitude", booking.latitude)
                        .attr("space-longitude", booking.longitude)
                        .attr("space-description", booking.description)
                        .append(bookingNameTime);

                    var bookingStatusAction = $("<div>")
                        .attr("class", "booking-status-action");
                    var bookingStatusIcon = $("<ion-icon>")
                        .attr("class", "ion-icon btn-status-action")
                        .attr("id", bookingId)
                        .attr("status", booking.status)
                        .attr("position", i);
                    var bookingStatusIconAccept;
                    if (booking.status === "requested") {
                        bookingStatusIcon.attr("action", "reject")
                        bookingStatusIconAccept = $("<ion-icon>")
                            .attr("class", "ion-icon btn-status-action")
                            .attr("id", bookingId)
                            .attr("status", booking.status)
                            .attr("action", "accept")
                            .attr("position", i);
                    }
                    
                    var statusColor = "blue";
                    switch (booking.status) {
                        case "accepted":
                            statusColor = "green";
                            bookingStatusIcon.attr("name", "checkmark-done-outline");
                            //bookingStatusIconAccept.attr("name", "");
                            break;
                        case "rejected":
                            statusColor = "red";
                            //bookingStatusIcon.attr("name", "");
                            //bookingStatusIconAccept.attr("name", "");
                            break;
                        case "cancelled":
                            statusColor = "grey";
                            //bookingStatusIcon.attr("name", "");
                            //bookingStatusIconAccept.attr("name", "");
                            break;
                        case "completed":
                            statusColor = "black";
                            //bookingStatusIcon.attr("name", "");
                            //bookingStatusIconAccept.attr("name", "");
                            break;
                        default://Requested
                            statusColor = "blue";
                            bookingStatusIcon.attr("name", "close-circle-outline");
                            bookingStatusIconAccept.attr("name", "checkmark-circle-outline");
                    }    
                    var bookingStatus = $("<p>")
                        .attr("class", "booking-status")
                        .attr("style", "color:" + statusColor)
                        .append(booking.status);
                    bookingStatusAction.append(bookingStatus);

                    if (booking.status === 'requested') {
                        bookingStatusIcon.attr("cursor", "pointer");
                    } else {
                        bookingStatusIcon.attr("cursor", "none");
                    }
                    bookingStatusAction.append(bookingStatusIcon);
                    if (bookingStatusIconAccept !== undefined) {
                        bookingStatusAction.append(bookingStatusIconAccept);
                    }
                    
                    item.append(bookingStatusAction);
                        
                    //var item = $("<p>").append(spaceArray[i].name);
                    $("#space-bookings").append(item);
                }
                console.log("get bookings response. size:" + bookings.length);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("Get bookings error!, xhr.status:" . xhr.status);
            }
        }
    );
}