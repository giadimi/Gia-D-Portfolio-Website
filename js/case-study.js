/** ------------- Slider script ------------ **/

/* swiper 1 */
var swiper = new Swiper('.swiper-1', {
  // pagination
  pagination: {
    el: '.swiper-pagination',
  },
  spaceBetween: 50,
  slidesPerView: 1,
  breakpoints: {
    750: {
      slidesPerView: 3,
    },
  },
  on: {
    resize: function enableOnlyMobile(swiper) {
      // Disable the slider when the window width is less than or equal to 749
      if (749 < window.innerWidth) {
        swiper.disable();
        swiper.el.classList.add('-non-slider');
      } else {
        swiper.enable();
        swiper.el.classList.remove('-non-slider');
      }
    },
  },
});
/* swiper 2 */
var swiper2 = new Swiper('.swiper-2', {
  //  pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 50,
  slidesPerView: 1,
});

/** ---------- Image zoom modal --------------- **/

var modal = document.getElementById('myModal');
// var img = document.getElementById('probImg');
var modalImg = document.getElementById('img01');
var modalImages = document.querySelectorAll(".imgZoom");
modalImages.forEach(img=>{
  img.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
  };
})
// var modalImg = document.getElementById('img01');
// img.onclick = function () {
//   modal.style.display = 'block';
//   modalImg.src = this.src;
// };
var span = document.getElementsByClassName('close')[0];
span.onclick = function () {
  modal.style.display = 'none';
};

$(window).resize(function () {
  var width = $(document).width();
  if (width < 750) {
    modal.style.display = 'none !important';
  }
});

/* ------- Prev / Next section button click ---------- */
$(function(){
    
  var pagePositon = 0,
      sectionsSeclector = 'section',
      $scrollItems = $(sectionsSeclector),
      offsetTolorence = 30,
      pageMaxPosition = $scrollItems.length - 1;
  
  //Map the sections:
  $scrollItems.each(function(index,ele) { $(ele).attr("debog",index).data("pos",index); });

  // Bind to scroll
  $(window).bind('scroll',upPos);
  
  //Move on click:
  $('#arrow a').click(function(e){
      if ($(this).hasClass('next') && pagePositon+1 <= pageMaxPosition) {
          pagePositon++;
          $('html, body').stop().animate({ 
                scrollTop: $scrollItems.eq(pagePositon).offset().top
          }, 1000);
      }
      if ($(this).hasClass('previous') && pagePositon-1 >= 0) {
          pagePositon--;
          $('html, body').stop().animate({ 
                scrollTop: $scrollItems.eq(pagePositon).offset().top
            }, 1000);
          return false;
      }
  });
  
  //Update position func:
  function upPos(){
     var fromTop = $(this).scrollTop();
     var $cur = null;
      $scrollItems.each(function(index,ele){
          if ($(ele).offset().top < fromTop + offsetTolorence) $cur = $(ele);
      });
     if ($cur != null && pagePositon != $cur.data('pos')) {
         pagePositon = $cur.data('pos');
     }                   
  }
  
});