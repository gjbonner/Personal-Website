//contact validation

let email = document.getElementById('email')
let message = document.getElementById('msg')
let submit = document.getElementById('btn')

btn.addEventListener('click',function(){
    
    if(email.innerText === '' || message.innerText === ''){
        btn.preventDefault()
    }
})

message.addEventListener('keydown', function(e){
    console.log(e.target.value)
})

//smooth scroll

$(document).ready(function () {

    $('.nav').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
            location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });

});


$(document).ready(function () {

    $('.start-btn').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
            location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });

});

//top arrow

if ($('.back-to-top').length) {
    var scrollTrigger = 1100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                    console.log('its running')
                $('.back-to-top').addClass('show');
            } else {
                $('.back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#wrapper').offset().top
        }, 700);
    });
}
