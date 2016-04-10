// JavaScript Document
function addWheel(obj,fn){
	function fnWheel(ev)
	{
		var oEvent=ev || event;
		var bDown=true; //ture 向下  false 向上
		if(oEvent.wheelDelta)
		{
			if(oEvent.wheelDelta>0)
			{
				bDown=false;
			}else{
				bDown=true;	
			}
		}else{
			if(oEvent.detail<0)
			{
				bDown=false;
			}else{
				bDown=true;	
			}
		}
		fn(bDown);
		
		obj.preventDefault&&obj.preventDefault();
		return false;
	}
	
	if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1)
	{
		document.addEventListener('DOMMouseScroll',fnWheel,false);	
	}else{
		document.onmousewheel=fnWheel;
	}
}