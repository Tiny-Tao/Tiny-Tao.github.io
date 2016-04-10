// JavaScript Document
(function(){
	window.myCalendar=function (sName)
	{
		var oTxt=document.getElementsByName(sName)[0];
		oTxt.onfocus=function(){
			oBox.style.display='block';	
			oBox.style.left=oTxt.offsetLeft+'px';
			oBox.style.top=oTxt.offsetTop+oTxt.offsetHeigth+'px';
		};
		var oBox=document.createElement('div');
		oBox.className='calendar';
		oBox.innerHTML='<a href="javascript:;" class="prev">←</a>\
			<a href="javascript:;" class="next">→</a>\
			<h3>2015年05月</h3>\
			<ol>\
				<li>一</li>\
				<li>二</li>\
				<li>三</li>\
				<li>四</li>\
				<li>五</li>\
				<li class="weekend">六</li>\
				<li class="weekend">日</li>\
			</ol>\
			<ul></ul>';
			oTxt.parentNode.appendChild(oBox);
		var oUl=oBox.getElementsByTagName('ul')[0];	
		var oH3=oBox.getElementsByTagName('h3')[0];
		var oPrev=oBox.getElementsByTagName('a')[0];
		var oNext=oBox.getElementsByTagName('a')[1];
		var aLi=oUl.children;
		var iNow=0;
		function calendar()
		{
			var oDate=new Date();
			oDate.setMonth(oDate.getMonth()+iNow,1);
			oH3.innerHTML=oDate.getFullYear()+'年'+(oDate.getMonth()+1)+'月';
			
			oUl.innerHTML='';
			//插入空格
			//获取的第一天时周几
			var oDate=new Date();
			oDate.setMonth(oDate.getMonth()+iNow,1);
			oDate.setDate(1);
			var w = oDate.getDay(); // 星期
			if(w == 0)w=7;
			//w是多少，就创建多少个li-1插入到ul里
			w--;
			for(var i=0;i<w;i++)
			{
				var oLi=document.createElement('li');
				oUl.appendChild(oLi);
			}
			//往ul里插入日期，这个月有多少天就插入多少个ul
			//获取这个月有多少天
			var oDate=new Date();
			oDate.setMonth(oDate.getMonth()+iNow,1);
			oDate.setMonth(oDate.getMonth()+1,0);
			var n = oDate.getDate(); //这个月有多少天
			for(var i=0;i<n;i++)
			{
				//创建li
				var oLi=document.createElement('li');
				//因为i是从0开始；所以i+1
				oLi.innerHTML=i+1;
				oUl.appendChild(oLi);
				
				
				//移入li变背景颜色
				oLi.onmouseover=function(){
					this.style.background='#eee';
					this.style.color='#f40';
				};
				oLi.onmouseout=function(){
					this.style.background='';	
					this.style.color='';
				};
				for(var i=0;i<aLi.length;i++)
				{
					aLi[i].onclick=function(){
						oTxt.value=oDate.getFullYear()+'-'+(oDate.getMonth()+1)+'-'+this.innerHTML;	
						oBox.style.display='none';
					};		
				}
			}
			if(iNow==0)
			{
				//获取当前日期
				var oDate=new Date();
				var today=oDate.getDate();
				//把li的html变成当前日期	
				for(var i=0;i<aLi.length;i++)
				{
					if(aLi[i].innerHTML<today)
					{
						aLi[i].className='past';	
					}else if(aLi[i].innerHTML == today){
						aLi[i].className='today';	
					}
				}
			}else if( iNow<0){
				for(var i=0;i<aLi.length;i++){
					aLi[i].className='past';
				}
			}
			
		}
		calendar();
		oPrev.onclick=function(){
			iNow--;
			calendar();
			
		};
		oNext.onclick=function(){
			iNow++;
			calendar();
			
		};	
	}	
	var oLink=document.createElement('link');
	oLink.rel='stylesheet';
	oLink.href='myCalendar.css';
	var oHead=document.getElementsByTagName('head')[0];
	oHead.appendChild(oLink);
})();




















