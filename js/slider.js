const slick_prev = $('.btn_prev');
const slick_next = $('.btn_next');

$(".autoplay").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: slick_prev,
    nextArrow: slick_next,
    responsive: [

        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                arrows: false,
                infinite: true,
                dots: false
            }
        },
    ]
});

$(".slider-main").slick({
    dots: false,
    arrows: false,

    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    responsive: [

        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                arrows: false,
                infinite: true,
                dots: false
            }
        },
    ]
});