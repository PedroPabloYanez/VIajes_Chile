$(document).ready(function(){
    $(".scroll").click(function(){
        var gato = this.hash
        $("html, body").animate({
            scrollTop: $(gato).offset().top - 70
        },800)
    })
})