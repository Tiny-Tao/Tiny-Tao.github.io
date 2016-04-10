
	function picture(){
		var oBtn=document.getElementById('btn1');
		var oUl=document.getElementById('ul1');
		var aLi=oUl.children;
		
		var zIndex=1000;
		var aPos=[];
		function rndPos(){
			aPos.sort(function(){
				return Math.random()-0.5;	
			});
			
			for(var i=0; i<aLi.length; i++){
				doMove(aLi[i],aPos[aLi[i].index]);
			}
		}
		oBtn.onclick=rndPos;
		
		for(var i=0; i<aLi.length; i++){
			aPos[i]={left:aLi[i].offsetLeft, top:aLi[i].offsetTop};
		}
		function drag(obj){
			obj.onmousedown=function(ev){
				var oEvent=ev || event;
				var disX=oEvent.clientX-obj.offsetLeft;
				var disY=oEvent.clientY-obj.offsetTop;
				
				obj.style.zIndex=zIndex++;
				
				document.onmousemove=function(ev){
					var oEvent=ev || event;
					obj.style.left=oEvent.clientX-disX+'px';
					obj.style.top=oEvent.clientY-disY+'px';
					
					for(var i=0; i<aLi.length; i++){
						aLi[i].className='';
					}
					var oNear=findNearest(obj);
					if(oNear){
						oNear.className='box';
					}
				};
				document.onmouseup=function(){
					document.onmousemove=null;
					document.onmouseup=null;
					obj.releaseCapture && obj.relaseCapture();
					var oNear=findNearest(obj);
					if(oNear){
						doMove(oNear,aPos[obj.index]);
						doMove(obj,aPos[oNear.index]);
						
						oNear.className='';
						
						var car;
						car=obj.index;
						obj.index=oNear.index;
						oNear.index=car;
					}else{
						doMove(obj,aPos[obj.index]);
					}
					
				};
				obj.setCapture && obj.setCapture();
				return false;
			};
		}
		
		
		function findNearest(obj){
			var iMin=999999999999;
			var iMinIndex=-1;
			
			for(var i=0; i<aLi.length; i++){
				if(obj==aLi[i])continue;
				if(collTest(obj,aLi[i])){
					var dis=getDis(obj,aLi[i]);
					if(dis<iMin){
						iMin=dis;
						iMinIndex=i;	
					}
				}
			}	
			
			if(iMinIndex==-1){
				return null;
			}else{
				return aLi[iMinIndex];
			}
		}
		for(var i=0; i<aLi.length; i++){
			aLi[i].style.left=aPos[i].left+'px';
			aLi[i].style.top=aPos[i].top+'px';
			aLi[i].style.position='absolute';
			aLi[i].style.margin=0;
		}
		for(var i=0; i<aLi.length; i++){
			drag(aLi[i]);
			aLi[i].index=i;
		}
			
		function getDis(obj,obj2){
			var l1=obj.offsetLeft+obj.offsetWidth/2;
			var l2=obj2.offsetLeft+obj2.offsetWidth/2;
			
			var t1=obj.offsetTop+obj.offsetHeight/2;
			var t2=obj2.offsetTop+obj2.offsetHeight/2;
			
			var a=l1-l2;
			var b=t1-t2;
			
			return Math.sqrt(a*a+b*b);
		}
		function collTest(obj,obj2){
			var l1=obj.offsetLeft;
			var r1=obj.offsetLeft+obj.offsetWidth;
			var t1=obj.offsetTop;
			var b1=obj.offsetTop+obj.offsetHeight;
			
			var l2=obj2.offsetLeft;
			var r2=obj2.offsetLeft+obj2.offsetWidth;
			var t2=obj2.offsetTop;
			var b2=obj2.offsetTop+obj2.offsetHeight;
			
			if(r1<l2 || l1>r2 || b1<t2 || t1>b2){
				return false;
			}else{
				return true;
			}
		}
		
		var timer=setInterval(function(){
			rndPos();
		},2000);
		
		oUl.onmouseover=function(){
			clearInterval(timer);
		};
		oUl.onmouseout=function(){
			timer=setInterval(function(){
				rndPos();
			},2000);
		};
		
	};
