
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 3000,
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


// 숫자 애니메이션
function numberCounter(target_frame, target_number, rate) {
  this.count = 0;
  this.diff = 0;
  this.target_count = parseInt(target_number);
  this.target_frame = document.getElementById(target_frame);
  this.timer = null;
  this.rate = 5;
  if (rate) this.rate = rate;
  this.counter();
};
numberCounter.prototype.counter = function() {
  var self = this;
  this.diff = this.target_count - this.count;

  if (this.diff > 0) {
    self.count += Math.ceil(this.diff / this.rate);
  }

  this.target_frame.innerHTML = this.formatNumber(this.count);

  if (this.count < this.target_count) {
    this.timer = setTimeout(function() {
      self.counter();
    }, 20);
  } else {
    clearTimeout(this.timer);
  }
};
numberCounter.prototype.formatNumber = function(num) {
  num += '';
  x = num.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
};


new numberCounter("counter4", 3539, 15);
new numberCounter("counter3", 4738, 15);
new numberCounter("counter2", 5752, 15);
new numberCounter("counter1", 4672, 15);

let totopEl = document.querySelector("#to-top")

window.addEventListener('scroll',function () {
  let value = window.scrollY;
  // console.log('scrollY', value)
   
  if (value>380) {
    totopEl.style.animation= 'disappear 1s ease-out'
    totopEl.style.diplay='block';
  }else{
      totopEl.style.animation='totop 1s ease-out';
  }
  
})

