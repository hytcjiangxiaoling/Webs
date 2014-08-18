$(function(){

	 /*更换背景图片*/
		  
		  var index=2;
		  $("#ctrl-Left").click(function(){

		    if (index==1) {
		      index=2;
		      $("#backImg").css("background-image","url('./css/images/"+index+".jpg')");
		    }
		    else{
		      index--;
		      $("#backImg").css("background-image","url('./css/images/"+index+".jpg')");
		      
		    }
		  });

		  $("#ctrl-Right").click(function(){		    
		    if (index==2) {
		      index=1;
		      $("#backImg").css("background-image","url('./css/images/"+index+".jpg')");
		    }
		    else{
		      
		      index++;
		      $("#backImg").css("background-image","url('./css/images/"+index+".jpg')");
		      
		    }
		  });	



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