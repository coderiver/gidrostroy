head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// contacts.html popup
	$('.js-office').click(function(event) {
		$('.overlay').show();
		$('.popup_contacts').addClass('is-visible');
		return false;
	});

	$('.js-person').click(function(event) {
		$('.overlay').show();
		$('.popup_contacts').addClass('is-visible');
		return false;
	});

	$('.popup-close').click(function(event) {
		$('.overlay').hide();
		$('.popup').removeClass('is-visible');
		return false;
	});

	// popup-map
	function initialize_0() {
	  var mapOptions_0 = {
	    zoom: 4,
	    center: new google.maps.LatLng(61.246869, 73.413953)
	  }
	  var map_0 = new google.maps.Map(document.getElementById('map-canvas'),
	                                mapOptions_0);

	  var image = 'images/beachflag.png';
	  var myLatLng = new google.maps.LatLng(61.246869, 73.413953);
	  var beachMarker = new google.maps.Marker({
	      position: myLatLng,
	      map: map,
	      icon: image
	  });
	}

	google.maps.event.addDomListener(window, 'load', initialize_0);
	
	// project.html slider
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		focusOnSelect: true
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