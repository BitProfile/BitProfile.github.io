var $window = $(window);
var $header = $("#header");
var $logo = $(".splashPage .logoSection");

function scrollTo(element, time){
    if(!time) time = 300;
    $('html, body').animate({
        scrollTop: $(element).offset().top
    }, time);
}

function initMenuRef(button, ref){
    $(button).click(function(){
        scrollTo(ref);
    });
}

function stickyTop() {
    //$header.toggleClass("scrolled1",($window.height()/2-$header.outerHeight()*2<=$window.scrollTop()));
    $header.toggleClass("scrolled",($window.height()-$header.outerHeight()<=$window.scrollTop()));
    $logo.toggleClass("scrolled",($window.height()-300<=$window.scrollTop()));
    $logo.css("margin-top",$window.scrollTop()/2);
}



$(document).ready(function(){
    var $donate = $("#donateETH");
    var uri = $donate.find(".txt").text();

    var qr = new QRCode($donate.find(".img").get(0), {
        width : 210,
        height : 210,
        colorDark: "#3E4E5A",
        colorLight: "rgba(255,255,255,0)",
        correctLevel : QRCode.CorrectLevel.M
    });
    
    $donate.find(".btn").on("click",function(){window.open("ethereum:"+uri);});

    stickyTop();
    qr.makeCode(uri);
    initMenuRef(".header .headLogo", "#splashPage");
    initMenuRef("#detailsNav", "#detailsPage");
    initMenuRef("#supportNav", "#supportPage");
});

$window.resize(function() {
    stickyTop();
});
$window.scroll(function() {
    stickyTop();
});


