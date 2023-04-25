$(document).ready(function() {

    console.log("my_bookings js executed!");

    $(".logo").click(function() {
        window.location = "/spare_park/home.php";
    });
    $(".btn-driver").click(function() {
        window.location = "/spare_park/home.php";
    });
    $(".btn-owner").click(function() {
        window.location = "/spare_park/owner/owner.php";
    });
    $(".btn-bookings").click(function() {
        window.location = "/spare_park/bookings/my_bookings.php";
    });

    $.ajax({ url: "/spare_park/api/get_my_bookings.php",
            type: 'GET',
            context: document.body,
            success: function(bookings) {
                for (let i=0; i<bookings.length; i++) {
                    const booking = bookings[i];
                    let typeSrc = "/spare_park/img/vehicle-car.png";
                    switch(booking.type) {
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
                        .append(booking.name);
                    const bookingTimeText = booking.timeFrom + " - " + booking.timeTo;
                    const bookingTime = $("<p>")
                        .attr("class", "space-time")
                        .append(bookingTimeText);
                    const spaceNameTime = $("<div>")
                        .attr("class", "space-name-time")
                        .append(spaceName)
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
                        .append(spaceType)
                        .append(spaceNameTime);

                    var bookingStatusAction = $("<div>")
                        .attr("class", "booking-status-action");
                    var bookingStatusIcon = $("<ion-icon>")
                        .attr("class", "ion-icon btn-status-action")
                        .attr("id", bookingId)
                        .attr("status", booking.status)
                        .attr("position", i);
                    var statusColor = "blue";
                    switch (booking.status) {
                        case "accepted":
                            statusColor = "green";
                            //bookingStatusIcon.attr("name", "checkmark-outline");
                            break;
                        case "rejected":
                            statusColor = "red";
                            //bookingStatusIcon.attr("name", "alert-outline");
                            break;
                        case "cancelled":
                            statusColor = "grey";
                            //bookingStatusIcon.attr("name", "remove-outline");
                            break;
                        case "completed":
                            statusColor = "black";
                            //bookingStatusIcon.attr("name", "checkmark-circle-outline");
                            break;
                        default:
                            statusColor = "blue";
                            bookingStatusIcon.attr("name", "close-circle-outline");
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
                    
                    item.append(bookingStatusAction);
                        
                    //var item = $("<p>").append(spaceArray[i].name);
                    $("#my-bookings").append(item);
                }
                console.log("get bookings response. size:" + bookings.length);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("Get bookings error!, xhr.status:" . xhr.status);
            }
        }
    );

    $('#my-bookings').on('click', '.btn-status-action', function() {
        var bookingId = $(this).attr("id");
        var bookingStatus = $(this).attr("status");
        console.log("btn-remove-booking with id:"+ bookingId + ", status:" + bookingStatus +" clicked!");

        if (bookingStatus === 'requested') {
            var spaceElement = $(this).parent().parent();
            $.ajax({ url: "/spare_park/api/cancel_booking.php",
                type: 'POST',
                data: jQuery.param({id: bookingId}),
                context: document.body,
                success: function(response) {
                    console.log("space added status:" + response.status);
                    if (response.status === "success") {
                        console.log("Space deleted!");
                        spaceElement.remove();
                    } else {
                        console.log("Removing space failed!");
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