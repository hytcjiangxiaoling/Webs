$(function(){

	$(".housePic").hover(function(){
		$(this).find("img").css("opacity","0.5");
		$(this).find(".picto").css("display","block");
	},function(){
		$(this).find("img").css("opacity","1");
		$(this).find(".picto").css("display","none");
	});

	$(".columnPic-0").hover(function(){
		$(this).find("img").css("opacity","1");
		$(this).find(".picto").css("display","block");
	},function(){
		$(this).find("img").css("opacity","0.5");
		$(this).find(".picto").css("display","none");
	});

	$(".columnPic-1").hover(function(){
		$(this).find("img").css("opacity","1");
		$(this).find(".picto").css("display","block");
	},function(){
		$(this).find("img").css("opacity","0.5");
		$(this).find(".picto").css("display","none");
	});
	
});