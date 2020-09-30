var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.sloder-button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  }
})
