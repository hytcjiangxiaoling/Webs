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


	// 添加聊天框
	chathtml();

	
});


function chathtml(){
	$(".chatA").click(function(){
		var cAname=$(this).attr("friendName");
		//var headerpic=$(this).find(".avatar").html();
		var isappear = $(this).attr("isappear");

		if(isappear=="yes")
		{
			$("chat-panel").show();
			// //$("#min" + talkid).hide();
			
			$(".chat-panel").css("z-index","10");
			$("friendName").css("z-index","12");
			return;
		}
		var chathtmlA="";

			chathtmlA +='				<div class="chat-panel">														';													
			chathtmlA +='					<div class="panel-header backColor">										';
			chathtmlA +='						<h1 class="chatName">'+ cAname +'</h1>															';
			chathtmlA +='						<button  class="min btn backColor"><span>－</span></button>		';
			chathtmlA +='						<button  class="close btn backColor"><span>ｘ</span></button>		';
			chathtmlA +='					</div>																		';

			chathtmlA +='					<div class="main-chat">														';
			chathtmlA +='						<div class="chat-container"></div>										';
			chathtmlA +='					</div>																		';

			chathtmlA +='						<div class="chat-footrt ">												';
			chathtmlA +='							<div class="chat-foot-content">										';
			chathtmlA +='								<div class="shuru backColor">									';
			chathtmlA +='									<div id="add-face-btn">										';
			chathtmlA +='										<span class="add-face-btn-icon"></span>					';
			chathtmlA +='									</div>														';
			chathtmlA +='									<div class="chat-textarea">									';
			chathtmlA +='										<textarea id="textarea"></textarea>						';
			chathtmlA +='									</div>														';
			chathtmlA +='									<button id="send-chat-btn">									';
			chathtmlA +='										<span class="btn-text">发送</span>						';
			chathtmlA +='									</button>													';
			chathtmlA +='								</div>															';
			chathtmlA +='								<div class="biaoqing"></div>									';
			chathtmlA +='							</div>																';
			chathtmlA +='						</div>																	';
			chathtmlA +='					</div>																		';
		
		$("#subContainer").append(chathtmlA);
		$(this).attr("isappear","yes");
		$(".chat-panel").css("z-index","10");
		$("friendName").css("z-index","12");


		//出现在随机的位置
		var randomleft= (Math.random()+2)*50;
		//alert(randomleft);
		var randomtop= (Math.random()+1)*50;
		//alert("left:"+randomleft);
		$("friendName").css({
			"left":randomleft+"px",
			"top":randomtop+"px"
			/*"left":"620px",
			"top":"80px"*/
		});

		//聊天框最上面
		$("friendName").click(function(){
			$(".chat-panel").css("z-index","10");
			$(this).css("z-index","12");
		});


		//关闭聊天框
		$(".close").click(function(){
			$(this).parent().parent().hide();
			
		});


		$(function() {
			$( ".chat-panel" ).draggable({ handle: ".panel-header",containment: "#subContainer", scroll: false  });
		});
		$(function() {
			 $( ".chat-panel" ).resizable();
		});

	});
}