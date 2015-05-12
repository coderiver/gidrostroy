head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	$(".projects__marker").click(function(){
		$(this).find(".projects__info").toggleClass("is-active");
	});

});