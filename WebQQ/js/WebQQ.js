$(function(){
	$("#talk").click(function(){
		$(this).find(".icon-talk").css({"background-image":'url("./css/images/tab_icon_conversation_selected.png")'});

	});
	$("#contact").click(function(){
		
		$(this).find(".icon-contact").css({"background-image":'url("./css/images/tab_icon_contact_selected.png")'});
		
	});
	$("#discover").click(function(){
		
		$(this).find(".icon-discover").css({"background-image":'url("./css/images/tab_icon_plugin_selected.png")'});
		
	});
	$("#setting").click(function(){
		
		$(this).find(".icon-setting").css({"background-image":'url("./css/images/tab_icon_setup_selected.png")'});
	});
});