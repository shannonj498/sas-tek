$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 690) {
	    $(".navbar-fixed-top").css("background" , "rgba(0, 0, 0, 0.8)");
	  }

	  else{
		  $(".black").css("background" , "rgba(0, 0, 0, 0)");
	  }
  })
})
