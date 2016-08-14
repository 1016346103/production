window.onload=function(){
	var oNav1=document.getElementById('nav-static')
	var oNav2=document.getElementById('nav-move')
	var aNav1=oNav1.getElementsByTagName('li')
	var aNav2=oNav2.getElementsByTagName('li')
	var aA=oNav2.getElementsByTagName('a')
	for(var i=0;i<aNav1.length;i++){
		aNav2[i].onmouseover=function(){
			this.style.opacity=1
			move(this,'height',100,function(){})
		}
		aNav2[i].onmouseout=function(){
			move(this,'height',0,function (){}
		)
		}	
	}
	////
	var iBanner_out=document.getElementById('banner')
	var iBanner=document.getElementById('banner1')
	var aBanner=iBanner.getElementsByTagName('li')
	var iBanner_width=2.4*innerWidth
	var aBanner_width=parseInt(iBanner_width/6)
	var iBanner_select=document.getElementById('banner_select')
	var aBanner_select=iBanner_select.getElementsByTagName('li')
	iBanner_out.style.width=aBanner_width*2+'px'
	iBanner.style.width=aBanner_width*6+'px'

	for(var i=0;i<aBanner.length;i++){
		aBanner[i].style.width=aBanner_width+'px'		
	}
	iBanner.onmouseover=function(){clearInterval(timer1)}
	iBanner.onmouseout=function(){
			
			timer1=setInterval(banner_move,2000)

	}

	//////
	var timer1=null;
	var ii=0	;
	clearInterval(timer1);
	banner_move()
	timer1=setInterval(banner_move,2000)	
	for(var i=0;i<aBanner_select.length;i++){
		aBanner_select[i].index=i
		aBanner_select[i].onmouseover=function(){
			clearInterval(timer1)
			move(iBanner,'left',-2*aBanner_width*this.index)
			for(var i=0;i<aBanner_select.length;i++){
				aBanner_select[i].style.background='#e0e0e0'
			}
			aBanner_select[this.index].style.background='yellow'
			ii=this.index
		}
		aBanner_select[i].onmouseout=function(){
			timer1=setInterval(banner_move,2000)	
		}		
	}

	function banner_move(){
			move(iBanner,'left',-2*aBanner_width)
			if(ii==aBanner.length-3){
				ii=0;	
				move(iBanner,'left',-2*aBanner_width*(ii++))	
				banner_seleect_bgcoloor()
				}
			else{
				move(iBanner,'left',-2*aBanner_width*(ii++))
				banner_seleect_bgcoloor()
			}
		}	
	function banner_seleect_bgcoloor(){
		for(var i=0;i<aBanner_select.length;i++){
			aBanner_select[i].style.background='#e0e0e0'
		}
			aBanner_select[ii-1].style.background='yellow'
		}	
	///下面是'main',用jq

	//$('#display_slide').children().children().attr('src','img/1.jpg')
	//$('#display_slide').find('img').css('border','2px solid light')
	var wi=0
	$('#display_slide').children().each(function(){
		$('#display_slide').css('width',210*$('#display_slide li').length)
		//if(oW-$(this).index()*210<0){alert($(this).index())}
	})
	//上一张、下一张
	$('#display_l,#display_r').mouseenter(function(){
		if(!$(this).is(":animated")){
			$(this).fadeTo(300,1)
		}
		
	})
	$('#display_r,#display_l').mouseleave(function(){
		if(!$(this).is(":animated")){
			$(this).fadeTo(300,0.5)
		}
	})	
	//开始动了
	//$(this).index()
	var oLeft=0
	$('#display_l').click(function(){
		oLeft=$('#display_slide').offset().left
		$('#display_slide').css('left',oLeft-310)
		if(oLeft+$('#display_slide').outerWidth(true)-300<=$('#display_fix').width()){
			$('#display_slide').animate({left:'-460'},600)		
		}
		
	})
	$('#display_r').click(function(){
		oLeft=$('#display_slide').offset().left
		$('#display_slide').css('left',oLeft+100)
		if(oLeft>=0){
			$('#display_slide').animate({left:'0'},600)			
		}

	})	
	///pop层	
	$(window).scroll(function(){
		var scrollTop=0
		scrollTop=$(document).scrollTop()	
		$('#display_pop').css('top',scrollTop)	
	})
	$('#close').click(function(){
			$('#display_pop').css('display','none')
	})

	
	$('#display_slide').delegate('li img','click',function(ev){
		ev.stopPropagation()
		$('#display_pop').css('display','block')
		src=$(this).attr('src')
		$('#display_pop img').attr('src',src)
		$('#display_pop img').click(function(e){
			$('#display_pop').css('display','block')
			e.stopPropagation()
		})
		$(document).click(function(){
			$('#display_pop').css('display','none')
		})	
	})
	$('#display li').mouseenter(function(){
		$(this).children('h3').css('display','block')
		if(!$(this).children('h3').is(":animated")){
			$(this).children('h3').animate({height:'30'})		
		}
	})

	$('#display li').mouseleave(function(){
			$(this).children('h3').animate({height:'0'},400,function(){
				$(this).css('display','none')
			})
		
	})
/*	$('#professor').delegate('div','click',function(){
		$('#professor div').each(function(){
			$(this).css('background','yellow')
			$(this).css('height','200')
			$(this).css('width','200')
			$(this).css('transform','scale(1)')
		})
		$(this).css('background','red')
		$(this).css('height','400')
		$(this).css('width','400')
		$(this).css('transform','scale(2)')
	})*/
/*		var z_index=0
		$('#professor').delegate('div','click',function(){
			z_index++
		$('#professor div').each(function(){
			$(this).css('background','yellow')
			$(this).css('transform','scale(1)')
		
		})
		$(this).css('background','red')
		$(this).css('transform','scale(2)')
		$(this).css('z-index',z_index)
	})*/
	var z_index=1
	$('#professor div div').each(function(){
		$(this).mouseenter(function(){
			if($(this).index()!=7){
				$(this).append('<div class="append_word">Jack<br/>On the Insert tab, the galleries include items that are designed to coordinate with the overall look of your document.  </div>')
				$(this).mouseleave(function(){
					$(this).css('transform','scale(1)')
					$('.append_word').detach()
					
				})
			}
		})
	})
			
	$('#professor_box').delegate('div','click',function(){
		$('.append_word').css('display','none')
		if($(this).index()!=7){
		$('#professor_box div').each(function(){
			$(this).css('transform','scale(1)')
		})
		$(this).css('z-index',z_index++)
		$(this).css({transform:'scale(2)'})	
		}
	})
	$('footer li a').mouseenter(function(){
		$(this).css('color','black')
	})
	$('footer li a').mouseleave(function(){
			var that=$(this)
		$(this).css('color','#c0c0c0')
		setTimeout(function(){
			that.css('color','white')
		},200)
	})
	//侧边栏
	var on=1
	$('#side_close').click(function(ev){
		ev.stopPropagation()
		var oHeight=$('#side').outerHeight()
		if(on){
			$('#side').animate({width:'18px'})
			$('#side').children().not(this).animate({opacity:'0'},400,function(event){
				$(this).click(function(){
					return false
				})
			})
			on=0
		}
		else{
			$('#side').children().not(this).animate({opacity:'1'})		
			$('#side').animate({width:'100px'})
			on=1
		}
	})
	
	
	$('#back_top').click(function(){
		$("html,body").animate({scrollTop:'0'})
	})



}