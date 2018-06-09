$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.username);
  });

  $(".submitList").on("click", "#submitBtn", function() {
    event.preventDefault();
    //takes data from selected items and stores to /api/savedPlaces
  });
});
