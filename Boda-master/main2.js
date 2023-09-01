$(function () {

    $(".botoncito").click(function () {
        $(".Regalo").fadeOut();
        $(".datosBancarios").fadeIn();
    })
    $(".datosBancarios").click(function () {
        $(".datosBancarios").fadeOut("slow");
        $(".Regalo").fadeIn("slow");
    })
})