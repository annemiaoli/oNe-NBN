$(document).ready(function() {
	$(".infobox").hide();
});

$(document).ready(function() {
	// every time you click on a div with class 'element-item'
	$(".element-item").on("click",function(){
		// $(this) refers to $('.element-item')
		// use built-in jquery function FIND to find a child node with the class 'infobox'
		// if found, fade in that element with class 'infobox'
		$(this).find('.infobox').fadeIn('slow');
	 });
});
