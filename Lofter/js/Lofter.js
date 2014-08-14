$(function(){
	



	$("#ZC").click(function(){
		$(".tittle").removeClass("curr");
		$(this).addClass("curr");
		$("#newReg").css("display","block");
		$("#newLogin").css("display","none");
		$("#newApp").css("display","none");

	});
	$("#DL").click(function(){
		$(".tittle").removeClass("curr");
		$(this).addClass("curr");
		$("#newReg").css("display","none");
		$("#newLogin").css("display","block");
		$("#newApp").css("display","none");

	});
	$("#XZ").click(function(){
		$(".tittle").removeClass("curr");
		$(this).addClass("curr");
		$("#newReg").css("display","none");
		$("#newLogin").css("display","none");
		$("#newApp").css("display","block");

	});






});