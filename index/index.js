$(function(){
	$(".webLogo").hover(function(){
		$(this).css({			
			"box-shadow":"1px 1px 10px rgb(170, 195, 220)"
		});
	},function(){
		$(this).css({
			"box-shadow":""
		});
	});

	//显示时间
	var curT=new Date();
	showDigit();
});


function showDigit(){
	var ct=new Date();
	var year=ct.getYear();
	var month=ct.getMonth()+1;
	var date=ct.getDate();
	var hour=ct.getHours();
	var mi=ct.getMinutes();
	var s=ct.getSeconds();

	if(year<314){
		year=year+1900;
	}
	var y1=Math.floor(year/1000);
	var y2=Math.floor((year%1000)/100);
	var y3=Math.floor((year%100)/10);
	var y4=Math.floor(year%10);
	var m1=Math.floor(month/10);
	var m2=Math.floor(month%10);
	var d1=Math.floor(date/10);
	var d2=Math.floor(date%10);
	var h1=Math.floor(hour/10);
	var h2=Math.floor(hour%10);
	var mi1=Math.floor(mi/10);
	var mi2=Math.floor(mi%10);
	var s1=Math.floor(s/10);
	var s2=Math.floor(s%10);

	$("#y1").css("background-position","0px -"+y1*30+"px");
	$("#y2").css("background-position","0px -"+y2*30+"px");
	$("#y3").css("background-position","0px -"+y3*30+"px");
	$("#y4").css("background-position","0px -"+y4*30+"px");

	$("#m1").css("background-position","0px -"+m1*30+"px");
	$("#m2").css("background-position","0px -"+m2*30+"px");

	$("#d1").css("background-position","0px -"+d1*30+"px");
	$("#d2").css("background-position","0px -"+d2*30+"px");

	$("#h1").css("background-position","0px -"+h1*30+"px");
	$("#h2").css("background-position","0px -"+h2*30+"px");

	$("#mi1").css("background-position","0px -"+mi1*30+"px");
	$("#mi2").css("background-position","0px -"+mi2*30+"px");

	$("#s1").css("background-position","0px -"+s1*30+"px");
	$("#s2").css("background-position","0px -"+s2*30+"px");

	setTimeout('showDigit()',1000);
}