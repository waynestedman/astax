$('#ingredientsDesc').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '#ingredientsSlider'
  });
  $('#ingredientsSlider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '#ingredientsDesc',
    dots: false,
    centerMode: true,
    centerPadding: '60px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      }
    ]
  });
