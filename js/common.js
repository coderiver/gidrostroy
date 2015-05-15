head.ready(function() {

	// contacts.html popup
	$('.js-office-1').click(function(event) {
		$('.overlay').show();
		$("body").addClass("scroll");
		$('#office-1').addClass('is-visible');
		return false;
	});

	$('.js-office-2').click(function(event) {
		$('.overlay').show();
		$("body").addClass("scroll");
		$('#office-2').addClass('is-visible');
		return false;
	});

	$('.js-office-3').click(function(event) {
		$('.overlay').show();
		$("body").addClass("scroll");
		$('#office-3').addClass('is-visible');
		return false;
	});

	$('.js-person-1').click(function(event) {
		$('.overlay').show();
		$("body").addClass("scroll");
		$('#person-1').addClass('is-visible');
		return false;
	});

	$('.js-person-2').click(function(event) {
		$('.overlay').show();
		$("body").addClass("scroll");
		$('#person-2').addClass('is-visible');
		return false;
	});

	$('.js-person-3').click(function(event) {
		$('.overlay').show();
		$("body").addClass("scroll");
		$('#person-3').addClass('is-visible');
		return false;
	});

	$('.js-person-4').click(function(event) {
		$('.overlay').show();
		$("body").addClass("scroll");
		$('#person-4').addClass('is-visible');
		return false;
	});

	$('.js-person-5').click(function(event) {
		$('.overlay').show();
		$("body").addClass("scroll");
		$('#person-5').addClass('is-visible');
		return false;
	});

	$('.js-person-6').click(function(event) {
		$('.overlay').show();
		$("body").addClass("scroll");
		$('#person-6').addClass('is-visible');
		return false;
	});

	$('.popup-close').click(function(event) {
		$('.overlay').hide();
		$('body').removeClass('scroll');
		$('.popup').removeClass('is-visible');
		return false;
	});

	$(".person__inner").mCustomScrollbar();

	// popup-map
	function initialize_1() {
	  var mapOptions_1 = {
	    zoom: 16,
	    center: new google.maps.LatLng(61.246869, 73.413953)
	  }
	  var map_1 = new google.maps.Map(document.getElementById('map-office-1'),
	                                mapOptions_1);

	  var image = 'img/icons/marker-office.png';
	  var myLatLng_1 = new google.maps.LatLng(61.246869, 73.413953);
	  var officeMarker = new google.maps.Marker({
	      position: myLatLng_1,
	      map: map_1,
	      icon: image
	  });
	}

	google.maps.event.addDomListener(window, 'load', initialize_1);

	function initialize_2() {
	  var mapOptions_2 = {
	    zoom: 16,
	    center: new google.maps.LatLng(55.641312, 37.470525)
	  }
	  var map_2 = new google.maps.Map(document.getElementById('map-office-2'),
	                                mapOptions_2);

	  var image = 'img/icons/marker-office.png';
	  var myLatLng_2 = new google.maps.LatLng(55.641312, 37.470525);
	  var officeMarker = new google.maps.Marker({
	      position: myLatLng_2,
	      map: map_2,
	      icon: image
	  });
	}

	google.maps.event.addDomListener(window, 'load', initialize_2);

	function initialize_3() {
	  var mapOptions_3 = {
	    zoom: 16,
	    center: new google.maps.LatLng(53.187549, 50.083484)
	  }
	  var map_3 = new google.maps.Map(document.getElementById('map-office-3'),
	                                mapOptions_3);

	  var image = 'img/icons/marker-office.png';
	  var myLatLng_3 = new google.maps.LatLng(53.187549, 50.083484);
	  var officeMarker = new google.maps.Marker({
	      position: myLatLng_3,
	      map: map_3,
	      icon: image
	  });
	}

	google.maps.event.addDomListener(window, 'load', initialize_3);
	
	// index.html slider
	$('.company__slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1
	});

	// project.html slider
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.slider-nav',
		onAfterChange: function(){
			var curIndex = $('.js-gallery-for').slickCurrentSlide();
			$('.js-gallery-nav').find('.slick-slide').removeClass('current');
			$('.js-gallery-nav').find('.slick-slide[index='+curIndex+']').addClass('current');
		}
	});
	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		focusOnSelect: true,
		onInit: function(){
			$('.js-gallery-nav').find('.slick-slide[index="0"]').addClass('current');
		}
	});

	$('.slider-nav .slick-slide').on('click', function(){
		var index = $(this).attr('index');
		$('.slider-nav').find('.slick-slide').removeClass('current');
		$(this).addClass('current');
		$('.slider-for').slickGoTo(index);
	})

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