function getStyle(obj,attr){return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr]}
function move(obj,attr,dir,tar,endFn){
	clearInterval(obj.move)
	obj.move=setInterval(function(){
	var oW=parseInt(getStyle(obj,attr))
	speed=oW+dir
	if(speed>=tar&&dir>0||speed<tar&&dir<0){speed=tar
	}	
	obj.style[attr]=speed+'px'
	if(speed==tar){
	clearInterval(obj.move)}
	endFn&&endFn()
	},30)
	}
/*结合addEventListener、removeEventListener，添加、删除事件，格式：document.getElementById("myBtn").addEventListener("click", handler, false);
document.getElementById("myBtn").removeEventListener("click", handler, false);*/
function handler() {
  console.log(this);
}
function shake(obj,attr,endFn){
	clearInterval(obj.shake)
	var arr=[18,-18,16,-16,13,-13,11,-11,9,-9,7,-7,5,-5,2,-2,0]
	var num=0
	obj.shake=setInterval(function(){
	obj.style[attr]=arr[num]+'px'
	num++
	if(num==arr.length){clearInterval(obj.shake)
	endFn&&endFn()
	}
	},50)
}
function move(obj,attr,iTarget,fn){
	clearInterval(obj.timer)

	obj.timer=setInterval(
		function(){
			if(attr=='opacity'){
				var iCur=parseInt(parseFloat(getStyle(obj,attr)*100))
				var iSpeed=(iTarget*100-iCur)/8		
				iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed)
				iCur+=iSpeed
				if(iCur==iTarget*100){
					clearInterval(obj.timer)
					if(fn){fn()}
				}	
				else{
					obj.style[attr]=iCur/100
				}
			}
			else{
				var iCur=parseInt(getStyle(obj,attr))
				var iSpeed=(iTarget-iCur)/4
				iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed)	
				iCur+=iSpeed
				if(iCur==iTarget){
					clearInterval(obj.timer)
						if(fn)fn()
				}
				else{
					obj.style[attr]=iCur+'px'
				}							
			}
		},30)
	
	
}	
function addSong(){
var song = document.getElementsByTagName("bgsound");

song[0].src='music\click.wav'

}

function $(id) {
	return document.getElementById(id)
}