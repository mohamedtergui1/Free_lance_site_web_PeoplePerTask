$(document).ready(function () {
    if (window.innerWidth < 1023) {
        $("#navbar").hide(0);
    }

    $("#hamberger_btn").click(function () {
        $("#navbar").slideToggle(500);
    })

    function test_nav_status() {
        if (window.innerWidth >= 1023) {
            $("#navbar").show(0);
        }

        setTimeout(test_nav_status, 500)
    }
    test_nav_status();

    /* Sections navbar */
    $("#sectionsNavbar button").click(() => {
        $("#sectionsNavbar").toggleClass("-translate-x-full");
        $("#sectionsNavbar button svg").toggleClass("rotate-90");
        $(".scrollDownToSection").click((e) => {
            $("#sectionsNavbar button svg").toggleClass("rotate-90");
            $('#sectionsNavbar').addClass('-translate-x-full');
        });
    })


    /* Categories section */

});