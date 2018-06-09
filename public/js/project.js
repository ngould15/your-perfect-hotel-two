var map;
var locationChosen;
var geocoder;
var service;
var infowindow;
var recommendationCounter = 0;
var numRecommendations;
var queryURL;

//Load map when the page is fisrt loaded
function initMap() {

    var latlng = new google.maps.LatLng(40.7128, - 74.0060);
    var mapOptions = {
        zoom: 12,
        center: latlng,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#523735"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#c9b2a6"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#dcd2be"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ae9e90"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#93817c"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.government",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#a5b076"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#447530"
                    }
                ]
            },
            {
                "featureType": "poi.place_of_worship",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.sports_complex",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fdfcf8"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f8c967"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#e9bc62"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e98d58"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#db8555"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#806b63"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8f7d77"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#b9d3c2"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#92998d"
                    }
                ]
            }
        ]
    }
    geocoder = new google.maps.Geocoder()
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    //Start geocode function & fourSquare API request once button is clicked
    $("#location").on("click", function () {
        geocodeAddress(geocoder, map)


        var locationChosen = $("#locationSelected").val().trim();
        var clientID = "Y0THHOXVAO3E2J32CKEOXSGYSZ2ACS4NZU5J4ABSYVOS5I50";
        var clientSecret = "JZGTVKXP4H3E4IROULCOUJR4KBOXRY24TCZ4QS0DILORD3RI";
        var venues;

        queryURL = "https://api.foursquare.com/v2/venues/explore?near=" + locationChosen + "&section=topPicks&v=20180408&sortByDistance=1&venuePhotos=1&client_id=" + clientID + "&client_secret=" + clientSecret + "&categoryId="

        //Added this part to create the results squares depending on the number of selected variables



        $("#recSearch").on("click", function () {
            $("#results").empty();
            var categories = [];
            var categoriesName = [];

            $(".check:checked").each(function () {
                categories.push($(this).val());
                categoriesName.push($(this).attr("name"));
            })

            var groups = [];
            var requests = [];
            var numChoices = $("#selectedNumber :selected").val();
            numChoices = parseInt(numChoices)

            for (var g = 0; g < categories.length; g++) {

                var _queryURL = queryURL + categories[g]
                console.log(_queryURL)

                requests.push(
                    $.ajax({
                        url: _queryURL,
                        method: 'GET',
                        success: function (result) {
                            // numChoices = $("#selectedNumber :selected").val();
                            // numChoices = parseInt(numChoices)
                            for (var i = 0; i < numChoices; i++) {
                                groups.push(result.response.groups[0].items[i])
                            }
                        }
                    })
                )
            }

            $.when.apply($, requests).done(function () {
                console.log(groups)
                $("#recommend").removeClass("hidden")

                for (var q = 0; q < categories.length; q++) {

                    var categ = $("<div>");
                    categ.addClass("category");
                    categ.html("<div><p>" + categoriesName[q] + "</p></div>");
                    var newRow = $("<div>");
                    newRow.addClass("row")

                    for (var i = numChoices * q; i < numChoices * (q + 1); i++) {

                        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

                        var square = $("<div>");
                        square.addClass("col-xs-6 col-md-4");

                        var information = $("<div>");
                        information.addClass("thumbnail");
                        information.attr('id', "rec-" + i);

                        var checkbox = $("<div>")
                        checkbox.addClass("checkbox")


                        var checkboxOne = $("<label>")
                        checkboxOne.html("<input type='checkbox' class = 'checkboxSavePlace' name='" + categoriesName[q] + "'" + " value=" + i + ">Select to save place")

                        checkbox.append(checkboxOne)
                        information.append(checkbox)

                        if (groups[i].venue.url != undefined) {
                            var url = groups[i].venue.url
                            $(information).append("<a href=" + url + " target=_blank>" + groups[i].venue.name + "<a>");
                        }
                        else {
                            $(information).append("<p><strong>" + groups[i].venue.name + "</strong></p>");
                        }

                        if (groups[i].venue.rating != undefined) {
                            $(information).append("<p>Rating: " + groups[i].venue.rating + "</p>");
                        }

                        // if (groups[i].tips[0].text != undefined) {
                        //     $(information).append("<p>Top Review: " + groups[i].tips[0].text + "</p>");
                        // }

                        $(information).append("<p><strong>Map Label: " + labels[i] + "<strong></p>");

                        square.append(information);
                        categ.append(square)
                        $("#results").append(categ)

                    };

                    $("#results").append(newRow);

                    for (j = 0; j < groups.length; j++) {
                        createMarkerFourSquare(groups[j].venue, j)
                    }
                }

                var button = $("<button>");
                button.addClass("btn btn-default");
                button.attr("id", "saveLocation")
                button.attr("type", "button");
                button.text(" Save Locations")


                $("#results").append(button);

                $("#results").on("click", '#saveLocation', function (event) {
                    // Make sure to preventDefault on a submit event.
                    event.preventDefault();
                    console.log(groups)
                    var savedPlaces = [];
                    var category = [];

    
                    $(".checkboxSavePlace:checked").each(function () {
                        savedPlaces.push($(this).val());
                        category.push($(this).attr("name"));

                    })
    
                    for (var r = 0; r < savedPlaces.length; r++) {
                        
                        var place = parseInt(savedPlaces[r]);
    
                        var newLocation = {
                            city: groups[place].venue.location.city,
                            state: groups[place].venue.location.state,
                            country: groups[place].venue.location.country,
                            lat: groups[place].venue.location.lat,
                            lng: groups[place].venue.location.lng,
                            category: category[r],
                            recommendation: groups[place].venue.name
                        };


                        //show feedback in modal
                        $('#feedbackModal').modal('show');
                            
                         
                            // Send the POST request.
                            $.ajax("/api/places_of_interest", {
                                type: "POST",
                                data: newLocation
                            }).then(
                                function() {
                                    console.log("created new place");
                                });

                                $("#closeModal").on("click", function() {
                                    // Reload the page to get the updated list
                                    location.reload();
                                })
                            
                    }
                });
            })
        })
    });
}


