$(window).scroll(function(){

  if($(window).scrollTop() > 0) {
    $('.navbar').css('background','#212529');
  } else{
    $('.navbar').css('background','transparant');
  }

});

//REVIEWS
$('.reviews-sider').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  items:1,
  smartSpeed:600,
})

//BLOG
$('.blog-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  smartSpeed:600,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

