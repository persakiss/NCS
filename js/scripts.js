
/// jQuery script, click method sets up an event handler that runs the attached function on click of the respective ID
$(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            // If the pause button is on, carousel is playing. On press, pause.
            $(".carousel").carousel("pause");
            // Change the button from pause to play
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            // Else, cycle the carousel (play), and switch buttons 
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});

/// Toggler script
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})