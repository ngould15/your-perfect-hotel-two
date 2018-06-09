var express = require("express");
var router = express.Router();

var place = require("../models/place");
// var savedplace = require("../public/js/project.js");


//add new place to list
router.post("/api/places_of_interest", function (req, res) {
        console.log("POST - CONTROLLER WORKING " + req.user.username);
        place.createPlacesWhere(
            ["user", "city", "state", "country", "lat", "lng", "category", "recommendation"],
            [req.user.username, req.body.city, req.body.state, req.body.country, req.body.lat, req.body.lng, req.body.category, req.body.recommendation],
            function (result) {
                res.json({ id: result.insertId });
            }
        );
});

//pull cities for favorites dropdown
router.get("/api/places_of_interest", function(req, res) {
    // console.log("GET FAVORITES - CONTROLLER WORKING");
    // console.log(req.body);
    var user = req.user.username;

    place.selectDistinctCitiesWhere(user, function(data) {
        // console.log(data);
        // console.log("GET CITIES request DONE");

        res.json(data);

    });
});


// pull saved places list
router.get("/api/places_of_interest/:city", function (req, res) {
    console.log("GET - CONTROLLER WORKING");
    console.log(req.body);
    var user = req.user.username;
    var city = req.params.city;
    console.log(city)
    place.selectPlacesWhere(user, city, function (data) {
        
        // console.log(hbsObject);
        res.json(data);
        console.log("GET request for list DONE");
    }
    );
});


//delete city from saved list - NEED TO TEST
router.delete("/api/places_of_interest/:id", function (req, res) {
    console.log("DELETE - CONTROLLER WORKING");
    
    var selectedID = req.params.id; //we will need to capture and store the the id of the selected item using jquery and AJAX post in our project.js file
    console.log(selectedID);

    place.deletePlacesWhere(selectedID, function (result) {
    if (result.affectedRows == 0) {
    // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
    } else {
        res.status(200).end();
    }
});
});





// }
// // Export routes for server.js to use.

module.exports = router;