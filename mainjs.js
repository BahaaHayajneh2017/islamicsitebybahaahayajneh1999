$('.headerslider').slick({
    dots: true,
  infinite: true,
 
  autoplay: false,
  autoplaySpeed: 1000,


  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button class="imgprev"><img src="img3/Layer 40 copy.png"></button>',
  nextArrow: '<button class="imgnext"><img src="img3/Layer 40 copy 2.png"></button>',
  });
  

  $('.slidermordeen').slick({
    
  dots: false,
  infinite: true,
 
  autoplay: true,
  autoplaySpeed: 3000,


  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<button class="slide-arrow prev-arrow">  <i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"> <i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      }

]
  });

  $('.partnerslider').slick({
    
    dots: false,
    infinite: true,
   
    autoplay: false,
    autoplaySpeed: 1000,
  
  
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button class="slide-arrow prev-arrow">  <i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"> <i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      }

]
    });