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
    
    qr.makeCode(uri);
});