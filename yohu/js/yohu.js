$(function(){
	$(".nav-bar li").hover(function(){
		$(this).addClass("cur");
		$(this).find(".nav-panel").show();
	},function(){
		$(this).find(".nav-panel").hide();
		$(this).removeClass("cur");
	});

	$("#btnBox .before").click(function(){
		$("#recommend-1").toggle();
		$("#recommend-2").toggle();
	});

	$("#btnBox .next").click(function(){
		$("#recommend-1").toggle();
		$("#recommend-2").toggle();
	});
	

});

