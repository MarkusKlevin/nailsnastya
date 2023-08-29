"use strict"

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets:true,
        // renderBullet: function (index, className) {
        // return '<span class ="'+ className +'">'+ (index +1) +' </span>'
        // }
      

    },
  
    // Navigation arrows
    navigation: {
      nextEl: '  .swiper-button-next ',
      prevEl: ' .swiper-button-prev',
    },

    slidesPerView:4.3,
    spaceBetween:30,
    centerSlides:true,
    loop: true,
    autoPlay: true,
    


autoplay:{
delay:1000,
disableOnInretaction:false,
pauseOnMouseEnter: true
},





  
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  
  
