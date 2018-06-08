// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: {devoured : 1}
    }).then(
      function() {
        console.log("changed burger to devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".burger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    // debugger;

    var newBurger = {
      name: $("#burgerInput").val().trim(),
      devour: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
