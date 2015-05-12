head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	
	// project.html slider
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: true
	});

	// projects.html
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