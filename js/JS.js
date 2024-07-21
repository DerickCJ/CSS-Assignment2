$(window).on("scroll", function () {
  if ($(this).scrollTop() > 100) {
    $("header").addClass("scrolledHeader");
    $(".mask").addClass("scrolledMask");
  } else {
    $("header").removeClass("scrolledHeader");
    $(".mask").removeClass("scrolledMask");
  }
});