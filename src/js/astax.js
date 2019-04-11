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
    slidesToShow: 2,
    slidesToScroll: 2,
    swipe: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  }); // testimonials slider
  $('#commentsSlider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    // infinite: true,
    autoplaySpeed: 4000,
    fade: true,
    speed: 1200,
    cssEase: 'ease-in-out'
   }); // comments slider
}); //doc ready

const hello = (name) => {
    return `hello ${name}`;
};
