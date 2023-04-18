$(document).ready(function() {
    
    $(".popup-add-space").hide();

    //Populate spaces
    $.ajax({ url: "/spare_park/owner/get_my_spaces.php",
            type: 'GET',
            context: document.body,
            success: function(spaceArray) {//spaceArray
                for (var i=0; i<spaceArray.length; i++) {
                    var space = spaceArray[i];
                    var typeSrc = "/spare_park/img/vehicle-car.png";
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
                    var spaceType = $("<img>")
                        .attr("class", "space-item-type")
                        .attr("src", typeSrc);
                    
                    var spaceName = $("<p>")
                        .attr("class", "space-name")
                        .append(space.name);
                    var spaceAddress = $("<p>")
                        .attr("class", "space-address")
                        .append(space.post_code);
                    var spaceDetail = $("<div>")
                        .attr("class", "space-detail")
                        .append(spaceName)
                        .append(spaceAddress);

                    var spaceId = '' + space.id;
                    var spaceDeleteIcon = $("<ion-icon>")
                        .attr("class", "btn-remove-space")
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
                        .append(spaceDetail)
                        .append(spaceDeleteIcon);
                        
                    //var item = $("<p>").append(spaceArray[i].name);
                    $("#my-spaces").append(item);
                }
                console.log("get spaces response:" + spaceArray);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("Get spaces error!, xhr.status:" . xhr.status);
            }
        });

    console.log("Owner js executed!");
    
    $("#btn-new-space").click(function() {
        console.log("btn-add-space is clicked!");
        $("#popup-add-space-title").text("Add Space");
        $(".btn-add-space").text("Add Space");
        $(".space-name").val("");
        $(".space-type").val("");
        $(".space-rate").val("");
        $(".space-postcode").val("");
        $(".space-address").val("");
        $(".space-latitude").val("");
        $(".space-longitude").val("");
        $(".space-description").val("");
        $(".popup-add-space").show();
    });

    $(".btn-update-space").click(function() {
        console.log("btn-update-space is clicked!");
        $("#popup-add-space-title").text("Update Space");
        $(".btn-add-space").text("Update Space");

        var spaceId = $(this).attr('id');
        console.log("setting id: " + spaceId);
        $(".btn-add-space").attr('id', spaceId);
        
        $(".space-name").val($(this).attr('space-name'));
        $(".space-type").val($(this).attr('space-type'));
        $(".space-rate").val($(this).attr('space-hour-rate'));
        $(".space-postcode").val($(this).attr('space-postcode'));
        $(".space-address").val($(this).attr('space-address'));
        $(".space-latitude").val($(this).attr('space-latitude'));
        $(".space-longitude").val($(this).attr('space-longitude'));
        $(".space-description").val($(this).attr('space-description'));

        $(".popup-add-space").show();
    });
    $(".icon-close-space").click(function() {
        $(".popup-add-space").hide();
    });
    $(".btn-add-space").click(function() {
        console.log("Call Add space API!");
        var spaceId = $(this).attr('id');

        if ($(".btn-add-space").text() === "Update Space") {
            addSpace(spaceId);
        } else {
            addSpace();
        }
    });

    $('#my-spaces').on('click', '.btn-remove-space', function() {
        var spaceId = $(this).attr('id');
        var itemPos = $(this).attr('position');
        console.log("btn-remove-space with position:"+ itemPos + ", id:" + spaceId +" clicked!");
        
        var spaceElement = $(this).parent();
        $.ajax({ url: "/spare_park/owner/remove_space_action.php",
            type: 'POST',
            data: jQuery.param({id: spaceId}),
            context: document.body,
            success: function(response) {
                console.log("space added status:" + response.status);
                if (response.status === "success") {
                    console.log("Space deleted!");
                    spaceElement.remove();
                    $(".popup-add-space").hide();
                } else {
                    console.log("Removing space failed!");
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("Remove space error!, xhr.status:" . xhr.status);
                //alert(xhr.status);
                //alert(thrownError);
            }
        });
    });

    $('#my-spaces').on('click', '.space-item', function() {
        var spaceId = $(this).attr('id');
        var itemPos = $(this).attr('position');
        var spaceName = $(this).attr('space-name');
        var spaceStatus = $(this).attr('space-status');
        var spaceType = $(this).attr('space-type');
        var spaceHourRate = $(this).attr('space-hour-rate');
        var spacePostcode = $(this).attr('space-postcode');
        var spaceAddress = $(this).attr('space-address');
        var spaceLatitude = $(this).attr('space-latitude');
        var spaceLongitude = $(this).attr('space-longitude');
        var spaceDescription = $(this).attr('space-description');
        
        //var spaceLatitude = -33.712206;
        //var spaceLongitude = 150.311941;
        console.log("space details with position:"+ itemPos + ", id:" + spaceId +" clicked!");
        var spaceMapUrl = "https://www.google.com/maps/@?api=1&map_action=map&center=" 
        + spaceLatitude + "%2C" + spaceLongitude + "&zoom=12&basemap=terrain";
        spaceMapUrl = "https://picsum.photos/500/300";
        $("#space-detail-map-image").attr("src", spaceMapUrl);

        $(".btn-update-space")
            .attr("id", spaceId)
            .attr("space-name", spaceName)
            .attr("space-type", spaceType)
            .attr("space-hour-rate", spaceHourRate)
            .attr("space-postcode", spacePostcode)
            .attr("space-address", spaceAddress)
            .attr("space-latitude", spaceLatitude)
            .attr("space-longitude", spaceLongitude)
            .attr("space-description", spaceDescription);
        $("#space-detail-name").text(spaceName);
        $("#space-detail-description").text(spaceDescription);
        $("#space-detail-address").text(spaceAddress);
        /*var spaceElement = $(this).parent();
        $.ajax({ url: "/spare_park/owner/get_space_action.php",
            type: 'POST',
            data: jQuery.param({id: spaceId}),
            context: document.body,
            success: function(response) {
                console.log("space added status:" + response.status);
                if (response.status === "success") {
                    console.log("Space deleted!");
                    spaceElement.remove();
                    $(".popup-add-space").hide();
                } else {
                    console.log("Removing space failed!");
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("Remove space error!, xhr.status:" . xhr.status);
                //alert(xhr.status);
                //alert(thrownError);
            }
        });*/
    });
    
});

function addSpace(id) {

    //$(function () {
        var form = $( "#form-add-space" );
        
        $('#form-add-space').submit(function () {
            form.validate();
            if(form.valid()) {
                //alert('the form is valid');
                //Update space api is not working
                var data = {
                    name: $(".space-name").val(), 
                    type: $(".space-type").val(), 
                    hour_rate: $(".space-rate").val(),
                    address: $(".space-address").val(),
                    postcode: $(".space-postcode").val(),
                    latitude: $(".space-latitude").val(),
                    longitude: $(".space-longitude").val(),
                    description: $(".space-description").val()
                };

                //input values contains old values

                if (id !== undefined) {
                    data['id'] = id;
                    console.log("Updating space!" + data);
                    console.log("Updating space! name:" + ($(".space-name").val()));
                }
                var postData = jQuery.param(data);
                $.ajax({ url: "/spare_park/owner/add_space_action.php",
                    type: 'POST',
                    data: postData,
                    context: document.body,
                    success: function(response) {
                        console.log("Space added status:" + response.status);
                        if (response.status === "success") {
                            console.log("New space added!, id:" + response.id);
                            console.log("New space added!, log:" + response.log);
                            //$(".popup-add-space").hide();
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
    //});

    
}
//Work with owner layout