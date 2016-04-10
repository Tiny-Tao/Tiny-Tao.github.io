	function getStyle(obj,name){
		return (obj.currentStyle || getComputedStyle(obj,false))[name];	
	};	
