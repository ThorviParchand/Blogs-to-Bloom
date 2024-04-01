//filter js
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".article-box").show("100");
        }
        else{
            $(".article-box")
            .not("." + value)
            .hide("100");
            $(".article-box")
            .filter("." + value)
            .show("100");
        }
    });
});

$(".filter-item").click(function (){
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
});