//transform location into latlng
function geocodeAddress(geocoder, resultsMap) {
    address = $("#locationSelected").val().trim();
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            console.log(results[0].geometry.location)
            var marker = new google.maps.Marker({
                map: resultsMap,
            });

            //call for lodging locations
            infowindow = new google.maps.InfoWindow();
            service = new google.maps.places.PlacesService(map);
            service.textSearch({
                location: results[0].geometry.location,
                radius: 10000,
                type: ['lodging']
            }, detailsCallback);

        } else {
            console.log('Geocode was not successful for the following reason: ' + status);
        }

    });
}

//create entries in the map
function detailsCallback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var request = {
                placeId: results[i].place_id
            };

            service.getDetails(request, placeDetailsCallback);

            function placeDetailsCallback(place, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    createMarker(place);
                }
            }

        }
    }

}

function createMarkerFourSquare(venue, j) {

    var latitude = parseFloat(venue.location.lat);
    var longitude = parseFloat(venue.location.lng);
    var newPosition = { lat: latitude, lng: longitude }
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if (j < 5) {
        var marker = new google.maps.Marker({
            map: map,
            position: newPosition,
            title: venue.name,
            label: labels[j]
        });
    }
    else {
        var marker = new google.maps.Marker({
            map: map,
            position: newPosition,
            title: venue.name,
        });
    }

    google.maps.event.addListener(marker, 'click', function () {

        var locationName = "<p class = popUp><strong> " + venue.name + "</strong></p>";
        var locationAddress = "<p class = popUp>Address: " + venue.location.address + "</br>";
        //var locationPhone = "Phone Number: " + groups.venue.name + "</p>";

        infowindow.setContent(locationName + locationAddress);
        infowindow.open(map, this);
    });

}

//add markers in the map
function createMarker(place) {
    var icons = "assets/img/hotel-icon.png"

    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name,
        icon: icons,
    });

    //expand marker when clicked
    google.maps.event.addListener(marker, 'click', function () {
        if (place.name != undefined) {
            var hotelName = "<p class = popUp><strong> " + place.name + "</strong></p>";
        }
        else {
            var hotelName = "";
        }

        if (place.formatted_address != undefined) {
            var hotelAddress = "<p class = popUp>Hotel Address: " + place.formatted_address + "</br>";
        }
        else {
            var hotelAddress = "";
        }

        if (place.international_phone_number != undefined) {
            var hotelPhone = "Hotel Phone Number: " + place.international_phone_number + "</br>";
        }
        else {
            var hotelPhone = "";
        }

        if (place.rating != undefined) {
            var hotelRating = "Hotel Rating: " + place.rating + " out of 5</p>";
        }
        else {
            var hotelRating = "</p>";
        }


        if (place.website != undefined) {
            var bookHotel = " <a class = popUp href=" + place.website + " target ='_blank'> Book Online</a></p>";
        }
        else {
            var bookHotel = "";
        }

        infowindow.setContent(hotelName + hotelAddress + hotelPhone + hotelRating + bookHotel);
        infowindow.open(map, this);
    });
}

