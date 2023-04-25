$(document).ready(function() {

    console.log("Add space js executed!");

    $(".logo").click(function() {
        window.location = "/spare_park/home.php";
    });
    $(".btn-driver").click(function() {
        window.location = "/spare_park/home.php";
    });
    $(".btn-bookings").click(function() {
        window.location = "/spare_park/driver/booking/space_booking.php";
    });
    $(".btn-owner").click(function() {
        window.location = "/spare_park/owner/owner.php";
    });
    
    const spaceId = localStorage.getItem("spaceId");
    if (localStorage.getItem("spaceId") === null) {
        $("#popup-add-space-title").val("Add Space");
        $("#popup-btn-add-space").text("Add Space");
    } else {
        $("#popup-add-space-title").val("Update Space");
        $("#popup-btn-add-space").text("Update Space");

        $("#popup-btn-add-space").attr("id", localStorage.getItem("spaceId"));
        $("#popup-space-name").val(localStorage.getItem('space-name'));
        $("#popup-space-type").val(localStorage.getItem('space-type'));
        $("#popup-space-rate").val(localStorage.getItem('space-hour-rate'));
        $("#popup-space-postcode").val(localStorage.getItem('space-postcode'));
        $("#popup-space-address").val(localStorage.getItem('space-address'));
        $("#popup-space-latitude").val(localStorage.getItem('space-latitude'));
        $("#popup-space-longitude").val(localStorage.getItem('space-longitude'));
        $("#popup-space-description").val(localStorage.getItem('space-description'));
    }

    $("#btn-cancel").click(function() {
        window.location = "/spare_park/owner/owner.php";
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
            $.ajax({ url: "/spare_park/owner/add_space_action.php",
                type: 'POST',
                data: jQuery.param(data),
                context: document.body,
                success: function(response) {
                    console.log("Space added status:" + response.status);
                    if (response.status === "success") {
                        console.log("New space added!, id:" + response.id);
                        console.log("New space added!, log:" + response.log);
                        $("#popup-add-space").hide();
                    } else {
                        console.log("Adding space failed!");
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log("Add space error!");
                }
            });
        }
    });
    
}
//Work with owner layout