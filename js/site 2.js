// Wrapper for loading on document load
$(document).ready(function () {

  // Scroll reveal enjoy
ScrollReveal().reveal('.enjoy', { delay: 200 });
ScrollReveal().reveal('.landscapes', { delay: 400 });
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

  // Scroll animations for project section
jQuery(function($) {
  var doAnimations = function() {
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height()/1.1 - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};

	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

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


// Scroll to

$(".logo").click(function () {
  $("html, body").animate({scrollTop: 0}, 1000);
});

$("#upArrow").click(function () {
  $("html, body").animate({scrollTop: 0}, 1000);
});

$(".button-1").click(function() {
  console.log("here");
  $('html, body').animate({
      scrollTop: $("#about-section-top").offset().top
  }, 2000);
});

$("#downArrow").click(function() {
  $('html, body').animate({
      scrollTop: $("#about-section-top").offset().top
  }, 2000);
});

$("#downArrow-1").click(function() {
  $('html, body').animate({
      scrollTop: $("#definition-section").offset().top
  }, 2000);
});
$("#downArrow-2").click(function() {
  $('html, body').animate({
      scrollTop: $("#ideation-section").offset().top
  }, 2000);
});
$("#downArrow-3").click(function() {
  $('html, body').animate({
      scrollTop: $("#prototyping-section").offset().top
  }, 2000);
});
$("#downArrow-4").click(function() {
  $('html, body').animate({
      scrollTop: $("#testing-section").offset().top
  }, 2000);
});
$("#downArrow-5").click(function() {
  $('html, body').animate({
      scrollTop: $("#learnings-section").offset().top
  }, 2000);
});


$("#user-research").click(function() {
  $('html, body').animate({
      scrollTop: $("#research-section").offset().top
  }, 1000);
});

$("#definition").click(function() {
  $('html, body').animate({
      scrollTop: $("#definition-section").offset().top
  }, 1300);
});


$("#ideation").click(function() {
  $('html, body').animate({
      scrollTop: $("#ideation-section").offset().top
  }, 1600);
});

$("#prototyping").click(function() {
  $('html, body').animate({
      scrollTop: $("#prototyping-section").offset().top
  }, 1900);
});
$("#testing").click(function() {
  $('html, body').animate({
      scrollTop: $("#testing-section").offset().top
  }, 2200);
});

$("#finallook").click(function() {
  $('html, body').animate({
      scrollTop: $("#learnings-section").offset().top
  }, 2500);
});

$("#about-link").click(function() {
  toggleMenu();
  $('html, body').animate({
      scrollTop: $("#about-section-top").offset().top
  }, 2000);
});

$("#case-studies").click(function() {
  toggleMenu();
  $('html, body').animate({
      scrollTop: $(".projects").offset().top
  }, 2000);
});

$("#resume").click(function() {
  toggleMenu();
  $('html, body').animate({
      scrollTop: $("body").offset().top
  }, 2000);
});

$("#lets-talk").click(function() {
  toggleMenu();
  $('html, body').animate({
      scrollTop: $(".letsTalk").offset().top
  }, 2500);
});

// Tools Ticker

var $tickerWrapper = $(".tickerwrapper");
var $list = $tickerWrapper.find("ul.list");
var $clonedList = $list.clone();
var listWidth = 10;

$list.find("li").each(function (i) {
    listWidth += $(this).outerWidth(true);
});

var endPos = $tickerWrapper.width() - listWidth;

$list.add($clonedList).css({
    "width" : listWidth + "px"
});

$clonedList.addClass("cloned").appendTo($tickerWrapper);

// TimelineMax
var infinite = new TimelineMax({repeat: -1, paused: true});
var time = 40;

infinite
    .fromTo($list, time, {rotation: 0.01, x: 0}, {force3D: true, x: -listWidth, ease: Linear.easeNone}, 0)
    .fromTo($clonedList, time, {rotation: 0.01, x: listWidth}, {force3D: true, x: 0, ease: Linear.easeNone}, 0)
    .set($list, {force3D: true, rotation: 0.01, x: listWidth})
    .to($clonedList, time, {force3D: true, rotation: 0.01, x: -listWidth, ease: Linear.easeNone}, time)
    .to($list, time, {force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone}, time)
    .progress(1).progress(0)
    .play();

// Pause/Play
$tickerWrapper.on("mouseenter", function(){
    infinite.pause();
}).on("mouseleave", function(){
    infinite.play();
});

// Adjust the initial position of the cloned list
infinite.eventCallback("onStart", function() {
    $clonedList.css({x: listWidth});
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// create the scrollSmoother before your scrollTriggers
ScrollSmoother.create({
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});