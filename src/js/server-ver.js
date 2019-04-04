<script type="text/javascript" xml="space">// <![CDATA[
require([
  'jquery',
  'slick'
  ], function ($) {
jQuery(document).ready(function(){
jQuery('#ingredientsDesc').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 2000,
    fade: true,
    cssEase: 'ease-in-out',
    pauseOnHover: true
});
  jQuery('#commentsSlider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    speed: 1200,
    cssEase: 'ease-in-out'
   }); // comments slider
});
});
// ]]></script>
