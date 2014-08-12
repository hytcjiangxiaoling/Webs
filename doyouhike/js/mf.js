$(function(){

	$(".flashControl").hover(function(){
		currIndex= $(this).attr("picIndex");
		showFlashImage();
	},function(){

	});
	$("#flash").hover(function(){
		clearInterval(timeHandle);
	},function(){
		timeHandle=setInterval("showFlashImage()",3000);
	});
	timeHandle=setInterval("showFlashImage()",3000);


	$(".nav li").hover(function(){
		$(this).find(".tittle").next().show();
	},function(){
		$(this).find(".tittle").next().hide();
	});



});
var timeHandle;
var currIndex=2;
function showFlashImage(){
	var curImg=$("#controlSpan"+currIndex).attr("imgurl");
	$("#flash").css("background-image",'url("'+ curImg +'")');
	$(".flashControl").removeClass("currentSpan");
	$("#controlSpan" + currIndex).addClass("currentSpan");
	currIndex++;
	if(currIndex==5){
		currIndex=1;
	}
}

