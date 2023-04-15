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
        $(".popup-add-space").show();
    });
    $(".icon-close-space").click(function() {
        $(".popup-add-space").hide();
    });
    $(".btn-add-space").click(function() {
        console.log("Call Add space API!");
        var spaceNameVal = $(".space-name").val();
        var spaceTypeVal = $(".space-type").val();
        var spaceRateVal = $(".space-rate").val();
        var spaceAddressVal = $(".space-address").val();
        var spacePostcodeVal = $(".space-postcode").val();
        var spaceLatitudeVal = $(".space-latitude").val();
        var spaceLongitudeVal = $(".space-longitude").val();
        var spaceDescriptionVal = $(".space-description").val();

        $.ajax({ url: "/spare_park/owner/add_space_action.php",
            type: 'POST',
            data: jQuery.param({name: spaceNameVal, 
                type: spaceTypeVal, 
                rate: spaceRateVal,
                address: spaceAddressVal,
                postcode: spacePostcodeVal,
                latitude: spaceLatitudeVal,
                longitude: spaceLongitudeVal,
                description: spaceDescriptionVal}),
            context: document.body,
            success: function(response) {
                console.log("space added status:" + response.status);
                if (response.status === "success") {
                    console.log("New spce added!");
                    $(".popup-add-space").hide();
                } else {
                    console.log("Adding space failed!");
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("Add space error!");
            }
        });
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
        console.log("space details with position:"+ itemPos + ", id:" + spaceId +" clicked!");
        
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
    
});

//Work with owner layout