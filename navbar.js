$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
          $("nav").css("background" , "black");
        }
  
        else{
            $("nav").css("background" , "transparent");  	
        }
    })
})