alert("aaa");

(function(a){
	a.fn.jdSlide=function(k){
		var p=a.extend({
			width:null,height:null,pics:[],index:0,type:"num",current:"cur",delay1:100,delay2:5000
		}
		,k||{});
		var i=this;
		var g,f,d,h=0,e=true,b=true;
		var n=p.pics.length;

		var o=function(){
			var q="<ul class='focus-img' style='position:absolute;top:0;left:0;'><li><a onclick=getSource('"+p.pics[0]['caption']+"','首焦大1','"+p.pics[0]['column']+"'); href='"+p.pics[0]['href']+"' target='_blank'><img src='"+p.pics[0]['src']+"' width='"+p.width+"' height='"+p.height+"' /></a></li></ul>";
			i.css({
				position:"relative"
			}).html(q);
			i.find("ul").css({
				width:n*p.width+"px",height:p.height+"px"
			});
			a(function(){
				c()
			})
		};
		o();
		var j=function(){
			var s=[];
			s.push("<div id='_smallPic' class='focus-bottom'><ul class='clear'>");
			var r;
			var q;
			var smallNum = 1;
			for(var t=0;t<n;t++){
				r=(t==p.index)?p.current:"";
				switch(p.type){
					case "num":
                        q = '<img src="'+p.pics[t]['imagesmall']+'"/>';
					    break;
					case "string":
                        q=p.pics[t]['alt'];
					    break;
                    case"image":
                        q="<img src='"+p.pics[t].breviary+"' />";
					default:
                        break;
				}
				s.push("<li class='"+r+"'>");
				s.push(q);
				s.push("<a onclick=getSource('"+p.pics[t]['caption']+"','首焦小"+smallNum+"','"+p.pics[t]['column']+"'); href='"+p.pics[t]['href']+"' target='_blank'>&nbsp;</a></li>");
				smallNum++;
			}
			s.push("</ul></div>");
			$('#focus-top2').after(s.join(""));
			var x=[];
            x.push('<span class="button-switch clear"><a href="javascript:void(0)" id="goback" class="left rgbc"><span class="ifont">&lt;</span></a><a href="javascript:void(0)" id="forward" class="right"><span class="ifont rgbc">&gt;</span></a></span>');
			i.append(x.join(""));
			i.find("#goback").bind("mouseover",function(){
				b=false;
				clearTimeout(g);
				clearTimeout(d)
			}).bind("click",function(){
				var u=p.index-1;
				if(u<0){
					u=t-1
				};
				l(u)
			}).bind("mouseleave",function(){
				b=true;
			});
			i.find("#forward").bind("mouseover",function(){
				b=false;
				clearTimeout(g);
				clearTimeout(d)
			}).bind("click",function(){
				var u=p.index+1;
				l(u)
			}).bind("mouseleave",function(){
				b=true;
			});
			$('#_smallPic').find("li").bind("mouseover",function(){
				b=false;
				clearTimeout(g);
				clearTimeout(d);
				var u=$('#_smallPic').find("li").index(this);
				if(p.index==u){
					return
				}
				else{
					d=setInterval(function(){
						if(e){
							l(u)
						}
					}
					,p.delay1)
				}
			}).bind("mouseleave",function(){
				b=true;
				clearTimeout(g);
				clearTimeout(d);
				g=setTimeout(function(){
					l(p.index+1,true)
				}
				,p.delay2)
			});
			i.bind("mouseover",function(){
				$("#slide .o-control").show()
			}).bind("mouseleave",function(){
				$("#slide .o-control").hide()
			})
		};
		var l=function(r,q){
			if(r==n){
				r=0
			}
			f=setTimeout(function(){
				$('#_smallPic').find("li").eq(p.index).removeClass(p.current);
				$('#_smallPic').find("li").eq(r).addClass(p.current);
				m(r,q)
			}
			,20)
		};
		var m=function(u,q){
			var s=parseInt(h);
			var v=Math.abs(s+p.index*p.width);
			var t=Math.abs(u-p.index)*p.width;
			var r=Math.ceil((t-v)/4);
			if(v==t){
				clearTimeout(f);
				if(q){
					p.index++;
					if(p.index==n){
						p.index=0
					}
				}
				else{
					p.index=u
				}
				e=true;
				if(e&&b){
					clearTimeout(g);
					g=setTimeout(function(){
						l(p.index+1,true)
					}
					,p.delay2)
				}
			}
			else{
				if(p.index<u){
					h=s-r;
					i.find("ul").css({
						left:h+"px"
					})
				}
				else{
					h=s+r;
					i.find("ul").css({
						left:h+"px"
					})
				}
				e=false;
				f=setTimeout(function(){
					m(u,q)
				}
				,20)
			}
		};
		var c=function(){
			var q=[];
			var bigNum = 2;
			for(var r=1;r<n;r++){
				q.push("<li><a href='");
				q.push(p.pics[r]['href']);
				q.push("' target='_blank' onclick=getSource('"+p.pics[r]['caption']+"','首焦大"+bigNum+"','"+p.pics[r]['column']+"');><img src='");
				q.push(p.pics[r]['src']);
				q.push("' width='");
				q.push(p.width);
				q.push("' height='");
				q.push(p.height);
				q.push("' /></a></li>");
				bigNum++;
			}
			i.find("ul").append(q.join(""));
			g=setTimeout(function(){
				l(p.index+1,true)
			}
			,p.delay2);
			if(p['type']){
				j()
			}
		}
	}
})(jQuery);