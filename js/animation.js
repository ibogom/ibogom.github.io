$(document).ready(function() {
    $(window).scroll(function(){
	if ($(window).width()<1000)
	{
		if ($(this).scrollTop() >= 600) 
		{
		$("div.content").addClass("mobile_screen");
		$("div.content").css({"left":"7.5%"});
		$("div.content").css({"width":"90%"});
		$("div.navigation").addClass("animate");
			if($("div.small_menu").hasClass("display"))
			{
			$("div.menu_site_wrapper").addClass("hide");
			} 
			else 
			{
			$("div.menu_site_wrapper").removeClass("hide");
			$("div.s_menu").removeClass("n_active");
			}
		}
		else
		{
			$("div.content").removeClass("mobile_screen");
			$("div.content").css({"left":"0%"});
			$("div.content").css({"width":"97.5%"});
			$("div.small_menu").removeClass("display");
			$("div.navigation").removeClass("animate");
			$("div.menu_site_wrapper").removeClass("hide");
		}
	}
	else if($(window).width()<748)
	{
		if ($(this).scrollTop() >= 200) 
		{
		$("div.content").addClass("mobile_screen");
		$(".content div").css({"left":"-55px"});
		$("div.content").css({"left":"7.5%"});
		$("div.content").css({"width":"90%"});
		$("div.navigation").addClass("animate");
			if($("div.small_menu").hasClass("display"))
			{
			$("div.menu_site_wrapper").addClass("hide");
			} 
			else 
			{
			$("div.menu_site_wrapper").removeClass("hide");
			$("div.s_menu").removeClass("n_active");
			}
		}
		else
		{
			$("div.content div").removeClass("mobile_screen");
			$("div.content").css({"left":"0%"});
			$("div.content").css({"width":"97.5%"});
			$(".content div").css({"left":"0px"});
			$("div.small_menu").removeClass("display");
			$("div.navigation").removeClass("animate");
			$("div.menu_site_wrapper").removeClass("hide");

		}
	}
	else if($(window).width()>1000)
	{
		if ($(this).scrollTop() >= 400) 
		{
		$("div.content").addClass("mobile_screen");
		$("div.content").css({"left":"3.8%"});
		$("div.content").css({"width":"96.3%"});
		$("div.navigation").addClass("animate");
			if($("div.small_menu").hasClass("display"))
			{
			$("div.menu_site_wrapper").addClass("hide");
			} 
			else 
			{
			$("div.menu_site_wrapper").removeClass("hide");
			$("div.s_menu").removeClass("n_active");
			}
		}
		else
		{
			$("div.content").removeClass("mobile_screen");
			$("div.content").css({"left":"1.25%"});
			$("div.content").css({"width":"97.5%"});
			$("div.small_menu").removeClass("display");
			$("div.navigation").removeClass("animate");
			$("div.menu_site_wrapper").removeClass("hide");
		}
	}
	});
	$("div.s_menu").click(function(){
		if($("div.small_menu").hasClass("display")){
		$("div.small_menu").removeClass("display");
		$("div.s_menu").removeClass("n_active");
		$("div.menu_site_wrapper").removeClass("hide");
		} else {
		$("div.small_menu").addClass("display");
		$("div.s_menu").addClass("n_active");
		$("div.menu_site_wrapper").addClass("hide");
		}
	});
});