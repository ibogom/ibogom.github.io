// JavaScript Document
$(document).ready(function() {
	$("div.logo_wrapper").hover(function(){
		$(this).children("div.logo_img").addClass("flip");
	}, function(){
		$(this).children("div.logo_img").removeClass("flip");
	});
});