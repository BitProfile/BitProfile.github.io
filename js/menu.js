function scrollTo(element, time){
	var top = ($(element).offset())?$(element).offset().top:0;
    if(!time) time = 300;
    $('html, body').animate({
        scrollTop: top
    }, time);
}

function initMenuRef(button, ref){
    $(button).click(function(){
        scrollTo(ref);
    });
}

$(document).ready(function(){
    initMenuRef(".mainNav #details", "#detailsPage");
    initMenuRef(".mainNav #get", "#getPage");
    initMenuRef(".mainNav #support", "#supportPage");
});

$(function() {

    var $el, leftPos, newWidth,
        $mainNav = $("#mainNav");
    
    $mainNav.append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");
	
	//var navItemLeft = $("#mainNav").position().left + $("#mainNav").width() + $("#mainNav").css("margin-left");
	//var navItemWidth = 0;
	/*
	}
	else
	{
		$activeNavProp.left = $("#mainNav .active a").position().left;
		$activeNavProp.width = $("#mainNav .active").width();
	}*/
    
    $magicLine
        .width(0)
        .css("left", $magicLine.position().left)
        //.data("origLeft", $magicLine.position().left)
        //.data("origWidth", $magicLine.width());
        
    $("#mainNav li a").hover(function() {
        $el = $(this);
		//$magicLine.width(0);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        $magicLine.stop().animate({
			opacity: 1,
            left: leftPos,
            width: newWidth
        },300);
    }, function() {
        $magicLine.stop().animate({
			opacity: 0,
            left: $el.position().left,// + $el.parent().width()/2, //$magicLine.data("origLeft"),
            width: $el.parent().width() //$magicLine.data("origWidth"),
        },200);    
    });
});