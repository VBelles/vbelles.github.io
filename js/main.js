$(document).ready(function () {

    $("#toggleableContent").find("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 56
            }, 300, function(){
                window.location.hash = hash;
            });
        }
    });

    $('.carousel').carousel({
        interval: 3000
    });
    $('.carousel').on('click', function(event){
        console.log("wolol");
        event.preventDefault();
    });

    // var navOffset = $('.navbar').height();
    // navOffset = 56;
    // $('.navbar li a').click(function(event) {
    //     var href = $(this).attr('href');
    //     event.preventDefault();
    //     window.location.hash = href;
    //
    //     $(href)[0].scrollIntoView();
    //     window.scrollBy(0, -navOffset);
    //
    // });
});
