head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	
	$('body').click(function(event){
		$(".projects__info").removeClass('is-active');
	});

	$(".projects__marker").click(function(event){
		$(".projects__info").removeClass('is-active');
		$(this).find(".projects__info").toggleClass("is-active");
		event.preventDefault();
		return false;
	});

});