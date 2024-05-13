$(".text-xl").click(function(){
	var bdyclass = $("#bdy").attr("class");
	
	if(bdyclass == null){	
		$("#bdy").addClass("direction-rtl");		
	}else if(bdyclass == 'direction-rtl'){	
		$("#bdy").removeClass("direction-rtl");		
		$("#bdy").addClass("direction-ltr");		
	}else if(bdyclass == 'direction-ltr'){
		$("#bdy").removeClass("direction-ltr");
		$("#bdy").addClass("direction-rtl");
	}
});