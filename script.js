const swiper = new Swiper('.swiper', {
    slidesPerView: 5, 
    spaceBetween: 10, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true, 
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});


