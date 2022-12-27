
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  loopAdditionalSlides : 1,

  touchRatio: 0,//드래그 금지
  
  autoplay: {
    delay: 4000,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable : true,
  },

  spaceBetween: 100,    // 슬라이드 사이 여백
  // slidesPerView : 'auto', //

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

//  AOS 스크립트 시작
AOS.init();




