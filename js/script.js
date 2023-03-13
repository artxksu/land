// $("document").ready(function () {
//     $("#playpause img").click(function () {
//         if ($(this).attr("src") === "img/plate1.svg")
//             $(this).attr("src", "img/plate1js.svg");
//         else if ($(this).attr("src") === "img/plate1js.svg")
//             $(this).attr("src", "img/plate1.svg");
//     });
// });

jQuery(function ($) {
    $("#plate1").click(function () {
        $(this).hide();
    });
});