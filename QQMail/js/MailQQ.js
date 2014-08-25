$(function(){


// 菜单选中
	$(".fdul li").click(function(){
		$(".fdul").find(".fn").addClass("fm");
		$(".fdul").find(".fn").removeClass("fn");
		$(this).removeClass("fm");
		$(this).addClass("fn");
	});
// 标记为
	$(".bjw").hover(function(){
		$(".bjw ul").show();
	},function(){
		$(".bjw ul").hide();
	});
//全选
	$(".check-all-box").click(function(){
		var choose=$(this).attr("choose");
		if(choose=="true"){
			$(".checkbox").each(function(){
				$(this).prop("checked",true);
			});		
			$(this).attr("choose",false);
		}
		else{
			$(".checkbox").each(function(){
				$(this).prop("checked",false);
			});	
			$(this).attr("choose",true);
		}
	});
//标记已读未读
	$(".bj-yd").click(function(){
		$(".checkbox").each(function(){
			if($(this).is(":checked")){
				$(this).parent().parent().removeClass("weidu");
			}
		});

	});
	$(".bj-wd").click(function(){
		$(".checkbox").each(function(){
			if($(this).is(":checked")){
				$(this).parent().parent().addClass("weidu");
			}
		});
	});
	$(".qbbjyd").click(function(){
		//alert("dd");
		$(".checkbox").each(function(){
			
				$(this).parent().parent().removeClass("weidu");
			
		});
	});


//广告邮件
	$(".bj-gg").click(function(){
//星标		
	});
	$(".bj-xb").click(function(){
		$(".checkbox").each(function(){
			if($(this).is(":checked")){
				$(this).parent().parent().find(".star").addClass("xb");
				$(this).parent().parent().find(".star").attr("star",true);
			}
		});
	});
	$(".bj-qx").click(function(){
		$(".checkbox").each(function(){
			if($(this).is(":checked")){
				$(this).parent().parent().find(".star").removeClass("xb");
				$(this).parent().parent().find(".star").attr("star",false);
			}
		});
		
	});
	$(".star").click(function(){
		var star=$(this).attr("star");
		$(this).toggleClass("xb");
		if(star=="true"){
			$(this).attr("star",false);
		}
		else{
			$(this).attr("star",true);
		}
		

	});
	$(".bj-xj").click(function(){
		
	});





});