const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});

// Menu overlay
  
const menuIcon = document.querySelector('.overlay-trigger');
const overlay = document.querySelector('.overlay');
const mobilenav = document.querySelector('.nav');
const overlayClose = document.querySelector('.overlay-close');
const overlayCircle = document.querySelector('.overlay-circle');
const body = document.querySelector("body");

// Toggle the 'show' class on the overlay when the menu icon is clicked

function toggleMenu(){
  if(screen.width < 751){
    overlay.classList.toggle('show');
    mobilenav.classList.toggle('show');
    body.classList.toggle("mobile-nav-open");
    overlayCircle.classList.remove('show');
  } 
}

menuIcon.addEventListener('click', function(){
  toggleMenu();
});

// Close the overlay when the close button is clicked
overlayClose.addEventListener('click', function () {
  overlay.classList.remove('show');
  overlayCircle.classList.toggle('show');
});

// Changing the nav style on scroll
$(document).on("scroll", function () {
    if ($(window).scrollTop() > 120) {
      $(".nav").addClass("nav-grad");
    } else {
      $(".nav").removeClass("nav-grad");
    }
  });
  
  // Rotating logo
  $(document).on("scroll", function () {
    var rotationSpeed = 1.5;
    var scrollPosition = $(window).scrollTop();
    var documentHeight = $(document).height();
    var rotationAngle = (scrollPosition / documentHeight) * 360 * rotationSpeed;
    rotationAngle = Math.min(rotationAngle, 360);
  
    $(".logo").css("transform", "rotateY(" + rotationAngle + "deg)");
  });
  