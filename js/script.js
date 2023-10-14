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
