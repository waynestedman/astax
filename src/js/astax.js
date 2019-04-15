$(document).ready(function(){
  $('#testimonialsSlider').slick({
    dots: false,
    // arrows: true,
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
    // responsive: [
    //   {
    //     breakpoint: 800,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true
    //     }
    //   }
    // ]
  }); // testimonials slider
  $('#ingredientsDesc').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '#ingredientsSlider'
  });
  $('#ingredientsSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '#ingredientsDesc',
    dots: false,
    focusOnSelect: true
  });
}); //doc ready

const hello = (name) => {
    return `hello ${name}`;
};
