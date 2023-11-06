$(document).ready(function () {
  const slides = $(".item").toArray();
  let prevIndex = slideIndex = 0;

  $(slides).each(function(index){
    $(".slider__dots").append('<button class="_dot">'+ (index) +'</button>')
  })
  const dotsArr = $('._dot').toArray();

  $(slides[slideIndex]).addClass('_active');
  $(dotsArr[slideIndex]).addClass('_checked');

  function slide(current, prev) {
    $(slides[current]).addClass('_active').fadeIn('slow');
    $(slides[prev]).removeClass('_active');
    $(dotsArr[current]).addClass('_checked');
    $(dotsArr[prev]).removeClass('_checked');
  }
  $('._dot').on("click", function (index) {
    if(prevIndex != $(this).index()){
      slide($(this).index(), prevIndex);
      console.log($(this).index() + " prev: " + prevIndex)

      prevIndex = $(this).index();
    }
  });

  $(".slider__nav-next-button").on("click", function () {
    slideIndex = (prevIndex + 1) % slides.length;
    console.log(slideIndex + " prev: " + prevIndex)
    slide(slideIndex, prevIndex);
    prevIndex = (prevIndex + 1) % slides.length;;
  });
});

// $(document).ready(function () {
//   const benefitSlides = $(".benefit-slider-item");
//   const benefitNext = $(".benefit-next");
//   const benefitPrev = $(".benefit-prev");
//   const benefitDots = $(".benefit_slider-dot");
//   let benefitCount = 0;

//   $(benefitSlides[0]).addClass("_active");
//   $(benefitDots[0]).addClass("_checked");

//   function slide(current, slides, dots) {
//     slides.each(function (index) {
//       if (index == current) {
//         $(this).addClass("_active").fadeIn("slow");
//       } else {
//         $(this).removeClass("_active");
//       }
//     });
//     dots.each(function (index) {
//       if (index == current) {
//         $(this).addClass("_checked");
//       } else {
//         $(this).removeClass("_checked");
//       }
//     });
//   }
//   benefitDots.each(function (index) {
//     $(this).on("click", function () {
//       slide(index, benefitSlides, benefitDots);
//     });
//   });

//   benefitNext.on("click", function () {
//     benefitCount++;
//     if (benefitCount >= benefitSlides.length) {
//       benefitCount = 0;
//     }
//     slide(benefitCount, benefitSlides, benefitDots);
//   });

//   benefitPrev.on("click", function () {
//     benefitCount--;
//     if (benefitCount < 0) {
//       benefitCount = benefitSlides.length - 1;
//     }
//     slide(benefitCount, benefitSlides, benefitDots);
//   });

//   const keyPlayerNext = $(".key-player__nav-next-button");
//   const keyPlayerPrev = $(".key-player__nav-prev-button");
//   const keyPlayerSlider = $(".key-player__items");
//   const keyPlayerContainer = $(".key-player");
//   // const slideWidth = 365;

//   // !!!! Нужно получать

//   const threshold = 100;
//   let dragStart, dragEnd;

//   keyPlayerContainer.on("mousedown", function (event) {
//     if (keyPlayerSlider.hasClass("transition")) return;
//     dragStart = event.pageX;
//     // console.log(slideWidth);
//     keyPlayerContainer.on("mousemove", function (event) {
//       dragEnd = event.pageX;
//       keyPlayerSlider.css("transform", "translateX(" + dragPos() + "px)");
//     });
//     $(document).on("mouseup", function () {
//       if (dragPos() > threshold) {
//         return shiftSlide(1);
//       }
//       if (dragPos() < -threshold) {
//         return shiftSlide(-1);
//       }
//       shiftSlide(0);
//       // console.log(dragPos)
//     });
//   });

//   function dragPos() {
//     return dragEnd - dragStart;
//   }

//   function shiftSlide(direction) {
//     if (keyPlayerSlider.hasClass("transition")) return;
//     const slideWidth = $(".key-player__items-item")[0].offsetWidth;
//     console.log(slideWidth)
//     $(document).off("mouseup");
//     keyPlayerContainer.off("mousemove");
//     keyPlayerSlider
//       .addClass("transition")
//       .css("transform", "translateX(" + direction * slideWidth + "px)");
//     setTimeout(function () {
//       if (direction === 1) {
//         $(".key-player__items-item:first").before(
//           $(".key-player__items-item:last")
//         );
//       } else if (direction === -1) {
//         $(".key-player__items-item:last").after(
//           $(".key-player__items-item:first")
//         );
//       }
//       keyPlayerSlider.removeClass("transition");
//       keyPlayerSlider.css("transform", "translateX(0px)");
//     }, 700);
//   }

//   keyPlayerNext.on("click", function () {
//     shiftSlide(-1);
//     // alert('01')
//   });

//   keyPlayerPrev.on("click", function () {
//     shiftSlide(1);
//   });

//   const clientsSaySlides = $(".clients-say__slider__item");
//   const clientsSayNext = $(".client-say__nav-next-button");
//   const clientsSayPrev = $(".client-say__nav-prev-button");
//   const clientsSayDots = $(".clients-say_slider-dot");
//   let clientSayCount = 0;

//   $(clientsSaySlides[0]).addClass("_active");
//   $(clientsSayDots[0]).addClass("_checked");

//   clientsSayNext.on("click", function () {
//     clientSayCount++;
//     if (clientSayCount >= clientsSaySlides.length) {
//       clientSayCount = 0;
//     }
//     slide(clientSayCount, clientsSaySlides, clientsSayDots);
//   });

//   clientsSayPrev.on("click", function () {
//     clientSayCount--;
//     if (clientSayCount < 0) {
//       clientSayCount = clientsSaySlides.length - 1;
//     }
//     slide(clientSayCount, clientsSaySlides, clientsSayDots);
//   });

//   clientsSayDots.each(function (index) {
//     $(this).on("click", function () {
//       slide(index, clientsSaySlides, clientsSayDots);
//     });
//   });
// });
