$(document).ready(function(){
    $('[data-bs-toggle="tooltip"]').tooltip();
    $(".scroll").click(function(){
        var gato = this.hash
        $("html, body").animate({
            scrollTop: $(gato).offset().top - 70
        },800)
    })
    $(".card-title").on("dblclick change", function(){
        $(this).css({
            "color":"red"
        })
    });
})