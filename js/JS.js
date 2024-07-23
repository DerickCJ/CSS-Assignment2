$(window).on("scroll", function () {
  if ($(this).scrollTop() > 60) {
    $("header").addClass("scrolledHeader");
    $(".mask").addClass("scrolledMask");
  } else {
    $("header").removeClass("scrolledHeader");
    $(".mask").removeClass("scrolledMask");
  }
});


// Slide up
function SlideUp() {
  var reveals = document.querySelectorAll(".slide-up");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", SlideUp);


// Slide right
function SlideRight() {
  var reveals = document.querySelectorAll(".slide-right");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", SlideRight);