	function md(){
		var oBox=document.getElementById('box');
		var oUl=oBox.children[0];
		var aLi=oUl.children;
		var oOl=oBox.children[1];
		var aSpan=document.getElementsByTagName('span');
		
		oUl.style.width=aLi.length*aLi[0].offsetWidth+'px';	
		
		var iNow=0;
		next();
		function next(){
			for(var i=0;i<aSpan.length;i++){
				aSpan[i].style.width=0;
			}
			move(aSpan[iNow],{width:60},{complete:function(){
				iNow++;
				if(iNow==aLi.length)iNow=0;
				move(oUl,{left:-iNow*aLi[0].offsetWidth},{complete:next});	
			}});
		}
	}		
