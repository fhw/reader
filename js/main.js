$(function() {
	$(".show_set").click(function() {
		$(".buttom_nav").fadeToggle();
	});
	
	$(".set_font").click(function() {
		$(".set_font_show").fadeToggle();
	});
	
	$(".set_background").click(function() {
		$(".set_background_show").fadeToggle();
	});
	
	$(".set_more").click(function() {
		$(".set_more_show").fadeToggle();
	});

	$(".font-minus").click(function(){
		var ofz=$("#content").css("font-size");
		$(".chapter_content").css("font-size",parseInt(ofz)-1+"px");
		if(parseInt(ofz)<12){
			$(".chapter_content").css("font-size",parseInt(ofz)+"px");
		}
	})
	
	$(".font-add").click(function(){
		var ofz=$("#content").css("font-size");
		$(".chapter_content").css("font-size",parseInt(ofz)+1+"px");
		if(parseInt(ofz)>24){
			$(".chapter_content").css("font-size",parseInt(ofz)+"px");
		}
	})
	
	$(".bgc1").click(function(){
		$(".chapter_content").css("background","white");
		$("#content span").css("color","black")
	})
	
	$(".bgc2").click(function(){
		$(".chapter_content").css("background","#DDDDDD");
		$("#content span").css("color","black")
	})
	
	$(".bgc3").click(function(){
		$(".chapter_content").css("background","#81c6e7");
		$("#content span").css("color","black")
	})
	
	$(".bgc4").click(function(){
		$(".chapter_content").css("background","#e7b681");
		$("#content span").css("color","black")
	})
	
	$(".bgc5").click(function(){
		$(".chapter_content").css("background","#595959");
		$("#content span").css("color","white")
	})
	
	
	
})
