$(document).ready(function() {
  $("#animals").submit(function(event) {
    var animal = $("#animal").val();

    if (animal === Snakes) {
      $('#snakes').show();
    } else if (animal === Turtles) {
      $('#turtles').show();
    } else {
      $('#insects').show();
    }

    event.preventDefault();
  });
});
