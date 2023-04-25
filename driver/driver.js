$(document).ready(function() {
    console.log("driver js loaded!");

    // var now = new Date();
    // now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    // now.setMilliseconds(null)
    // now.setSeconds(null)
    // document.getElementById('input-driver-time-from').value = now.toISOString().slice(0, -1);

    $("#btn-driver-search").click(function() {

        const location = $("#input-driver-location").val();
        const timeFrom = $("#input-driver-time-from").val();
        const timeTo = $("#input-driver-time-to").val();
        console.log("timeFrom:" + timeFrom);
        console.log("timeTo:" + timeTo);

        let params = {
            location: location,
            timeFrom: timeFrom,
            timeTo: timeTo
        };

        $.ajax({ url: "/spare_park/driver/search_space_action.php",
            type: 'GET',
            data: jQuery.param(params),
            context: document.body,
            success: function(response) {//spaceArray
                $(".space-item").empty();
                if (response.status === "not_available") {
                    alert("No space available for the time selected!");
                    return;
                }

                const spaceArray = response.spaces;
                console.log("spaces length:" + response.len);
                showMarkers(spaceArray);

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
                        .attr("class", "ion-icon btn-space-item")
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
                        
                    $("#list-search-result").append(item);
                }
                
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("Get spaces error!, xhr.status:" . xhr.status);
            }
        });
    });

    $('#list-search-result').on('click', '.btn-space-item', function() {
        const spaceId = $(this).attr("id");
        const timeFrom = $("#input-driver-time-from").val();
        const timeTo = $("#input-driver-time-to").val();
        const itemPos = $(this).attr("position");
        console.log("btn-space-item with position:"+ itemPos + ", id:" + spaceId +" clicked!");

        
        //book_space_action method is not getting triggered!
        $.ajax({ url: "/spare_park/driver/book_space_action.php",
            type: 'POST',
            data: jQuery.param({spaceId: spaceId, timeFrom: timeFrom, timeTo: timeTo}),
            context: document.body,
            success: function(response) {
                console.log("space booking status:" + response.status);
                if (response.status === "success") {
                    console.log("Space booked!");
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

    $('#list-search-result').on('click', '.space-item', function() {
        const spaceId = $(this).attr("id");
        const itemPos = $(this).attr("position");
        console.log("btn-space-item with position:"+ itemPos + ", id:" + spaceId +" clicked!");
        localStorage.setItem("spaceId", spaceId);
        localStorage.setItem("bookingStartTime", $("#input-driver-time-from").val());
        localStorage.setItem("bookingEndTime", $("#input-driver-time-to").val());
        window.location = "/spare_park/driver/booking/space_booking.php";
    });
    
});

var map;
        
async function initMap() {
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("map-view"), {
        center: { lat: 51.507904, lng: -0.075226 },
        zoom: 14,
    });
}

//SHOW ADD SPACE in seperate html page and pick location from popup

function showMarkers(spaces) {
    console.log("showMarkers()");

    for (let i=0; i<spaces.length; i++) {
        var myLatLng = {
            lat: parseFloat(spaces[i].latitude),
            lng: parseFloat(spaces[i].longitude)
        };
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map
        });
        marker.addListener("click", () => {
            marker.set("spaceId", spaces[i].id);
            localStorage.setItem("spaceId", spaces[i].id);
            localStorage.setItem("bookingStartTime", $("#input-driver-time-from").val());
            localStorage.setItem("bookingEndTime", $("#input-driver-time-to").val());
            console.log("marker click added with id:" + marker.get("spaceId"));
            window.location = "/spare_park/driver/booking/space_booking.php";
        });
        
        if (i === 0) {
            map.setCenter(marker.getPosition());
        }
    }

}