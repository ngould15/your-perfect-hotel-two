$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  function createDropDown() {
    $.ajax({
      url: '/api/places_of_interest',
      method: 'GET'
    }).then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {

        savedCities = $("<option class='location'>")
        savedCities.append(data[i].city);
        savedCities.attr("value", data[i].city);
        $("#savedList").append(savedCities);

      }

    });
  }

  createDropDown()

});

// takes user's selected city from the dropdown and passes it to controller for the selectPlacesWhere GET request
$("#submitPlace").on("click", function () {
  event.preventDefault();
  $("#tableRows").empty();
  var selectedCity = $(".location:checked").val();
  console.log(selectedCity);
  $.ajax({
    url: "/api/places_of_interest/" + selectedCity,
    type: "GET",
    // data: selectedList
  }).then(function (data) {
    console.log("pulled your list");
    // **** NEED TO REDIRECT USER TO PAGE OF SAVED PLACES
    $("#table").removeClass("hidden")
    $("#mapHolder").removeClass("hidden")


    for (var i = 0; i < data.length; i++) {
      row = $("<tr>");

      rowDelete = $("<td>")
      rowDelete.html("<label><input type='checkbox' class = 'checkboxDelete' value='" + data[i].id + "'<label>");
      row.append(rowDelete);

      rowCountry = $("<td>");
      rowCountry.append(data[i].country);
      row.append(rowCountry);

      rowState = $("<td>");
      rowState.append(data[i].state);
      row.append(rowState);

      rowCity = $("<td>");
      rowCity.append(data[i].city);
      row.append(rowCity);

      rowCategory = $("<td>");
      rowCategory.append(data[i].category);
      row.append(rowCategory);

      rowRecommendation = $("<td>");
      rowRecommendation.append(data[i].recommendation);
      row.append(rowRecommendation);

      $("#tableRows").append(row)

      //Send location of saved places to map
      mapLocation = createMarkerFourSquare(data[i], i)
    }
    $("#formList").html("<input id='deletePlace' type='submit' value='Delete'>");


function initMap() {
          

          var latitude = parseFloat(data[1].lat);
          var longitude = parseFloat(data[1].lng);

          var latlng = new google.maps.LatLng(latitude, longitude);
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
          google.maps.event.trigger(map, 'resize');

        }


  })

  function createMarkerFourSquare(venue, j) {

        var latitude = parseFloat(venue.lat);
        var longitude = parseFloat(venue.lng);
        var newPosition = { lat: latitude, lng: longitude }
        
        var marker = new google.maps.Marker({
                map: map,
                position: newPosition,
                title: venue.recommendation,
        });
        map.setCenter(marker.getPosition());

        infowindow = new google.maps.InfoWindow();


        google.maps.event.addListener(marker, 'click', function () {

          var locationName = "<p class = popUp ><strong> " + venue.recommendation + "</strong></p>";
          var category = "<p class = popUp>" + venue.category + "</p>"

          infowindow.setContent(locationName + category);
          infowindow.open(map, this);

        });
      }

});




$("#formList").on("click", "#deletePlace", function (event) {
  console.log("GOOD");
  var deleteItems = [];

  $(".checkboxDelete:checked").each(function () {
    deleteItems.push($(this).val()); //(this).data("value");
    console.log(deleteItems);

  for (var j=0; j<deleteItems.length; j++) {

    var id = parseInt(deleteItems[j]);
    console.log(id);
    // Send the DELETE request.
    $.ajax("/api/places_of_interest/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted place: ", id);
        // Reload the page to get the updated list

      }
    )
  }
          location.reload();
})
});


