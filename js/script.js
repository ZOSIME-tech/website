$(document).ready(function () {
  $("nav").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
        $(".burger__line").addClass("white-bg-bar");
        document.querySelector(".nav__brand-image").src = "img/logo/logo-white.png";
      } else {
        $("nav").removeClass("sticky");
        $(".burger__line").removeClass("white-bg-bar");
        document.querySelector(".nav__brand-image").src = "img/logo/logo-colored-filled.png";
      }
    },
    {
      offset: "-1%",
    }
  );
});

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav__items");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    document.querySelector("nav").classList.toggle("white-bg");
    document.querySelector(".burger__line").classList.toggle("burger__line--toggle");
  });
};

navSlide();
