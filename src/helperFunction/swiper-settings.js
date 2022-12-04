export let params = (slide) => {
    return {
      spaceBetween: 30,
      slidesPerView:slide,
      loop : true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true
      }
    }
}

