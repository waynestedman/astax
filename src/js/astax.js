$(document).ready(function(){
  $('#testimonialsSlider').slick({
    dots: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
    // fade: true,
    focusOnChange: true,
    speed: 1200,
    // cssEase: 'ease-in-out',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true
  }); // testimonials slider
  $('#ingredientsDesc').slick({
    // autoplay: true,
    // autoplaySpeed: 4000,
    fade: true,
    // cssEase: 'ease-in-out',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '#ingredientsSlider'
  });
  $('#ingredientsSlider').slick({
    // autoplay: true,
    // autoplaySpeed: 4000,
    // fade: true,
    // cssEase: 'ease-in-out',
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '#ingredientsDesc',
    dots: false,
    centerMode: true,
    centerPadding: '60px',
    focusOnSelect: true
  });
}); //doc ready

const hello = (name) => {
    return `hello ${name}`;
};
