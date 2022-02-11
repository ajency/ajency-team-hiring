(function($){

	/* enable active-state on iOS */
	document.addEventListener("touchstart", function() {},false);

	/* custom logo link */
	$(".title-area a").attr( 
		{target: "_blank",  href:"https://ajency.in/"}
	);

	/* toggle navigation menu */
	$('<div class="hamburger"><div class="line"></div><div class="line"></div></div>').insertAfter("header .title-area");

	$(".hamburger").click(function(){
		$(".genesis-responsive-menu").toggleClass("open-nav");
		$(".hamburger").toggleClass("close-icon");
	});
	$(".nav-primary .menu-item").click(function(){
		$(".genesis-responsive-menu").toggleClass("open-nav");
		$(".hamburger").toggleClass("close-icon");
	});

}(jQuery));