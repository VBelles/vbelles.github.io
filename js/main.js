$(document).ready(function () {

    $("#toggleableContent").find("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 56
            }, 300, function () {
                window.location.hash = hash;
            });
        }
    });

    $('.carousel').carousel({
        interval: 3000
    });

});
