head.ready(function() {
	var map1, map2, map3;

	// contacts.html popup
	$('.js-office-1').click(function(event) {
		$('.overlay').show();
		$("body").addClass("scroll");
		$('#office-1').addClass('is-visible');
		google.maps.event.trigger(map1, 'resize');
		return false;
	});

	$('.js-office-2').click(function(event) {
		$('.overlay').show();
		$("body").addClass("scroll");
		$('#office-2').addClass('is-visible');
		google.maps.event.trigger(map2, 'resize');
		return false;
	});

	$('.js-office-3').click(function(event) {
		$('.overlay').show();
		$("body").addClass("scroll");
		$('#office-3').addClass('is-visible');
		google.maps.event.trigger(map3, 'resize');
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
	if ($('#map-office-1').length) {
		function initialize1() {
		  var myLatLng1 = new google.maps.LatLng(61.246869, 73.413953);
		  var mapOptions1 = {
		    zoom: 17,
		    center: myLatLng1
		  }
		  map1 = new google.maps.Map(document.getElementById('map-office-1'),
		                                mapOptions1);

		  var image = 'img/icons/marker-office.png';
		  var officeMarker = new google.maps.Marker({
		      position: myLatLng1,
		      map: map1,
		      icon: image
		  });
		}

		google.maps.event.addDomListener(window, 'load', initialize1);
	};
	
	if ($('#map-office-2').length) {
		function initialize2() {
		  var myLatLng2 = new google.maps.LatLng(55.641312, 37.470525);
		  var mapOptions2 = {
		    zoom: 17,
		    center: myLatLng2
		  }
		  map2 = new google.maps.Map(document.getElementById('map-office-2'),
		                                mapOptions2);

		  var image = 'img/icons/marker-office.png';
		  var officeMarker = new google.maps.Marker({
		      position: myLatLng2,
		      map: map2,
		      icon: image
		  });
		}

		google.maps.event.addDomListener(window, 'load', initialize2);
	}
	
	if ($('#map-office-3').length) {
		function initialize3() {
		  var myLatLng3 = new google.maps.LatLng(53.187549, 50.083484);
		  var mapOptions3 = {
		    zoom: 17,
		    center: myLatLng3
		  }
		  map3 = new google.maps.Map(document.getElementById('map-office-3'),
		                                mapOptions3);

		  var image = 'img/icons/marker-office.png';
		  var officeMarker = new google.maps.Marker({
		      position: myLatLng3,
		      map: map3,
		      icon: image
		  });
		}

		google.maps.event.addDomListener(window, 'load', initialize3);
	}
	


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