$(window). scroll(function(){

    if($(window).scrollTop() >0){
        $('navbar').css ('background', 'red');
    }
        else{
        $('navbar').css ('background', 'transparent');
    }
});

//reviews
$('.reviews-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    smartspeed:600,
})
//blog
$('.blog-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    smartspeed:600,
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