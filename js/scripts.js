$(document).ready(function() {
  $("#animal").submit(function(event) {
    var animal = $("#choice").val();

    if (animal === 'Snakes') {
      $('#snakes').show();
      $('#turtles, #insects').hide();
    } else if (animal === 'Turtles') {
      $('#turtles').show();
      $('#snakes, #insects').hide();
    } else {
      $('#insects').show();
      $('#snakes, #turtles').hide();
    }

    event.preventDefault();
  });
});
