var $window = $(window);
var $header = $("#header");

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
    $header.toggleClass("scrolled",($window.height()-$header.outerHeight()<=$window.scrollTop()));
}



$(document).ready(function(){
    var $donate = $("#donateETH");
    var uri = "JdAkhvSaBRZSKVqatYE2Bd5aCZQU7kdg9j";

    var qr = new QRCode($donate.find(".img").get(0), {
        width : 210,
        height : 210,
        colorDark: "#3E4E5A",
        colorLight: "rgba(255,255,255,0)",
        correctLevel : QRCode.CorrectLevel.M
    });
    
    $donate.find(".txt").html(uri);
    $donate.find(".btn").on("click",function(){window.open("ethereum:"+uri);});

    stickyTop();
    qr.makeCode(uri);
    initMenuRef(".mainNav #details", "#detailsPage");
    initMenuRef(".mainNav #get", "#getPage");
    initMenuRef(".mainNav #support", "#supportPage");
});

$window.resize(function() {
    stickyTop();
});
$window.scroll(function() {
    stickyTop();
});


