$(document).ready(function () {
  $("nav").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
        $(".nav").css("padding", "1.5rem 0");
      } else {
        $("nav").removeClass("sticky");
        $(".nav").css("padding", "3rem 0");
      }
    },
    {
      offset: "-4%",
    }
  );
});
