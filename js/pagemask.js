var $window = $(window);
var $header = $(".header");
var $logo = $(".homeLogo");

stickyTop();   // make sure sticky top is used if needed on first load

$window.resize(function() {
    stickyTop();
});
$window.scroll(function() {
    stickyTop();
});

function stickyTop() {
    var windowScrollAmount = $window.scrollTop()/$window.height();
        
	$logo.css("opacity",1-windowScrollAmount*2);
	$logo.css("top",50-windowScrollAmount*30+"%");
	
    $header.toggleClass("scrolled",(windowScrollAmount >= 0.4));
}