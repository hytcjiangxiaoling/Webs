$(function(){	

		 /*更换背景图片*/
		  
		  var index=2;
		  $("#ctrl-Left").click(function(){

		    if (index==1) {
		      index=14;
		      $(".bgAllImg").css("background-image","url('images/"+index+".jpg')");
		    }
		    else{
		      index--;
		      $(".bgAllImg").css("background-image","url('images/"+index+".jpg')");
		      
		    }
		  });

		  $("#ctrl-Right").click(function(){		    
		    if (index==14) {
		      index=1;
		      $(".bgAllImg").css("background-image","url('images/"+index+".jpg')");
		    }
		    else{		     
		      index++;
		      $(".bgAllImg").css("background-image","url('images/"+index+".jpg')");
		      
		    }
		  });

	$("#talk").click(function(){
		$(".icon-talk").css({"background-image":'url("./css/images/tab_icon_conversation_selected.png")'});
		$(".icon-contact").css({"background-image":'url("./css/images/tab_icon_contact.png")'});
		$(".icon-discover").css({"background-image":'url("./css/images/tab_icon_plugin.png")'});
		$(".icon-setting").css({"background-image":'url("./css/images/tab_icon_setup.png")'});
		$(".foot-nav li").removeClass("nav-selected");
		$(this).addClass("nav-selected");
		$(".panel").hide();
		$("#panel-1").show();
		
	});
	$("#contact").click(function(){
		
		$(".icon-talk").css({"background-image":'url("./css/images/tab_icon_conversation.png")'});
		$(".icon-contact").css({"background-image":'url("./css/images/tab_icon_contact_selected.png")'});
		$(".icon-discover").css({"background-image":'url("./css/images/tab_icon_plugin.png")'});
		$(".icon-setting").css({"background-image":'url("./css/images/tab_icon_setup.png")'});
		$(".foot-nav li").removeClass("nav-selected");
		$(this).addClass("nav-selected");
		$(".panel").hide();
		$("#panel-2").show();
	});
	$("#discover").click(function(){
		
		$(".icon-talk").css({"background-image":'url("./css/images/tab_icon_conversation.png")'});
		$(".icon-contact").css({"background-image":'url("./css/images/tab_icon_contact.png")'});
		$(".icon-discover").css({"background-image":'url("./css/images/tab_icon_plugin_selected.png")'});
		$(".icon-setting").css({"background-image":'url("./css/images/tab_icon_setup.png")'});
		$(".foot-nav li").removeClass("nav-selected");
		$(this).addClass("nav-selected");
		$(".panel").hide();
		$("#panel-3").show();
	});
	$("#setting").click(function(){
		
		$(".icon-talk").css({"background-image":'url("./css/images/tab_icon_conversation.png")'});
		$(".icon-contact").css({"background-image":'url("./css/images/tab_icon_contact.png")'});
		$(".icon-discover").css({"background-image":'url("./css/images/tab_icon_plugin.png")'});
		$(".icon-setting").css({"background-image":'url("./css/images/tab_icon_setup_selected.png")'});
		$(".foot-nav li").removeClass("nav-selected");
		$(this).addClass("nav-selected");
		$(".panel").hide();
		$("#panel-4").show();
	});
	$(".friend").click(function(){
		$(".memberTab li").removeClass("active");
		$(".friend").addClass("active");
		$("#haoyouList").show();
		$("#qunList").hide();
		$("#zuList").hide();
	});
	$(".group").click(function(){
		$(".memberTab li").removeClass("active");
		$(".group").addClass("active");
		$("#haoyouList").hide();
		$("#qunList").show();
		$("#zuList").hide();
	});
	$(".discuss").click(function(){
		$(".memberTab li").removeClass("active");
		$(".discuss").addClass("active");
		$("#haoyouList").hide();
		$("#qunList").hide();
		$("#zuList").show();
	});

	$(".groupTittle").click(function(){		
		$(this).next().toggle();
	});


	

	
});