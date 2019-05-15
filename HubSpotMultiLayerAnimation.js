// Sets the container height
$(window).resize(function() {
  var $height = $(".sog_animation-layer").css("padding-top");
  $(".sog_animation-container").css("height", $height);
}).resize();
